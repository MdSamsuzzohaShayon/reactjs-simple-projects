import React from 'react';
import ClassComponent from './components/ClassBased/ClassComponent';
import FunctionComponent from './components/FunBased/FunctionComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <ClassComponent name="Some name" /> */}
      <FunctionComponent />
    </div>
  );
}

export default App;
