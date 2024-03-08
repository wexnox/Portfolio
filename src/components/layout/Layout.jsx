import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';

const bgImage = {
    backgroundImage: `url('/src/assets/images/fog-wallpaper-3840x2160-landscape-4k-18339.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
};

function Layout() {
    return (
        <div style={{ ...bgImage }}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
export default Layout;
