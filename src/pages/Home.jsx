import React from 'react';
import Projects from '../projects/Projects.jsx';
import ContactBand from '../components/ContactBand.jsx';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <Helmet>
                <title>Portfolio | Home</title>
                <meta
                    name="description"
                    content="Portfolio of Lasse Rønningen, fullstack developer. A selection of web development projects, from database to interface."
                />
            </Helmet>

            {/* Hero */}
            <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 px-6">
                <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
                    {/* Eyebrow badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-wider uppercase rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-100 shadow-sm">
                        <span className="relative flex h-2 w-2" aria-hidden="true">
                            <span className="motion-safe:animate-ping [animation-iteration-count:3] absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                        </span>
                        Available for new projects
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-gray-900 leading-[1.1]">
                        I build <br />
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text pb-2">
                            digital experiences
                        </span>
                    </h1>

                    <p className="mt-8 text-lg sm:text-xl leading-relaxed text-gray-600 max-w-2xl mx-auto font-medium">
                        Fullstack developer building fast and accessible
                        web solutions, from database to interface.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                        <a 
                            href="#projects" 
                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl shadow-lg hover:bg-gray-800 transition-all transform hover:-translate-y-1 active:scale-95 text-center"
                        >
                            View my projects
                        </a>
                        <Link 
                            to="/contact" 
                            className="px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl shadow-md ring-1 ring-gray-200 hover:bg-gray-50 transition-all transform hover:-translate-y-1 active:scale-95 text-center"
                        >
                            Get in touch
                        </Link>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="pb-24 scroll-mt-20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-end justify-between mb-8 px-4">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                Projects
                            </h2>
                            <p className="mt-2 text-gray-600 text-sm sm:text-base">
                                Some have open source code on GitHub, and
                                you can visit the published sites.
                            </p>
                        </div>
                    </div>
                    <Projects />
                </div>
            </section>

            <ContactBand />
        </div>
    );
}

export default Home;
