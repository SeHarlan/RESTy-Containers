import React from 'react'; 
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';
import style from './Form.css';


const Form = ({ onSubmit, urlInput, jsonInput, usernameInput, passwordInput, bearerTokenInput, selectedOption = 'GET', onOptionChange, onJsonChange, onUrlChange, onPasswordChange, onNameChange, onBearerTokenChange }) => {

  const radios = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].map(method => (
    <RadioButton key={method} value={method} selectedOption={selectedOption} onOptionChange={onOptionChange} />));

  return (
    <form className={style.Form} onSubmit={onSubmit}>

      <input type="text" name="url" value={urlInput} onChange={onUrlChange} placeholder="URL"/>
      <section>

        {radios}
        <button type="submit">Fetch</button>
      </section>
      <section className={style.Json}>
        <textarea name="json" value={jsonInput} cols="30" rows="10" onChange={onJsonChange} placeholder="Raw JSON body"></textarea>
        <div className={style.Headers}>
          <h3>Basic Authorization</h3>
          <span>Username: </span><input type="text" name="username" value={usernameInput} onChange={onNameChange} placeholder="Username"/>
      
          <span>Password: </span><input type="text" name="password" value={passwordInput} onChange={onPasswordChange} placeholder="Password"/>
        
          <span>Bearer Token: </span><input type="text" name="bearerToken" value={bearerTokenInput} onChange={onBearerTokenChange} placeholder="Bearer Token" />
        </div>
      </section>
    </form>);
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  urlInput: PropTypes.string.isRequired,
  jsonInput: PropTypes.string,
  usernameInput: PropTypes.string,
  passwordInput: PropTypes.string,
  bearerTokenInput: PropTypes.string,
  selectedOption: PropTypes.string,
  onOptionChange: PropTypes.func.isRequired,
  onJsonChange: PropTypes.func.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onBearerTokenChange: PropTypes.func.isRequired
};
export default Form;
