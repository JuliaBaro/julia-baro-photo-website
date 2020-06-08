import React from 'react';
import './Navigation.css';
import logo from './logo.svg';
import line from './line.svg';

function Navigation() {
    return (
        <div class="page-wrapper">
            <div class="nav-wrapper">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <img src={line} className="Div-line" alt="line" />
                </header>
                <nav class="navbar">
                    <div class="menu-toggle" id="mobile-menu">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                    <ul class="nav no-search">
                        <li class="nav-item"><a href="#">Galériák</a></li>
                        <li class="nav-item"><a href="#">Infó</a></li>
                        <li class="nav-item"><a href="#">Rólam</a></li>
                        <li class="nav-item"><a href="#">Kapcsolat</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
  }

export default Navigation;