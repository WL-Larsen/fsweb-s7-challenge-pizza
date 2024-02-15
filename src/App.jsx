import { useState } from 'react';
import './App.css';
import Main from './layouts/Main';
/* import Header from "./layouts/Header.jsx"; */
import './layouts/Layouts.css';
/* import { Switch, Route } from 'react-router-dom'; */

function App() {
  const [id, setId] = useState(null)

  return (
    <>
      <div className='content-section'>
       <Main id={id}>
       </Main>
      </div>
    </>
  )
}

export default App
