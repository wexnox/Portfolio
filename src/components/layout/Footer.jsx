import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/Logo.webp';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaRegCopyright, FaLock, FaFileAlt } from 'react-icons/fa';
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-auto pt-16 pb-8 [--focus-ring:white]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    <div className="flex flex-col items-start lg:col-span-1">
                        <h2 className="text-lg font-bold mb-4 sm:mb-6 text-blue-400">Lasse Rønningen</h2>
                        <img src={Logo} width="120" height="120" className="h-8 sm:h-10 w-auto mb-4" alt="" />
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Fullstack developer focused on user-friendly and accessible web solutions.
                        </p>
                    </div>

                    <nav aria-label="Legal information">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">Legal</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="flex items-center gap-3 py-1 text-gray-400 hover:text-white transition-colors text-sm"><FaRegCopyright aria-hidden="true" /> Copyright</a></li>
                            <li><a href="#" className="flex items-center gap-3 py-1 text-gray-400 hover:text-white transition-colors text-sm"><FaLock aria-hidden="true" /> Privacy</a></li>
                            <li><a href="#" className="flex items-center gap-3 py-1 text-gray-400 hover:text-white transition-colors text-sm"><FaFileAlt aria-hidden="true" /> Terms</a></li>
                        </ul>
                    </nav>

                    <nav aria-label="Site navigation">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">Navigation</h2>
                        <ul className="space-y-2">
                            <li><NavLink className="flex items-center gap-3 py-1 text-gray-400 hover:text-white transition-colors text-sm" to={'/'}><FaHome aria-hidden="true" /> Home</NavLink></li>
                            <li><NavLink className="flex items-center gap-3 py-1 text-gray-400 hover:text-white transition-colors text-sm" to={'/about'}><FaUser aria-hidden="true" /> About</NavLink></li>
                            <li><NavLink className="flex items-center gap-3 py-1 text-gray-400 hover:text-white transition-colors text-sm" to={'/contact'}><FaEnvelope aria-hidden="true" /> Contact</NavLink></li>
                        </ul>
                    </nav>

                    <nav aria-label="Social media">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">Social</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="flex items-center gap-3 py-1 text-gray-400 hover:text-white transition-colors text-sm" aria-label="Follow me on Facebook"><FaFacebookF aria-hidden="true" /> Facebook</a></li>
                            <li><a href="#" className="flex items-center gap-3 py-1 text-gray-400 hover:text-white transition-colors text-sm" aria-label="Follow me on Twitter"><FaTwitter aria-hidden="true" /> Twitter</a></li>
                            <li><a href="#" className="flex items-center gap-3 py-1 text-gray-400 hover:text-white transition-colors text-sm" aria-label="Follow me on YouTube"><FaYoutube aria-hidden="true" /> YouTube</a></li>
                            <li><a href="#" className="flex items-center gap-3 py-1 text-gray-400 hover:text-white transition-colors text-sm" aria-label="Follow me on Instagram"><FaInstagram aria-hidden="true" /> Instagram</a></li>
                        </ul>
                    </nav>
                </div>
                
                <div className="pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-400 text-sm italic">
                        &copy; {new Date().getFullYear()} Lasse Rønningen. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
