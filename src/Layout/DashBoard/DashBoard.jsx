import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import { RiAdminFill } from 'react-icons/ri'
import { AiOutlineAppstore, AiOutlineSlack } from 'react-icons/Ai'
import { HiUsers } from 'react-icons/Hi'
import { ImUserTie } from 'react-icons/Im'

const DashBoard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <h2 className='font-semibold text-xl ml-4 flex gap-2 mb-2'><RiAdminFill className='mt-1'></RiAdminFill>Admin Dashboard</h2>
                    <li><NavLink to="manage-classes" className={({ isActive }) =>
                        isActive
                            ? "text-white font-semibold bg-black flex items-center gap-2"
                            : "flex font-semibold items-center gap-2"
                    }><AiOutlineAppstore className='mt-0.5'></AiOutlineAppstore> Manage Classes</NavLink></li>
                    <li><NavLink to="manage-users" className={({ isActive }) =>
                        isActive
                            ? "text-white font-semibold bg-black flex items-center gap-2"
                            : "flex font-semibold items-center gap-2"
                    }><HiUsers></HiUsers> Manage Users</NavLink></li>

                    {/* divider */}
                    <div className="divider"></div>
                    <li className='font-semibold'><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li className='font-semibold'><NavLink to="/instructors"><ImUserTie></ImUserTie> Instructors</NavLink></li>
                    <li className='font-semibold'><NavLink to="/classes"><AiOutlineSlack></AiOutlineSlack> Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;