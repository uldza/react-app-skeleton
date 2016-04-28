import React from 'react';
import { RouteHandler, Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div id="content">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}
