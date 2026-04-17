import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const Links = <>
        <li>
            <NavLink className={({ isActive }) => `${isActive ? ' btn-success btn-outline' : ''} mr-5 font-semibold btn`} to={'/'}>Home</NavLink>
            </li>
        <li>
            <NavLink className={({ isActive }) => `${isActive ? ' btn-success btn-outline' : ''} mr-5 font-semibold btn`} to={'/books'}>Listed Books</NavLink></li>
        <li>
            <NavLink className={({ isActive }) => `${isActive ? ' btn-success btn-outline' : ''} mr-5 font-semibold btn`} to={'/pages'}>Pages to Read</NavLink></li>
    </>
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="mx-auto navbar container">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="z-1 bg-base-100 shadow mt-3 p-2 rounded-box w-52 menu menu-sm dropdown-content">
                            {Links}
                        </ul>
                    </div>
                    <a className="font-bold text-3xl btn btn-ghost">Book Vibe</a>
                </div>
                <div className="hidden lg:flex navbar-center">
                    <ul className="px-1 menu menu-horizontal">
                        {Links}
                    </ul>
                </div>
                <div className="md:gap-6 navbar-end">
                   <button className='text-white btn btn-success'>Sign In</button>
                   <button className='text-white btn btn-info'>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;