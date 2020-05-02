import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form component', () => {
  it('renders Form', () => {
    const wrapper = shallow(<Form 
      onSubmit={() => {}}
      urlInput="url"
      jsonInput="url"
      selectedOption="GET"
      onOptionChange={()=>{}}
      onJsonChange={()=>{}}
      onUrlChange={()=>{}} 
      onBearerTokenChange={()=>{}}
      onNameChange={()=>{}}
      onPasswordChange={()=>{}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
