import React, { useEffect, useRef } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import fog from '../../assets/images/fog.webp'
// White scrim keeps text placed directly on the photo above 4.5:1 contrast
const bgImage = {
    backgroundImage: `linear-gradient(rgb(255 255 255 / 0.8), rgb(255 255 255 / 0.8)), url(${fog})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
};

function Layout() {
    const { pathname } = useLocation();
    const mainRef = useRef(null);
    const previousPathname = useRef(pathname);

    // Move focus and scroll position to the new page on route change
    useEffect(() => {
        if (previousPathname.current === pathname) return;
        previousPathname.current = pathname;
        window.scrollTo(0, 0);
        mainRef.current?.focus({ preventScroll: true });
    }, [pathname]);

    return (
        <div style={{ ...bgImage }} className="min-h-screen flex flex-col bg-slate-100">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[110] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-gray-900 focus:font-semibold focus:shadow-lg"
            >
                Skip to content
            </a>
            <Header />
            <main id="main" ref={mainRef} tabIndex={-1} className="flex-grow outline-none">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
export default Layout;
