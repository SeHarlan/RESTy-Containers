import React from 'react';
import PropTypes from 'prop-types';
import JSONPretty from 'react-json-pretty';

const Results = ({ result }) => (
  <JSONPretty id="json-pretty" data={result}></JSONPretty>
);

Results.propTypes = {
  result: PropTypes.array
};

export default Results;
