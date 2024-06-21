import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Tophead from './Components/tophead/Tophead';
import Mains from './Components/main/Mains';
import Foots from './Components/footer/Foots';

function App() {
  return (
    <>
      <Tophead />
      <Mains />
      <Foots />
    </>
  );
}

export default App;
