import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Category, StatisticWord, StatisticTableWord, SortConfigType } from '../../app.api';
import { RootState } from '../../redux/store';
import { SortDirections, SortKeys } from '../../utils/config';
import './statistics.scss';

const Statistics: React.FC = () => {
  const categories = useSelector((state: RootState) => state.categories.list);
  const statistics = useSelector((state: RootState) => state.statistics);
  const [sortConfig, setSortConfig] = useState<SortConfigType | null>(null);

  const getAccuracyPercentage = (corrects?: number, mistakes?: number): number => {
    const maxPercent = 100;
    const minPercent = 0;

    if (!corrects) {
      return minPercent;
    }
    if (!mistakes) {
      return maxPercent;
    }
    return Math.floor(maxPercent / ((corrects + mistakes) / corrects));
  };

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
          trainClicks: statWord?.trainClicks,
          guesses: statWord?.guesses,
          mistakes: statWord?.mistakes,
          accuracy: getAccuracyPercentage(statWord?.guesses, statWord?.mistakes),
        };
      });
    });
  };
  const table = makeTable(categories, statistics);

  if (sortConfig !== null) {
    table.sort((first, second) => {
      const firstKey = first[sortConfig.key];
      const secondKey = second[sortConfig.key];
      if (firstKey !== undefined && secondKey !== undefined) {
        if (firstKey < secondKey) {
          return sortConfig.direction === SortDirections.Asc ? -1 : 1;
        }
        if (firstKey > secondKey) {
          return sortConfig.direction === SortDirections.Asc ? 1 : -1;
        }
      }
      return 0;
    });
  }

  return (
    <div className="statistics">
      <div className="statistics__action-buttons">
        <button className="statistics__reset" type="button">
          Reset
        </button>
        <button className="statistics__repeat" type="button">
          Repeat difficult words
        </button>
      </div>
      <table className="statistics__table">
        <thead className="statistics__header">
          <tr className="statistics__head">
            <th className="statistics__title">
              <button className="statistics__button" type="button" onClick={() => requestSort(SortKeys.Category)}>
                Category
              </button>
            </th>
            <th className="statistics__title">
              <button className="statistics__button" type="button" onClick={() => requestSort(SortKeys.Word)}>
                Word
              </button>
            </th>
            <th className="statistics__title">
              <button className="statistics__button" type="button" onClick={() => requestSort(SortKeys.Translation)}>
                Translation
              </button>
            </th>
            <th className="statistics__title">
              <button className="statistics__button" type="button" onClick={() => requestSort(SortKeys.TrainClicks)}>
                Trained
              </button>
            </th>
            <th className="statistics__title">
              <button className="statistics__button" type="button" onClick={() => requestSort(SortKeys.Guesses)}>
                Correct
              </button>
            </th>
            <th className="statistics__title">
              <button className="statistics__button" type="button" onClick={() => requestSort(SortKeys.Mistakes)}>
                Mistakes
              </button>
            </th>
            <th className="statistics__title">
              <button className="statistics__button" type="button" onClick={() => requestSort(SortKeys.Accuracy)}>
                Accuracy %
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="statistics__body">
          {table.map(item => {
            return (
              <tr className="statistics__row" key={item.id}>
                <td className="statistics__item">{item.category}</td>
                <td className="statistics__item">{item.word}</td>
                <td className="statistics__item">{item.translation}</td>
                <td className="statistics__item">{item.trainClicks}</td>
                <td className="statistics__item">{item.guesses}</td>
                <td className="statistics__item">{item.mistakes}</td>
                <td className="statistics__item">{item.accuracy}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
