import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

function About() {

    return (
        <div className="flex flex-col justify-center items-center min-h-screen ">

            <Helmet>
                <title>Portfolio | About Us</title>
            </Helmet>

            <div className="bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 max-w-lg">
                <div className="p-6 text-white">
                    <h1 className="text-4xl mb-3 text-center font-extrabold">About Us</h1>

                    <p className="mb-3 text-lg text-gray-200 leading-relaxed">
                        We are ABC Corp, a leading software development company providing optimal software solutions to businesses worldwide.
                    </p>
                    <p className="mb-3 text-lg text-gray-200 leading-relaxed">
                        Our mission is to deliver innovative and efficient software solutions that improve businesses' bottom line. Our vision is to be recognized as the global leader in providing IT solutions.
                    </p>
                    <p className="mb-3 text-lg text-gray-200 leading-relaxed">
                        Over the past decade, our solutions have been deployed in various industries, including finance, healthcare, retail, and education. Our products reflect the deep understanding we hold for our clients' business processes.
                    </p>
                    <p className="text-lg text-gray-200 leading-relaxed">
                        Interested in learning more? Please feel free to contact us.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;