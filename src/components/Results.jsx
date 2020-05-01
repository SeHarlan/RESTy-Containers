import React from 'react';
import PropTypes from 'prop-types';
import JSONPretty from 'react-json-pretty';

import style from './Results.css';

const Results = ({ result }) => (
  <JSONPretty className={style.Results} data={result}></JSONPretty>
);

Results.propTypes = {
  result: PropTypes.array
};

export default Results;
