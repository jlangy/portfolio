import React from 'react';
import './App.css';
import Introduction from './components/Introduction'
import ProjectGrid from './components/ProjectsGrid';
import Contact from './components/Contact';

function App() {

  return (
    <div className="App">
      <Introduction/>
      <ProjectGrid />
      <Contact />
    </div>
  );
}

export default App;
