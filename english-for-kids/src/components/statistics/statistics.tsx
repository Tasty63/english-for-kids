import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Category, StatisticWord, StatisticTableWord, SortConfigType } from '../../app.api';
import { resetStatistics } from '../../redux/actions';
import { RootState } from '../../redux/store';
import { RouteNames, SortDirections, SortKeys } from '../../utils/config';
import { getAccuracyPercentage } from '../../utils/helpers';
import './statistics.scss';

export type StatisticsProps = {
  requestSort: (key: SortKeys) => void;
  table: StatisticTableWord[];
  tableColumns: SortKeys[];
};

const Statistics: React.FC<StatisticsProps> = ({ requestSort, table, tableColumns }: StatisticsProps) => {
  const dispatch = useDispatch();

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
