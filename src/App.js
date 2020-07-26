import React from 'react';
import logo from './logo.svg';
import About from './Components/About';
import About2 from './Components/About2';
import './App.css';
import GetImages from './Components/GetImages';
import Calculator from './Components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <section>
          <About />
          <About2 />
          <GetImages />
          <hr />
      </section> */}
      <Calculator />
      </header>
    </div>
  );
}

export default App;
