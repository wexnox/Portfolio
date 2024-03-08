import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/images/Logo.png';

function Navbar() {
    // State to manage mobile menu toggle
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-transparent w-full fixed top-0 z-[100]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center">

                    {/* Brand logo */}
                    <a href="http://blog.wexox.me" className="flex items-center py-4 px-2">
                        <img src={Logo} style={{ height: '50px', width: 'auto' }} alt="Logo" />
                    </a>

                    {/* Primary Navbar items */}
                    <div className={`hidden md:flex items-center space-x-4 ${isMobileMenuOpen ? 'block' : ''}`}>
                        <NavLink to={'/'} aria-label={'Home page'} className="py-4 px-2 text-blue-500 font-bold hover:text-gray-700 transition duration-300">Home</NavLink>
                        <NavLink to={'/about'} aria-label="About page" className="py-4 px-2 text-blue-500 font-bold hover:text-gray-700 transition duration-300">About Me</NavLink>
                        <NavLink to={'/contact'} aria-label="Contact page" className="py-4 px-2 text-blue-500 font-bold hover:text-gray-700 transition duration-300">Contact Me</NavLink>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMobileMenu} className="outline-none mobile-menu-button">
                            <svg className="w-6 h-6 text-gray-500 hover:text-gray-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-md absolute w-full left-0`}>
                <ul className="">
                    <li><NavLink to={'/'} aria-label={'Home page'} onClick={toggleMobileMenu} className="block text-sm px-2 py-4 text-gray-900 hover:bg-gray-200 transition duration-300">Home</NavLink></li>
                    <li><NavLink to={'/about'} aria-label="About page" onClick={toggleMobileMenu} className="block text-sm px-2 py-4 text-gray-900 hover:bg-gray-200 transition duration-300">About Me</NavLink></li>
                    <li><NavLink to={'/contact'} aria-label="Contact page" onClick={toggleMobileMenu} className="block text-sm px-2 py-4 text-gray-900 hover:bg-gray-200 transition duration-300">Contact Me</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;