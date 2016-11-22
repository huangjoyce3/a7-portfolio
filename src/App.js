import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import { Link } from 'react-router';
import {Navbar} from 'react-materialize'
import '../node_modules/font-awesome/css/font-awesome.css';


var App = React.createClass({
  render() {
    return (
      <div className="App">
        <Navbar className="nav-bar" left>
          <Link className="link" activeClassName="active" to="/"><h1 >Joyce Huang</h1></Link>
          <div><Link className="link" activeClassName="active" to="/about">About</Link>          
          <Link className="link" activeClassName="active" to="/projects">Projects</Link>
          <Link className="link" activeClassName="active" to="/more">More</Link></div>

        </Navbar>
          {this.props.children}
      </div>
    );
  }
});

export default App;
