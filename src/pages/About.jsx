import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

function About() {
    return (
        <div className="flex flex-col items-center py-24 px-6 min-h-screen">
            <Helmet>
                <title>Portfolio | Om meg</title>
                <meta
                    name="description"
                    content="Lær mer om Lasse Rønningen, min utdannelse og min erfaring som frontendutvikler."
                />
            </Helmet>

            <div className="max-w-4xl w-full space-y-12">
                {/* Intro Section */}
                <article className="p-6 sm:p-8 rounded-3xl shadow-xl bg-white/90 backdrop-blur-md border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shrink-0 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-lg">
                            LR
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 text-center md:text-left">
                                Om meg
                            </h1>
                            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                                Jeg er Lasse Rønningen, en lidenskapelig frontendutvikler som fokuserer på å skape moderne, brukervennlige og universelt utformede webløsninger. Med en bakgrunn som kombinerer teknisk forståelse og visuelt design, streber jeg etter å levere kode av høy kvalitet som gir verdi for både brukere og bedrifter.
                            </p>
                        </div>
                    </div>
                </article>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Education Section */}
                    <section className="p-6 sm:p-8 rounded-3xl shadow-lg bg-white/80 backdrop-blur-sm border border-gray-100 h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <FaGraduationCap className="text-blue-600 text-2xl" />
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Utdannelse</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="relative pl-6 border-l-2 border-blue-100">
                                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white" />
                                <h3 className="font-bold text-gray-900">Frontend-utvikling</h3>
                                <p className="text-blue-600 text-sm font-semibold">Noroff Fagskole • 2022 — 2024</p>
                                <p className="mt-2 text-gray-600 text-sm">
                                    Spesialisering innen moderne rammeverk som React, universell utforming (WCAG), og smidig utviklingsmetodikk.
                                </p>
                            </div>
                            <div className="relative pl-6 border-l-2 border-blue-100">
                                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-200 border-4 border-white" />
                                <h3 className="font-bold text-gray-900">Interaksjonsdesign</h3>
                                <p className="text-blue-600 text-sm font-semibold">Høyskolen i Kristiania • 2019 — 2022</p>
                                <p className="mt-2 text-gray-600 text-sm">
                                    Bachelorgrad med fokus på brukersentrert design, prototyping og brukertesting.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Experience Section */}
                    <section className="p-6 sm:p-8 rounded-3xl shadow-lg bg-white/80 backdrop-blur-sm border border-gray-100 h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <FaBriefcase className="text-blue-600 text-2xl" />
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Erfaring</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="relative pl-6 border-l-2 border-blue-100">
                                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white" />
                                <h3 className="font-bold text-gray-900">Junior Frontendutvikler</h3>
                                <p className="text-blue-600 text-sm font-semibold">TechFlow Solutions (Fiktivt) • 2024 — Nå</p>
                                <p className="mt-2 text-gray-600 text-sm">
                                    Ansvarlig for utvikling av responsive grensesnitt og komponentbiblioteker i React for diverse kundeprosjekter.
                                </p>
                            </div>
                            <div className="relative pl-6 border-l-2 border-blue-100">
                                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-200 border-4 border-white" />
                                <h3 className="font-bold text-gray-900">Webutvikler (Frilans)</h3>
                                <p className="text-blue-600 text-sm font-semibold">Eget firma • 2021 — 2024</p>
                                <p className="mt-2 text-gray-600 text-sm">
                                    Leverte skreddersydde WordPress-løsninger og statiske nettsider for små og mellomstore bedrifter.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Skills Section */}
                <section className="p-6 sm:p-8 rounded-3xl shadow-lg bg-gray-900 text-white border border-gray-800">
                    <div className="flex items-center gap-3 mb-8">
                        <FaCode className="text-blue-400 text-2xl" />
                        <h2 className="text-xl sm:text-2xl font-bold">Tekniske ferdigheter</h2>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        {['React', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'HTML5 & CSS3', 'Git', 'Vite', 'REST API', 'Figma', 'WCAG'].map((skill) => (
                            <span key={skill} className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/10 border border-white/20 text-xs sm:text-sm font-medium hover:bg-white/20 transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                <div className="text-center">
                    <p className="text-lg leading-relaxed text-gray-700 font-medium italic">
                        "Mitt mål er å bygge løsninger som ikke bare ser bra ut, men som fungerer knirkefritt for alle."
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;