import React from 'react';
import { Helmet } from 'react-helmet-async';

function About() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">

            <Helmet>
                <title>Portfolio | About Us</title>
            </Helmet>

            <div className="max-w-lg p-8 rounded-lg shadow-lg bg-opacity-10 backdrop-filter backdrop-blur-lg">
                <div className="p-6 text-white">
                    <h1 className="mb-3 text-4xl font-extrabold text-center">About Us</h1>

                    <p className="mb-3 text-lg leading-relaxed text-gray-200">
                        We are ABC Corp, a leading software development company providing optimal software solutions to businesses worldwide.
                    </p>
                    <p className="mb-3 text-lg leading-relaxed text-gray-200">
                        Our mission is to deliver innovative and efficient software solutions that improve businesses' bottom line. Our vision is to be recognized as the global leader in providing IT solutions.
                    </p>
                    <p className="mb-3 text-lg leading-relaxed text-gray-200">
                        Over the past decade, our solutions have been deployed in various industries, including finance, healthcare, retail, and education. Our products reflect the deep understanding we hold for our clients' business processes.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-200">
                        Interested in learning more? Please feel free to contact us.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;