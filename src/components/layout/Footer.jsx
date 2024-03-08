import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaRegCopyright, FaLock, FaFileAlt } from 'react-icons/fa';
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="text-white mt-20 mx-10">
            <div className="flex justify-around items-start"> {/* Added flex layout here */}

                <div className="logo">
                    <h3 className="text-lg font-semibold text-center mb-4">Logo</h3>
                    <img src={Logo} style={{ height: '50px', width: 'auto' }} alt="Logo" />
                </div>

                <div className="legal">
                    <h3 className="text-lg font-semibold text-center mb-4">Legal</h3>
                    <a href="#" className="block space-x-2 mb-2 hover:text-indigo-400"><FaRegCopyright className="inline-block" /><span>Copyright</span></a>
                    <a href="#" className="block space-x-2 mb-2 hover:text-indigo-400"><FaLock className="inline-block" /><span>Privacy Policy</span></a>
                    <a href="#" className="block space-x-2 mb-2 hover:text-indigo-400"><FaFileAlt className="inline-block" /><span>Terms of Use</span></a>
                </div>

                <div className="contact">
                    <h3 className="text-lg font-semibold text-center mb-4">Company</h3>
                    <NavLink className="block items-center space-x-2 hover:text-indigo-400" to={'/'} aria-label={'Home page'}><FaHome className="inline-block" /><span>Home</span></NavLink>
                    <NavLink className="block items-center space-x-2 hover:text-indigo-400" to={'/about'} aria-label="About page"><FaUser className="inline-block" /><span>About Me</span></NavLink>
                    <NavLink className="block items-center space-x-2 hover:text-indigo-400" to={'/contact'} aria-label="Contact page"> <FaEnvelope className="inline-block" /><span>Contact Me</span></NavLink>
                </div>

                <div className="social">
                    <h3 className="text-lg font-semibold text-center mb-4">Social</h3>
                    <a href="#" className="block items-center space-x-2 hover:text-indigo-400">
                        <FaFacebookF className="inline-block" />
                        <span>Facebook</span>
                    </a>
                    <a href="#" className="block items-center space-x-2 hover:text-indigo-400">
                        <FaTwitter className="inline-block" />
                        <span>Twitter</span>
                    </a>
                    <a href="#" className="block items-center space-x-2 hover:text-indigo-400">
                        <FaYoutube className="inline-block" />
                        <span>Youtube</span>
                    </a>
                    <a href="#" className="block items-center space-x-2 hover:text-indigo-400">
                        <FaInstagram className="inline-block" />
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
            <p className="mt-10 text-center">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
