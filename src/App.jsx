import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

// TODO: Convert to 6* routes. createBrowserRouter(createRoutesFromElements())
function App() {

    return (
        <>
            <Routes>

                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />

                </Route>
            </Routes>
        </>
    );
}

export default App;