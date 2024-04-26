import Navbar from './Navbar'
import Form from './Form';
import About from './About';
import Alert from './Alert'
import React, { useState } from 'react';
function App() {

  const [alert, setAlert] = useState(null)
  const [mode, setMode] = useState('dark');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })

    // After 2 second alert will dispare
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#0d0833';
      showAlert("Dark mode turn on", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode turn on", "success")
    }
  }
  return (
    <>
      <Navbar title='Navbar' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Form heading="Enter the text to modify" mode={mode} showAlert={showAlert} />
      {/* <About /> */}
    </>
  );
}

export default App;
