import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Text from './components/Text';
import React, { useState } from 'react'
import Alert from './components/Alert';



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    })
  }
  const toggle = ()=> {
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("dark Mode", "success");
      
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light Mode", "success");
    }
  }
  return (
    <>
    <Navbar  title="Club" mode={mode} togglemode={toggle}/>
    <Alert alert={alert}/>
    <div className="container">
    <Text heading="Enter the text to analyze" mode={mode}/>
    {/* <About mode={mode}/> */}
    </div>

    
    </>
    

  );
}

export default App;
