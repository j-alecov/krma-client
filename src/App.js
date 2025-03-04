import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import NewPostPage from './components/NewPostPage';
import LandingPage from './components/LandingPage';
import './App.css';
import './html/css/animate.css'
import './html/css/bootstrap.min.css'
import './html/css/flatpickr.min.css'
import './html/css/font-awesome.min.css'
//import './html/css/jquery.mCustomScrollbar.min.css'
import './html/css/jquery.range.css'
import './html/css/line-awesome-font-awesome.css'
import './html/css/line-awesome-font-awesome.min.css'
import './html/css/line-awesome.css'
import './html/css/line-awesome.min.css'
import './html/css/mystyle.css'
import './html/css/responsive.css'
import './html/css/style.css'

function App() {
  return (
    <Switch>
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/post" component={NewPostPage} />
      <Route exact path="/" component={LandingPage} />
    </Switch>
  );
}

export default App;
