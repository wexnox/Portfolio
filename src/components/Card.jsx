import React from 'react';
import { FaGithub, FaLock } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

function Card({ project }) {
    const {
        title,
        description,
        longDescription,
        highlights = [],
        features = [],
        tech = [],
        imgSrc,
        isOnline,
        isPublicRepo,
        repoUrl,
        deployedUrl,
    } = project;

    const bullets = highlights.length > 0 ? highlights : features;

    return (
        <article
            className="group relative flex flex-col h-full bg-white/80 backdrop-blur-md rounded-2xl shadow-md ring-1 ring-gray-200/70 overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-blue-200">
            {/* Image */}
            <div className="relative overflow-hidden">
                <img
                    src={imgSrc}
                    alt={title}
                    loading="lazy"
                    className="w-full h-52 object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                        <span
                            className={`px-2.5 py-1 text-xs font-bold rounded-full shadow-sm ${
                                isOnline
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-gray-600 text-white'
                            }`}
                        >
                            {isOnline ? 'Live' : 'Offline'}
                        </span>
                        <span
                            className={`px-2.5 py-1 text-xs font-bold rounded-full shadow-sm flex items-center gap-1 ${
                                isPublicRepo
                                    ? 'bg-blue-700 text-white'
                                    : 'bg-slate-800 text-white'
                            }`}
                        >
                        {isPublicRepo ? (
                            <>
                                <FaGithub className="text-[0.7rem]" /> Public
                            </>
                        ) : (
                            <>
                                <FaLock className="text-[0.7rem]" /> Private
                            </>
                        )}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 px-6 py-5">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight">
                    {title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                    {description}
                </p>

                {longDescription && (
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {longDescription}
                    </p>
                )}

                {bullets.length > 0 && (
                    <div className="mt-4">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Høydepunkter
                        </h3>
                        <ul className="mt-2 space-y-1.5">
                            {bullets.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-2 text-sm text-gray-700"
                                >
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {tech.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {tech.map((t, i) => (
                            <span
                                key={i}
                                className="px-2.5 py-1 text-xs font-bold rounded-full bg-blue-100 text-blue-900 ring-1 ring-blue-200"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                )}

                {/* Spacer pushes actions to bottom */}
                <div className="flex-1" />

                {/* Actions */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    {isPublicRepo && repoUrl ? (
                        <a
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition"
                        >
                            <FaGithub /> GitHub
                        </a>
                    ) : (
                        <span className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed">
                            <FaLock /> Privat repo
                        </span>
                    )}

                    {isOnline && deployedUrl ? (
                        <a
                            href={deployedUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            <FiExternalLink /> Besøk siden
                        </a>
                    ) : (
                        <span className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed">
                            <FiExternalLink /> Ikke publisert
                        </span>
                    )}
                </div>
            </div>
        </article>
    );
}

export default Card;
