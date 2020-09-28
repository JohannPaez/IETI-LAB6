import React from 'react';
import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SidebarPage from './components/SidebarPage';
import Register from './components/Register';
import Test from './components/Test';

function App() {
  const LoginView = () => (
    <Login/>
  );
  const RegisterView = () => (
    <Register/>
  );

  const TestView = () => (
    <Test/>
  );
  return (
          <Router>
              <div className="App">
                  <br></br>
                  <br/>
                  <div>                      
                      <Route exact path="/" component={localStorage.getItem('isLoggedIn') ? SidebarPage: LoginView}/>
                      <Route exact path="/home" component={localStorage.getItem('isLoggedIn') ? SidebarPage : LoginView}/>
                      <Route exact path="/register" component={localStorage.getItem('isLoggedIn') ? SidebarPage: RegisterView}/>
                      <Route exact path="/test" component= {TestView} />
                  </div>
              </div>
          </Router>
  );
}

export default App;
