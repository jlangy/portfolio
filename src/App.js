import React, {useEffect, useState} from 'react';
import './App.css';
import Introduction from './components/Introduction'
import TypeGame from './components/TypeGame'
import ProjectGrid from './components/ProjectsGrid';

function App() {

  return (
    <div className="App">
      <Introduction/>
      {/* <TypeGame playing={playing} close={() => setPlaying(false)}/> */}
      <ProjectGrid />
    </div>
  );
}

export default App;
