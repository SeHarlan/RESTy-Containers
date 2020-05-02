import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../components/App/Form/Form';


const FormContainer = ({ setFetchData }) => {
  const [selectedOption, setSelectedOption] = useState('GET');
  const [json, setJson] = useState('');
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [bearerToken, setBearerToken] = useState('');
  

  const handleJsonChange = ({ target }) => setJson(target.value);
  const handleUrlChange = ({ target }) => setUrl(target.value);
  const handleOptionChange = ({ target }) => setSelectedOption(target.value);
  const handleNameChange = ({ target }) => setName(target.value);
  const handlePasswordChange = ({ target }) => setPassword(target.value);
  const handleBearerTokenChange = ({ target }) => setBearerToken(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFetchData({
      url: url,
      method: selectedOption,
      json: json,
      username: name,
      password: password,
      bearerToken: bearerToken
    });
  };

  return (<Form 
    urlInput={url} 
    jsonInput={json} 
    onSubmit={handleSubmit} 
    selectedOption={selectedOption} 
    onOptionChange={handleOptionChange} 
    onUrlChange={handleUrlChange} 
    onJsonChange={handleJsonChange} 
    onBearerTokenChange={handleBearerTokenChange} 
    onPasswordChange={handlePasswordChange} 
    onNameChange={handleNameChange}/>);
};

FormContainer.propTypes = {
  setFetchData: PropTypes.func.isRequired
};

export default FormContainer;
