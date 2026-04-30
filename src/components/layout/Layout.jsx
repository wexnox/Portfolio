import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';
import fog from '../../assets/images/fog.jpg'
const bgImage = {
    backgroundImage: `url(${fog})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
};

function Layout() {
    return (
        <div style={{ ...bgImage }} className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
export default Layout;
