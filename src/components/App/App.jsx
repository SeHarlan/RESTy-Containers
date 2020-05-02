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
    customFetch(fetchData).then(res => {
      if(res === []) {
        setResult(['No Results Found']);
      } else {
        setResult(res);
        setHistory(prev => [...prev, fetchData]);
      }
    });

  }, [fetchData]);
  

  return (
    <>
      <h1 className={style.header}>REST CLIENT</h1>
      <section className={style.body}>
        <HistoryContainer history={history}/>
        <article>
          <FormContainer setFetchData={setFetchData}/>
          <Results result={result}/>
        </article>
      </section>
    </>);
}
  
