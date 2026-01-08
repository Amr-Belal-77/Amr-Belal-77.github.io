import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';
import InteractiveBackground from './InteractiveBackground';

const Layout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen flex flex-col pt-24 relative overflow-hidden">
            <InteractiveBackground />
            <Navbar />
            <main className="flex-grow w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
