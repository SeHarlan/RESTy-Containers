import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ url, method, json, username, password, bearerToken }) => (
  <>
    <h2>{method}</h2>
    <p>{url}</p>
  </>
);

HistoryItem.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default HistoryItem;
