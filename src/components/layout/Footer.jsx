import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaRegCopyright, FaLock, FaFileAlt } from 'react-icons/fa';
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-auto pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    <div className="flex flex-col items-start">
                        <h2 className="text-lg font-bold mb-6 text-blue-400">Lasse Rønningen</h2>
                        <img src={Logo} style={{ height: '40px', width: 'auto' }} alt="Portfolio Logo" className="mb-4" />
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Frontendutvikler med fokus på brukervennlige og tilgjengelige webløsninger.
                        </p>
                    </div>

                    <nav aria-label="Juridisk informasjon">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">Juridisk</h2>
                        <ul className="space-y-4">
                            <li><a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"><FaRegCopyright aria-hidden="true" /> Opphavsrett</a></li>
                            <li><a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"><FaLock aria-hidden="true" /> Personvern</a></li>
                            <li><a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"><FaFileAlt aria-hidden="true" /> Vilkår</a></li>
                        </ul>
                    </nav>

                    <nav aria-label="Sidenavigasjon">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">Navigasjon</h2>
                        <ul className="space-y-4">
                            <li><NavLink className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm" to={'/'}><FaHome aria-hidden="true" /> Hjem</NavLink></li>
                            <li><NavLink className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm" to={'/about'}><FaUser aria-hidden="true" /> Om meg</NavLink></li>
                            <li><NavLink className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm" to={'/contact'}><FaEnvelope aria-hidden="true" /> Kontakt</NavLink></li>
                        </ul>
                    </nav>

                    <nav aria-label="Sosiale medier">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">Sosialt</h2>
                        <ul className="space-y-4">
                            <li><a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm" aria-label="Følg meg på Facebook"><FaFacebookF aria-hidden="true" /> Facebook</a></li>
                            <li><a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm" aria-label="Følg meg på Twitter"><FaTwitter aria-hidden="true" /> Twitter</a></li>
                            <li><a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm" aria-label="Følg meg på YouTube"><FaYoutube aria-hidden="true" /> Youtube</a></li>
                            <li><a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm" aria-label="Følg meg på Instagram"><FaInstagram aria-hidden="true" /> Instagram</a></li>
                        </ul>
                    </nav>
                </div>
                
                <div className="pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-500 text-sm italic">
                        &copy; {new Date().getFullYear()} Lasse Rønningen. Alle rettigheter reservert.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
