import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/images/Logo.webp';

const desktopLinkClass = ({isActive}) => `py-2 text-sm font-semibold underline-offset-8 decoration-2 transition duration-300 ${isActive ? 'text-blue-700 underline' : 'text-gray-700 hover:text-blue-700'}`;
const mobileLinkClass = ({isActive}) => `block px-6 py-3 text-base font-medium underline-offset-4 decoration-2 transition duration-300 ${isActive ? 'text-blue-700 bg-blue-50 underline' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-700'}`;

function Navbar() {
    // State to manage mobile menu toggle
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuButtonRef = useRef(null);

    // Function to toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Escape closes the mobile menu and returns focus to its button
    const handleKeyDown = (event) => {
        if (event.key === 'Escape' && isMobileMenuOpen) {
            closeMobileMenu();
            menuButtonRef.current?.focus();
        }
    };

    return (
        <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 w-full fixed top-0 z-100" aria-label="Hovedmeny" onKeyDown={handleKeyDown}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Brand logo */}
                    <NavLink to="/" className="flex items-center py-4 px-2" aria-label="Hjem">
                        <img src={Logo} width="120" height="120" className="h-8 sm:h-10 w-auto" alt="Lasse Rønningen Logo" />
                    </NavLink>

                    {/* Primary Navbar items */}
                    <div className="hidden md:flex items-center space-x-6">
                        <NavLink to={'/'} className={desktopLinkClass}>Hjem</NavLink>
                        <NavLink to={'/about'} className={desktopLinkClass}>Om meg</NavLink>
                        <NavLink to={'/contact'} className={desktopLinkClass}>Kontakt</NavLink>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            ref={menuButtonRef}
                            type="button"
                            onClick={toggleMobileMenu}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label={isMobileMenuOpen ? "Lukk meny" : "Åpne meny"}
                            className="p-2.5 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
            <div id="mobile-menu" className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white border-b border-gray-200 shadow-lg absolute w-full left-0 transition-all duration-300 ease-in-out`}>
                <ul className="py-2">
                    <li>
                        <NavLink to={'/'} onClick={closeMobileMenu} className={mobileLinkClass}>Hjem</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'} onClick={closeMobileMenu} className={mobileLinkClass}>Om meg</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'} onClick={closeMobileMenu} className={mobileLinkClass}>Kontakt</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
