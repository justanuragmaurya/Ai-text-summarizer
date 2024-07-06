import './App.css';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent'
import { useState } from 'react';

function App() {
  const[mode,setmode]= useState('light');
  const[alert,setAlert]= useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      message: message,
      type: type
    })
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode("dark")
      document.body.style.backgroundColor='#121212'
      showAlert("Changed Mode to dark-color","Success")
      setTimeout(()=>{
        setAlert(null);
      },2000)
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert("Changed Mode to light-color","Success")
      setTimeout(()=>{
        setAlert(null);
      },2000)
    }
  }

  return (
    <>
    <NavBar mode={mode} toggleMode={toggleMode}/>
    <Alert alert ={alert}/>
    <div className="container my-3">
      <MainContent heading="Summarize Text with AI" theme={mode}/>
    </div>
    </>
  );
}
export default App;