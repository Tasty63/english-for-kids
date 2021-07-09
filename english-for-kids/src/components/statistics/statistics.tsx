import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import './statistics.scss';

const Statistics: React.FC = () => {
  const categories = useSelector((state: RootState) => state.categories.list);
  const statistics = useSelector((state: RootState) => state.statistics);

  // export type WordStatistic = {
  //   id: string;
  //   category: string;
  //   word: string;
  //   translation: string;
  //   trainClicks: number;
  //   guesses: number;
  //   mistakes: number;
  // };

  // const makeTable = (): any => {
  //   return statistics.map((item, index, statsArr) =>
  //     statsArr.reduce((acc, statsArrItem) => {
  //       for (let key in statsArrItem) {
  //         acc.key = statsArrItem.key;
  //       }

  //       return acc;
  //     }, {}),
  //   );
  // };

  const makeTable = (): any => {
    // const categoriesWords = categories.map(category => category.words).flat();
    // const bla = categories.reduce((acc, item, index) => {
    //   return item.words.reduce((wordAcc, wordItem) => {
    //     return wordAcc[]
    //   }, {});
    // }, {});
    console.log(categories);

    return statistics.map((item, index, statsArr) => {
      // const statWord = categoriesWords.find(word => word.id === item.id);

      // const matchedCategory = categories.find(category => category.words);
      // console.log(item);
      return item;
    });
  };
  const summary = makeTable();

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
          <tr className="statistics__row">
            <td className="statistics__item">данные</td>
            <td className="statistics__item">данные</td>
            <td className="statistics__item">данные</td>
            <td className="statistics__item">данные</td>
            <td className="statistics__item">данные</td>
            <td className="statistics__item">данные</td>
            <td className="statistics__item">данные</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
