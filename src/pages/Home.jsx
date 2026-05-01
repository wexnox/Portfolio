import React from 'react';
import Projects from '../projects/Projects.jsx';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <Helmet>
                <title>Portfolio | Hjem</title>
                <meta
                    name="description"
                    content="Portefølje for Lasse Rønningen — frontendutvikler. Et utvalg av prosjekter innen React, JavaScript og webutvikling."
                />
            </Helmet>

            {/* Hero */}
            <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 px-6">
                <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
                    {/* Eyebrow badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] sm:text-xs font-bold tracking-wider uppercase rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-100 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                        </span>
                        Tilgjengelig for nye prosjekter
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-gray-900 leading-[1.1]">
                        Jeg bygger <br />
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text pb-2">
                            digitale opplevelser
                        </span>
                    </h1>

                    <p className="mt-8 text-lg sm:text-xl leading-relaxed text-gray-600 max-w-2xl mx-auto font-medium">
                        Frontendutvikler som spesialiserer seg på å lage raske, 
                        tilgjengelige og visuelt engasjerende nettsider med React og moderne teknologi.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                        <a 
                            href="#projects" 
                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl shadow-lg hover:bg-gray-800 transition-all transform hover:-translate-y-1 active:scale-95 text-center"
                        >
                            Se mine prosjekter
                        </a>
                        <Link 
                            to="/contact" 
                            className="px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl shadow-md ring-1 ring-gray-200 hover:bg-gray-50 transition-all transform hover:-translate-y-1 active:scale-95 text-center"
                        >
                            Ta kontakt
                        </Link>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="pb-24">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-end justify-between mb-8 px-4">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                Prosjekter
                            </h2>
                            <p className="mt-2 text-gray-600 text-sm sm:text-base">
                                Klikk deg inn på GitHub eller besøk de
                                publiserte sidene for å se mer.
                            </p>
                        </div>
                    </div>
                    <Projects />
                </div>
            </section>
        </div>
    );
}

export default Home;
