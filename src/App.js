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

  console.log(params)

  return (
    <div className='App'>
      <h1 className='title'>Word Counter</h1>
      <Checkboxes params={params} onChange={handleChange}/>
      <hr />
      <TextInput params={params}/>
    </div>
  );
}

export default App;
