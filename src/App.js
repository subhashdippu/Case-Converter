import Navbar from './Navbar'
import Form from './Form';
import About from './About';
import React, { useState } from 'react';
function App() {

  const [mode, setMode] = useState('dark');
  // let mode = 'dark'
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#0d0833';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title='Navbar' mode={mode} toggleMode={toggleMode} />
      <Form heading="Enter the text to modify" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
