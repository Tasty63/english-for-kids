import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Category, StatisticWord, StatisticTableWord, SortConfigType } from '../../app.api';
import { resetStatistics } from '../../redux/actions';
import { RootState } from '../../redux/store';
import { RouteNames, SortDirections, SortKeys } from '../../utils/config';
import { getAccuracyPercentage } from '../../utils/helpers';
import './statistics.scss';

const Statistics: React.FC = () => {
  const categories = useSelector((state: RootState) => state.categories.list);
  const statistics = useSelector((state: RootState) => state.statistics);
  const dispatch = useDispatch();
  const [sortConfig, setSortConfig] = useState<SortConfigType | null>(null);

  const requestSort = (key: SortKeys) => {
    let direction = SortDirections.Desc;
    if (sortConfig && sortConfig.key === key && sortConfig.direction === SortDirections.Desc) {
      direction = SortDirections.Asc;
    }
    setSortConfig({ key, direction });
  };

  const makeTable = (categoriesData: Category[], statisticsData: StatisticWord[]): StatisticTableWord[] => {
    return categoriesData.flatMap(category => {
      return category.words.map(categoryItem => {
        const statWord = statisticsData.find(statItem => statItem.id === categoryItem.id);

        return {
          id: categoryItem.id,
          category: category.name,
          word: categoryItem.word,
          translation: categoryItem.translation,
          trained: statWord?.trained,
          guesses: statWord?.guesses,
          mistakes: statWord?.mistakes,
          accuracy: getAccuracyPercentage(statWord?.guesses, statWord?.mistakes),
        };
      });
    });
  };

  const sortTable = (table: StatisticTableWord[], config: SortConfigType) => {
    return table.slice().sort((first, second) => {
      const firstKey = first[config.key];
      const secondKey = second[config.key];
      if (firstKey === undefined || secondKey === undefined) {
        return 0;
      }
      if (firstKey < secondKey) {
        return config.direction === SortDirections.Asc ? -1 : 1;
      }
      if (firstKey > secondKey) {
        return config.direction === SortDirections.Asc ? 1 : -1;
      }
      return 0;
    });
  };

  let table = makeTable(categories, statistics);
  if (sortConfig !== null) {
    table = sortTable(table, sortConfig);
  }

  const tableColumns: SortKeys[] = [
    SortKeys.Category,
    SortKeys.Word,
    SortKeys.Translation,
    SortKeys.TrainClicks,
    SortKeys.Guesses,
    SortKeys.Mistakes,
    SortKeys.Accuracy,
  ];

  return (
    <div className="statistics">
      <div className="statistics__action-buttons">
        <button className="statistics__reset" type="button" onClick={() => dispatch(resetStatistics())}>
          Reset
        </button>
        <button className="statistics__repeat" type="button">
          <Link to={`/category/${RouteNames.DifficultWords}`} className="statistics__link">
            Repeat difficult words
          </Link>
        </button>
      </div>
      <div className="statistics__wrapper">
        <table className="statistics__table">
          <thead className="statistics__header">
            <tr className="statistics__head">
              {tableColumns.map(column => {
                return (
                  <th className="statistics__title" key={column}>
                    <button className="statistics__button" type="button" onClick={() => requestSort(column)}>
                      {column === SortKeys.Accuracy ? `${column} %` : column}
                    </button>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="statistics__body">
            {table.map(row => {
              return (
                <tr className="statistics__row" key={row.id}>
                  <td className="statistics__item">{row.category}</td>
                  <td className="statistics__item">{row.word}</td>
                  <td className="statistics__item">{row.translation}</td>
                  <td className="statistics__item">{row.trained}</td>
                  <td className="statistics__item">{row.guesses}</td>
                  <td className="statistics__item">{row.mistakes}</td>
                  <td className="statistics__item">{row.accuracy}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Statistics;
