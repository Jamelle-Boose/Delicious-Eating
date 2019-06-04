import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const APP_ID = '1152003e'
  const APP_KEY = 'ccce8360d4b0c5e952da8ed25b3bc191'

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [counter, setCounter] = useState(0)
  useEffect(() => {
    console.log(`Effect has been run`);
  })

  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type='text' />
        <button className='search-button' type='submit'>
        </button>
        {counter}
      </form>
    </div>
  );
}

export default App;
