import React from 'react';
import Projects from '../projects/Projects.jsx';
import { Helmet } from 'react-helmet';

function Home() {

    return (
        <div className="flex flex-col overflow-x-hidden">

            <Helmet>
                <title>Portfolio | Home</title>
            </Helmet>

            <div className="m-10 text-center ">
                <h1 className="mt-10 mb-4 text-2xl font-bold bg-gradient-to-r from-orange-800 to-blue-500 inline-block text-transparent bg-clip-text">Portfolio Page!</h1>
                <p className="mb-10">Here are some of my projects:</p>

                <Projects />
            </div>
        </div>
    );
}

export default Home;