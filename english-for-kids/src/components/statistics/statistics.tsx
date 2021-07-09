import { useSelector } from 'react-redux';
import { Category, StatisticWord, StatisticTableWord } from '../../app.api';

import { RootState } from '../../redux/store';
import './statistics.scss';

const Statistics: React.FC = () => {
  const categories = useSelector((state: RootState) => state.categories.list);
  const statistics = useSelector((state: RootState) => state.statistics);

  const makeTable = (categoriesData: Category[], statisticsData: StatisticWord[]): StatisticTableWord[] => {
    return categoriesData.reduce((table: StatisticTableWord[], category) => {
      const tableItem = category.words.map(categoryItem => {
        const statWord = statisticsData.find(statItem => statItem.id === categoryItem.id);

        return {
          id: categoryItem.id,
          category: category.name,
          word: categoryItem.word,
          translation: categoryItem.translation,
          trainClicks: statWord?.trainClicks,
          guesses: statWord?.guesses,
          mistakes: statWord?.mistakes,
        };
      });

      table.push(...tableItem);
      return table;
    }, []);
  };

  return (
    <div className="statistics">
      <table className="statistics__table">
        <thead className="statistics__header">
          <tr className="statistics__head">
            <th className="statistics__title">Category</th>
            <th className="statistics__title">Word</th>
            <th className="statistics__title">Translation</th>
            <th className="statistics__title">Trained</th>
            <th className="statistics__title">Correct</th>
            <th className="statistics__title">Mistakes</th>
            <th className="statistics__title">%</th>
          </tr>
        </thead>
        <tbody className="statistics__body">
          {makeTable(categories, statistics).map(item => {
            return (
              <tr className="statistics__row" key={item.id}>
                <td className="statistics__item">{item.category}</td>
                <td className="statistics__item">{item.word}</td>
                <td className="statistics__item">{item.translation}</td>
                <td className="statistics__item">{item.trainClicks}</td>
                <td className="statistics__item">{item.guesses}</td>
                <td className="statistics__item">{item.mistakes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
