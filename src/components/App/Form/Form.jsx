import React from 'react'; 
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';
import style from './Form.css';


const Form = ({ onSubmit, urlInput, jsonInput, selectedOption = 'GET', onOptionChange, onJsonChange, onUrlChange }) => {

  const radios = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].map(method => (
    <RadioButton key={method} value={method} selectedOption={selectedOption} onOptionChange={onOptionChange} />));

  return (
    <form className={style.Form} onSubmit={onSubmit}>

      <input type="text" name="url" value={urlInput} onChange={onUrlChange} placeholder="URL"/>
      <section>

        {radios}
        <button type="submit">Fetch</button>
      </section>
    
      <textarea name="jsonBody" value={jsonInput} cols="50" rows="10" onChange={onJsonChange} placeholder="Raw JSON body"></textarea>
    </form>);
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  urlInput: PropTypes.string.isRequired,
  jsonInput: PropTypes.string,
  selectedOption: PropTypes.string,
  onOptionChange: PropTypes.func.isRequired,
  onJsonChange: PropTypes.func.isRequired,
  onUrlChange: PropTypes.func.isRequired
};
export default Form;
