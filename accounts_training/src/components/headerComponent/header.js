import React, { Component } from 'react';
import '../../Assets/css/header.min.css';
import logo from '../../Assets/images/sage-green-logo.jpg';

class Header extends Component {
  render() {
    return (
      <header>
        <div className='logo'>
          <img src={logo}/>
          Accounts Training
        </div>
      </header>
    );
  }
}

export default Header;
