import React, { useState, useEffect } from 'react';

import { customFetch } from '../../services/custom.js';

import FormContainer from '../../containers/FormContainer';
import HistoryContainer from '../../containers/HistoryContainer';
import Results from '../Results';

export default function App() {
  const [history, setHistory] = useState([]);
  const [fetchData, setFetchData] = useState(null);

  const [result, setResult] = useState([]);



  useEffect(() => {
    if(!fetchData) return; 

    const { url, method, json } = fetchData;
    setHistory(prev => [...prev, { url, method }]);
    customFetch(url, method, json).then(res => setResult(res));

  }, [fetchData]);
  

  return (
    <>
      <FormContainer setFetchData={setFetchData}/>
      <Results result={result}/>
      <HistoryContainer history={history}/>
    </>);
}
  
