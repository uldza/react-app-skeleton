import React from 'react';
import { RouteHandler, Link, IndexLink } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div className="app-content">
        <nav className="navbar navbar-static-top navbar-dark bg-inverse">
          <a className="navbar-brand" href="/">React App</a>

          <ul className="nav navbar-nav">
            <li className="nav-item">
                <IndexLink className="nav-link" activeClassName="active" to='/'>Home</IndexLink>
            </li>
            <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to='/about'>About</Link>
            </li>
          </ul>
        </nav>

        {this.props.children}
      </div>
    );
  }
}
