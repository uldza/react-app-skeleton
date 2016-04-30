import React from 'react';
import { RouteHandler, Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div className="app-content">
        <nav className="navbar navbar-static-top navbar-dark bg-inverse">
          <a className="navbar-brand" href="/">React App</a>

          <ul className="nav navbar-nav">
            <li className="nav-item active"><Link className="nav-link" to='/'>Home</Link></li>
            <li className="nav-item active"><Link className="nav-link" to='/about'>About</Link></li>
          </ul>
        </nav>

        {this.props.children}
      </div>
    );
  }
}
