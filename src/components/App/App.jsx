import React, { useState, useEffect } from 'react';

import { customFetch } from '../../services/custom.js';

import FormContainer from '../../containers/FormContainer';
import HistoryContainer from '../../containers/HistoryContainer';
import Results from '../Results';

import style from './App.css';

export default function App() {
  const [history, setHistory] = useState([]);
  const [fetchData, setFetchData] = useState(null);

  const [result, setResult] = useState([]);



  useEffect(() => {
    if(!fetchData) return; 
    setResult(['...Loading (or Nothing Found)']);
    const { url, method, json } = fetchData;
    customFetch(url, method, json).then(res => {
      if(res === []) {
        setResult(['No Results Found']);
      } else {
        setResult(res);
        setHistory(prev => [...prev, { url, method }]);
      }
    });

  }, [fetchData]);
  

  return (
    <>
      <h1 className={style.header}>REST CLIENT</h1>
      <section className={style.body}>
        <HistoryContainer history={history}/>
        <div>
          <FormContainer setFetchData={setFetchData}/>
          <Results result={result}/>
        </div>
      </section>
    </>);
}
  
