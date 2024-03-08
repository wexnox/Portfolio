import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';
import fog from '../../assets/images/fog.jpg'
const bgImage = {
    backgroundImage: fog,
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
