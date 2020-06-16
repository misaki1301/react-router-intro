import React from "react";
import {BrowserRouter as Router, NavLink} from "react-router-dom"

const Navbar = () => {

    return (
        <nav className='navbar navbar-expand-md navbar-light bg-white fixed-top'>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className='navbar-brand' href='#'>
                <img className="d-inline-block align-top"
                     src='https://cdn.worldvectorlogo.com/logos/react-2.svg'
                     width='30'
                     height='30'
                     loading='lazy' alt='react-logo'/>
                 &nbsp;React Router
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className='navbar-toggler-icon'/>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                    <NavLink className='nav-item' to='/' exact activeClassName='active'>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className='nav-link'>Home</a>
                    </NavLink>
                    <NavLink className='nav-item' to='/about-us' exact activeClassName='active'>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className='nav-link'>About us</a>
                    </NavLink>
                    <NavLink className='nav-item' to='/serie' exact activeClassName='active'>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className='nav-link'>Series</a>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
