import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from '../components/App/History/HistoryItem';

const HistoryContainer = ({ history = [] }) => {
  const historyElements = history.map((element, i) => (
    <li key={element.url + i}>
      <HistoryItem {...element} />
    </li>
  ));

  return <ul>{historyElements}</ul>;

};

HistoryContainer.propTypes = {
  history: PropTypes.array
};

export default HistoryContainer;
