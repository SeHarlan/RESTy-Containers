import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from '../components/App/History/HistoryItem';

import style from './HistoryContainer.css';

const HistoryContainer = ({ history = [] }) => {
  const historyElements = history.map((element, i) => (
    <li key={element.url + i}>
      <HistoryItem {...element} />
    </li>
  ));

  return (
    <section className={style.HistoryContainer}>
      <h3>History</h3>
      <ul>{historyElements}</ul>
    </section>
  );

};

HistoryContainer.propTypes = {
  history: PropTypes.array
};

export default HistoryContainer;
