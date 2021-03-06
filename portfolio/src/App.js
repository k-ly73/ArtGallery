import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from 'react-bootstrap'
import PrivateRoute from './components/privateroute';
import SignIn from './components/signin';
import SignUp from './components/signup';
import ProfilePage from './components/profilepage';
import PortfolioPage from './components/portfolio';
import HomePage from './components/home';
import { AuthProvider } from './assets/contexts/auth';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute path="/portfolio" component={PortfolioPage}/>
          <PrivateRoute exact path="/" component={ProfilePage}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/home" component={HomePage}/>
        </Switch>
      </AuthProvider>
    </Router>
  );
  
} export default App;
