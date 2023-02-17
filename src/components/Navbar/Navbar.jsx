import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppContext from '../../context/AppContext/AppContext';
import './navbar.css';

function Navbar() {
    const location = useLocation();
    const context = useContext(AppContext);
    const {state, updateTheme} = context;
    return (
        <header className={state.theme?'header-dark':'header-light'}>
            <div className="header">
                <h1 className="logo">SnapSh<span>o</span>ts</h1>
                <nav>
                    <ul className='cat-con'>
                        <li className={`category ${location.pathname === '/'  ? state.theme ?'active-dark': 'active-light' : ''}`}><Link to={'/'}>Home</Link></li>
                        <li className={`category ${location.pathname === '/mountain' ? state.theme ?'active-dark': 'active-light': ''}`}><Link to={'/mountain'}>Mountain</Link></li>
                        <li className={`category ${location.pathname === '/beaches' ? state.theme ?'active-dark': 'active-light' : ''}`}><Link to={'/beaches'}>Beaches</Link></li>
                        <li className={`category ${location.pathname === '/food' ? state.theme ?'active-dark': 'active-light' : ''}`}><Link to={'/food'}>Food</Link></li>
                        <li className={`category ${location.pathname === '/birds' ? state.theme ?'active-dark': 'active-light' : ''}`}><Link to={'/birds'}>Birds</Link></li>
                        <li className={`category ${location.pathname === '/search' ? state.theme ?'active-dark': 'active-light' : ''}`}><Link to={'/search'}>Search</Link></li>
                    </ul>
                </nav>
                <div className="dm-btn" onClick={updateTheme}>
                    {state.theme?<img src="/logos/sun.png" alt="" id='dm-logo' title='Enable Light Mode'/>
                        : <img src="/logos/moon.png" alt="" id='dm-logo' title='Enable Dark Mode'/>       }
                </div>
            </div>
        </header>
    )
}

export default Navbar
