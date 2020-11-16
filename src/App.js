import React, { useState } from 'react';
import './App.scss';
import Checkboxes from './Components/Checkboxes'
import TextInput from './Components/TextInput'

function App() {

  const [params, setParams] = useState({
    'parentheses': true,
    'quotes': true,
    'smallWords': true
  })

  // callback function to alter params array
  const handleChange = (name, newVal) => {
    setParams({...params, [name]: newVal})
  }

  return (
    <div className='App'>
      <h1 className='title'>Word Counter</h1>
      <Checkboxes params={params} onChange={handleChange}/>
      <hr/>
      <TextInput params={params}/>
      <br/>
      <div className='block'>
        <p className='is-size-7'>
          Found a bug? Send me an&nbsp;
            <a href='mailto:brianaecowles@gmail.com' target='blank'>
              email
            </a> 
          &nbsp;or create an issue&nbsp;
            <a href='https://github.com/brianacowles/dynamic_word_counter/issues' target='blank'>
              here
            </a>.
        </p>
      </div>
    </div>
  );
}

export default App;
