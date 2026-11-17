import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactBand from '../components/ContactBand.jsx';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

function About() {
    return (
        <div className="flex flex-col items-center py-24 px-6 min-h-screen">
            <Helmet>
                <title>Portfolio | About</title>
                <meta
                    name="description"
                    content="Learn more about Lasse Rønningen, my education and my experience as a fullstack developer."
                />
            </Helmet>

            <div className="max-w-4xl w-full space-y-12">
                {/* Intro Section */}
                <article className="p-6 sm:p-8 rounded-3xl shadow-xl bg-white/90 backdrop-blur-md border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                        <div aria-hidden="true" className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shrink-0 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-lg">
                            LR
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 text-center md:text-left">
                                About me
                            </h1>
                            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                                I am Lasse Rønningen, a passionate fullstack developer focused on creating modern, user-friendly and accessible web solutions. With a background that combines technical understanding and visual design, I strive to deliver high-quality code that creates value for both users and businesses.
                            </p>
                        </div>
                    </div>
                </article>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Education Section */}
                    <section className="p-6 sm:p-8 rounded-3xl shadow-lg bg-white/80 backdrop-blur-sm border border-gray-100 h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <FaGraduationCap className="text-blue-600 text-2xl" aria-hidden="true" />
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Education</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="relative pl-6 border-l-2 border-blue-100">
                                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white" />
                                <h3 className="font-bold text-gray-900">Frontend Development</h3>
                                <p className="text-blue-700 text-sm font-semibold">Noroff School of Technology • 2022 — 2024</p>
                                <p className="mt-2 text-gray-600 text-sm">
                                    Specialisation in modern frameworks such as React, accessibility (WCAG) and agile development methods.
                                </p>
                            </div>
                            <div className="relative pl-6 border-l-2 border-blue-100">
                                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-200 border-4 border-white" />
                                <h3 className="font-bold text-gray-900">Interaction Design</h3>
                                <p className="text-blue-700 text-sm font-semibold">Kristiania University College • 2019 — 2022</p>
                                <p className="mt-2 text-gray-600 text-sm">
                                    Bachelor degree focused on user-centred design, prototyping and user testing.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Experience Section */}
                    <section className="p-6 sm:p-8 rounded-3xl shadow-lg bg-white/80 backdrop-blur-sm border border-gray-100 h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <FaBriefcase className="text-blue-600 text-2xl" aria-hidden="true" />
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Experience</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="relative pl-6 border-l-2 border-blue-100">
                                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white" />
                                <h3 className="font-bold text-gray-900">Junior Frontend Developer</h3>
                                <p className="text-blue-700 text-sm font-semibold">TechFlow Solutions (Fictional) • 2024 — Present</p>
                                <p className="mt-2 text-gray-600 text-sm">
                                    Responsible for building responsive interfaces and component libraries in React for various client projects.
                                </p>
                            </div>
                            <div className="relative pl-6 border-l-2 border-blue-100">
                                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-200 border-4 border-white" />
                                <h3 className="font-bold text-gray-900">Web Developer (Freelance)</h3>
                                <p className="text-blue-700 text-sm font-semibold">Self-employed • 2021 — 2024</p>
                                <p className="mt-2 text-gray-600 text-sm">
                                    Delivered tailored WordPress solutions and static websites for small and medium-sized businesses.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Skills Section */}
                <section className="p-6 sm:p-8 rounded-3xl shadow-lg bg-gray-900 text-white border border-gray-800">
                    <div className="flex items-center gap-3 mb-8">
                        <FaCode className="text-blue-400 text-2xl" aria-hidden="true" />
                        <h2 className="text-xl sm:text-2xl font-bold">Technical skills</h2>
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
                        “My goal is to build solutions that not only look good, but work smoothly for everyone.”
                    </p>
                </div>
            </div>

            <div className="w-full mt-12 -mb-24">
                <ContactBand />
            </div>
        </div>
    );
}

export default About;