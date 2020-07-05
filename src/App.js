import React from 'react';
import './App.css';
import Dinner from './dinner.js'


// This is a functional component
function App() {
  return (
    <div className="App">

      {/* <Dinner></Dinner> */}
      {/* Passing data from parent to child */}
      <Dinner dishname="Beef Biryani" sweetdish="Kheer" />

      <hr/>

      {/* we can reuse components like this */}
      <Dinner dishname="Chicken Biryani" sweetdish="jalebi" />

    </div>
  );
}

export default App;
