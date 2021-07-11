import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Category, StatisticWord, StatisticTableWord, SortConfigType } from '../../app.api';
import { RootState } from '../../redux/store';
import { SortDirections, SortKeys } from '../../utils/config';
import { getAccuracyPercentage } from '../../utils/helpers';
import Statistics from './statistics';
import './statistics.scss';

const StatisticsContainer: React.FC = () => {
  const categories = useSelector((state: RootState) => state.categories.list);
  const statistics = useSelector((state: RootState) => state.statistics);
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

  return <Statistics requestSort={requestSort} table={table} tableColumns={tableColumns} />;
};

export default StatisticsContainer;
