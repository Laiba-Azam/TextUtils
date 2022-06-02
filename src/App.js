
import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Alert from './components/Alert';
import Abo from './components/Abo';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  // code for dark to light mode
  const toggleMode=()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor="#212529"
      setAlert("success","Dark mode has been enabled")
      
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white"
      setAlert("success","Light mode has been enabled")
      
    }

  }
  // code for setalert 
 const setAlert=(type,message)=>{
    setalert({
      message:message,
      type:type
      
    })
    setTimeout(() => {
      setalert(null)
      
    }, 3000);
  }
  // usetate
  const[mode,setmode]=useState('light');
  const[alert,setalert]=useState(null);
  return (
    <Router>
      <div className="App">
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert dismiss={alert}/>
     <Routes>
          <Route exact path="/about" element={<Abo  mode={mode} />}/>
          <Route path="/" element={ <TextForm heading="TextUtils-Word Counter Character Counter " mode={mode} setAlert={setAlert}/>}/>          
        </Routes>
      
    </div>
    </Router>
    
  );
}

export default App;
