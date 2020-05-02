import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const style = {
  backgroundColor: 'silver',
  boxShadow: 'inset 0 0 1rem rgba(0, 0, 0, 0.3)',
  padding: '1rem',
  margin: 0,
  overflow: 'scroll',
  width: '100%'
};
const Results = ({ result }) => (
  <ReactJson src={result} style={style}/>
);
  
Results.propTypes = {
  result: PropTypes.array
};
  
export default Results;
  

