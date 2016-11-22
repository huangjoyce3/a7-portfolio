import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
import MorePage from './MorePage';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
	<MuiThemeProvider>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        	<IndexRoute component={LandingPage}/>
        	<Route path="about" component={AboutPage}/>        	
        	<Route path="projects" component={ProjectPage}/>
        	<Route path="more" component={MorePage}/>
        </Route>
    </Router>
    </MuiThemeProvider>,
  document.getElementById('root')
);
