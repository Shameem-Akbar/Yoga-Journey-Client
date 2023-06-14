import React from 'react';
import logo from '../../../assets/Icons/logo.png'
import ActiveLink from './ActiveLink/ActiveLink';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { useContext } from 'react';
import './Navbar.css'

const Navbar = () => {

    const { user, logOut } = useAuth();

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const navbarClass = `navbar md:px-6 py-3 border-b-2 bg-slate-100 border-slate-300 ${isDarkMode ? 'dark-navbar' : ''}`;

    const handleToggle = () => {
        toggleTheme();
    };

    const navItems = (
        <>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/instructors">Instructors</ActiveLink>
            <ActiveLink to="/classes">Classes</ActiveLink>
            {user &&
                <ActiveLink to={isAdmin ? '/dashboard/manage-classes' : isInstructor ? "/dashboard/add-class" : "/dashboard/selected-classes"}>Dashboard</ActiveLink>
            }
            <ActiveLink to='/contact'>Contact</ActiveLink>
        </>
    );

    return (
        <div className={navbarClass}>
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
                        className="menu menu-compact dropdown-content mt-1 pl-3 shadow z-10 bg-base-100 rounded-box w-40 space-y-2 uppercase"
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
                <input
                    type="checkbox"
                    id="themeToggle"
                    className="toggle"
                    checked={isDarkMode}
                    onChange={handleToggle}
                />
                {
                    user ? <>
                        <div className='flex gap-2'>
                            <label className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <button onClick={handleLogOut} className="btn btn-warning text-white px-5">Log Out</button>
                        </div>
                    </> : <>
                        <NavLink to="/login"><button className='btn btn-primary text-white px-5'>Login</button></NavLink>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;