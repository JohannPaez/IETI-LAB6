import React from 'react';
import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SidebarPage from './components/SidebarPage';
import Register from './components/Register';
import User from './components/User';

function App() {
  const LoginView = () => (
    <Login/>
  );
  const RegisterView = () => (
    <Register/>
  );

  const UserView = () => (
    <User/>
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
                      <Route exact path="/User" component= {UserView} />
                  </div>
              </div>
          </Router>
  );
}

export default App;
