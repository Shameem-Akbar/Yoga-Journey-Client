import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { RiAdminFill } from 'react-icons/ri'
import { MdPayment } from 'react-icons/Md'
import { AiOutlineAppstore, AiOutlineSlack } from 'react-icons/Ai'
import { HiUsers } from 'react-icons/Hi'
import { ImUserTie } from 'react-icons/Im'
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const DashBoard = () => {

    const [isAdmin, isAdminLoading] = useAdmin();
    const [isInstructor, isInstructorLoading] = useInstructor();

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

                    {
                        isAdmin ? (
                            <>
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
                            </>
                        ) : isInstructor ? (
                            <>
                                <h2 className='font-semibold text-xl ml-4 flex gap-2 mb-2'><RiAdminFill className='mt-1'></RiAdminFill>Instructor Dashboard</h2>
                                <li><NavLink to="add-class" className={({ isActive }) =>
                                    isActive
                                        ? "text-white font-semibold bg-black flex items-center gap-2"
                                        : "flex font-semibold items-center gap-2"
                                }><AiOutlineAppstore className='mt-0.5'></AiOutlineAppstore> Add a Class</NavLink></li>
                                <li><NavLink to="my-classes" className={({ isActive }) =>
                                    isActive
                                        ? "text-white font-semibold bg-black flex items-center gap-2"
                                        : "flex font-semibold items-center gap-2"
                                }><HiUsers></HiUsers> My Classes</NavLink></li>

                                {/* divider */}
                                <div className="divider"></div>
                                <li className='font-semibold'><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                                <li className='font-semibold'><NavLink to="/instructors"><ImUserTie></ImUserTie> Instructors</NavLink></li>
                                <li className='font-semibold'><NavLink to="/classes"><AiOutlineSlack></AiOutlineSlack> Classes</NavLink></li>
                            </>
                        ) : (
                            <>
                                <h2 className='font-semibold text-xl ml-4 flex gap-2 mb-2'><RiAdminFill className='mt-1'></RiAdminFill>Student Dashboard</h2>
                                <li><NavLink to="selected-classes" className={({ isActive }) =>
                                    isActive
                                        ? "text-white font-semibold bg-black flex items-center gap-2"
                                        : "flex font-semibold items-center gap-2"
                                }><AiOutlineAppstore className='mt-0.5'></AiOutlineAppstore> My Selected Classes</NavLink></li>
                                <li><NavLink to="enrolled-classes" className={({ isActive }) =>
                                    isActive
                                        ? "text-white font-semibold bg-black flex items-center gap-2"
                                        : "flex font-semibold items-center gap-2"
                                }><HiUsers></HiUsers> My Enrolled Classes</NavLink></li>
                                <li><NavLink to="payment-history" className={({ isActive }) =>
                                    isActive
                                        ? "text-white font-semibold bg-black flex items-center gap-2"
                                        : "flex font-semibold items-center gap-2"
                                }><MdPayment></MdPayment> Payment History</NavLink></li>

                                {/* divider */}
                                <div className="divider"></div>
                                <li className='font-semibold'><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                                <li className='font-semibold'><NavLink to="/instructors"><ImUserTie></ImUserTie> Instructors</NavLink></li>
                                <li className='font-semibold'><NavLink to="/classes"><AiOutlineSlack></AiOutlineSlack> Classes</NavLink></li>
                            </>
                        )
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;