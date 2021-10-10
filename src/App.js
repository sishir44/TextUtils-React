import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';
import Alert from './component/Alert';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

const removeBodyClasses = ()=>{
  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-dark');
  document.body.classList.remove('bg-warning');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-success');
}

  const toggleMode = (cls)=> {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Dark mode has been enabled", "success");
       //document.title = "TextUtils - Dark Mode";

    //  setInterval(() => {
    //     document.title = "TextUtils is Amazing Mode";
    //   }, 2000);
    //   setInterval(() => {
    //     document.title = "Install TextUtils Now";
    //   }, 1500); 
      
    }
    else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled", "success");
      //  document.title = "TextUtils - Light Mode";

    }
  }

  return (
  <>
  <Router>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
    {/*<Navbar title="TextUtils"/>*/}

    <Alert alert={alert} />
    <div className="container my-3">
    <Switch>
          {/* <Route exact path="/about">
            <About mode={mode} />
          </Route> */}
          <Route exact path="/">
            <TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces" mode={mode} showAlert={showAlert}/>
          </Route>
      </Switch>
    </div>
     </Router>
  </>
  );
}

export default App;