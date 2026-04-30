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
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 w-full fixed top-0 z-100" aria-label="Hovedmeny">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Brand logo */}
                    <NavLink to="/" className="flex items-center py-4 px-2" aria-label="Hjem">
                        <img src={Logo} style={{ height: '40px', width: 'auto' }} alt="Lasse Rønningen Logo" />
                    </NavLink>

                    {/* Primary Navbar items */}
                    <div className="hidden md:flex items-center space-x-6">
                        <NavLink to={'/'} className={({isActive}) => `text-sm font-semibold transition duration-300 ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Hjem</NavLink>
                        <NavLink to={'/about'} className={({isActive}) => `text-sm font-semibold transition duration-300 ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Om meg</NavLink>
                        <NavLink to={'/contact'} className={({isActive}) => `text-sm font-semibold transition duration-300 ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Kontakt</NavLink>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={toggleMobileMenu} 
                            aria-expanded={isMobileMenuOpen}
                            aria-label={isMobileMenuOpen ? "Lukk meny" : "Åpne meny"}
                            className="outline-none p-2 rounded-md text-gray-500 hover:text-blue-600 hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white border-b border-gray-200 shadow-lg absolute w-full left-0 transition-all duration-300 ease-in-out`}>
                <ul className="py-2">
                    <li>
                        <NavLink to={'/'} onClick={toggleMobileMenu} className={({isActive}) => `block px-6 py-3 text-base font-medium transition duration-300 ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}>Hjem</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'} onClick={toggleMobileMenu} className={({isActive}) => `block px-6 py-3 text-base font-medium transition duration-300 ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}>Om meg</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'} onClick={toggleMobileMenu} className={({isActive}) => `block px-6 py-3 text-base font-medium transition duration-300 ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}>Kontakt</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;