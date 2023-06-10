import React from 'react';
import logo from '../../../assets/Icons/logo.png'
import ActiveLink from './ActiveLink/ActiveLink';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const navItems = (
        <>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/instructors">Instructors</ActiveLink>
            <ActiveLink to="/classes">Classes</ActiveLink>
            <ActiveLink to='/dashboard'>Dashboard</ActiveLink>
            <ActiveLink to='/contact'>Contact Us</ActiveLink>
        </>
    );

    return (
        <div className="navbar fixed z-10 md:px-6 bg-opacity-25 bg-slate-300 py-3">
            <div className="navbar-start">
                <div className="dropdown text-black">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block w-5 h-5 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-1 pl-3 shadow bg-base-100 rounded-box w-40 space-y-2 uppercase"
                    >
                        {navItems}
                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-10 uppercase font-semibold text-lg">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to="/login"><button className='btn px-5 btn-primary text-white'>Login</button></NavLink>
            </div>
        </div>
    );
};

export default Navbar;