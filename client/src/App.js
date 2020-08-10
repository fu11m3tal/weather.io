import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="search">
          <input placeholder="Search"/>
        </div>
      </div>
      <div className="row">
        <div className="location">
          <h2>San Francisco, CA</h2>
          <h3>Saturday 11, January 2020</h3>

          <h1>Today</h1>
        </div>
      </div>
      <div className="row">
        {/* <div/> */}
        <div className="temperature">15°c</div>
        {/* <div/> */}
      </div>
      
      <div className="column">
        <div className="weekly">
          Monday
          <br></br>
          90°c
        </div>
        <div className="weekly">
          Tuesday
          <br></br>
          93°c
        </div>
        <div className="weekly">
          Wednesday
          <br></br>
          92°c
        </div>
        <div className="weekly">
          Thursday
          <br></br>
          97°c
        </div>
        <div className="weekly">
          Friday
          <br></br>
          87°c
        </div>
      </div>
      <div className="column"></div>
      <div className="column"></div>
      <div className="column"></div>
    </div>
  );
}

export default App;
