// import logo from './logo.svg';
import './App.css';
import React, {useState}from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  let [mode,setMode]=useState('light')
  let [alert,setAlert]=useState(null)
  let [text,setText]=useState('Enable Dark Mode')

  let showAlert =(message,type)=>{
    setAlert({
      msg:message,
      typ:type,
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  let toggleMode =()=>{
    if(mode==='light')
    {
      setMode('dark')
      setText('Enable Light Mode')
      document.body.style.backgroundColor='#06062e'
      showAlert("Dark Mode has been enabled","success")
      document.title="Utils - Darkmode"
    }
    else
    {
      setMode('light')
      setText('Enable Dark Mode')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been enabled","success")
      document.title="Utils - Lightmode"
     }
  }

  
  return (
    <>
    <Router>
      <Navbar Title="TextUtils" About="About text" Home="Home" mode={mode} toggleMode={toggleMode} text={text}/>
      <Alert alert={alert}/>
     
      <div className="container my-3">
        <Routes>  
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/" element=
              { 
                <Textform heading="Enter the text to analyze below" showAlert={showAlert}  mode={mode}/>
                }/>
        </Routes>  
      </div>
    </Router>
    </>
  );
}

export default App;
