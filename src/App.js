import React, {useEffect} from 'react';
import './App.css';
import Introduction from './components/Introduction'
import TypeGame from './components/TypeGame'

function App() {
  return (
    <div className="App">
      <Introduction />
      <TypeGame text={"some sample text that you can use to test out how fast you can type things on on a keyboard"}/>
    </div>
  );
}

export default App;
