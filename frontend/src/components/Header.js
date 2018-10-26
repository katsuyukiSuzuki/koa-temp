import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style/header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>welcome</h1>
        <nav>
          <ul>
            <li>
              <Link to="/hello">hello</Link>
            </li>
            <li>
              <Link to="/morning">morning</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
