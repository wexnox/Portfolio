import React from 'react';
import { FaGithub } from 'react-icons/fa';
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
        imgSrcSet,
        isOnline,
        isArchived,
        isPublicRepo,
        repoUrl,
        deployedUrl,
    } = project;

    const bullets = highlights.length > 0 ? highlights : features;
    // Stand-in photos say nothing about the project, so they are hidden from screen readers
    const isPlaceholderImage = typeof imgSrc === 'string' && imgSrc.includes('picsum.photos');

    const repoLink = isPublicRepo && repoUrl ? repoUrl : null;
    const siteLink = isOnline && deployedUrl ? deployedUrl : null;
    const unavailable = [!repoLink && 'Privat repo', !siteLink && (isArchived ? 'Arkivert' : 'Ikke publisert')].filter(Boolean);

    return (
        <article
            className="flex flex-col h-full bg-white/80 backdrop-blur-md rounded-2xl shadow-md ring-1 ring-gray-200/70 overflow-hidden">
            {imgSrc && (
                <img
                    src={imgSrc}
                    srcSet={imgSrcSet}
                    sizes={imgSrcSet ? '(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw' : undefined}
                    alt={isPlaceholderImage ? '' : `Skjermbilde av ${title}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-52 object-cover"
                />
            )}

            {/* Content */}
            <div className="flex flex-col flex-1 px-6 py-5">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight break-words">
                    {title}
                </h3>

                {tech.length > 0 && (
                    <p className="mt-1 text-xs font-semibold text-gray-600">
                        {tech.join(' · ')}
                    </p>
                )}

                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                    {description}
                </p>

                {(longDescription || bullets.length > 0) && (
                    <details className="mt-3">
                        <summary className="w-fit py-1 text-sm font-semibold text-blue-700 cursor-pointer">
                            Mer om prosjektet<span className="sr-only">: {title}</span>
                        </summary>

                        {longDescription && (
                            <p className="mt-2 text-sm leading-relaxed text-gray-700">
                                {longDescription}
                            </p>
                        )}

                        {bullets.length > 0 && (
                            <ul className="mt-3 space-y-1.5 list-disc pl-5 marker:text-blue-500">
                                {bullets.map((item, i) => (
                                    <li key={i} className="text-sm text-gray-700">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </details>
                )}

                {/* Spacer pushes actions to bottom */}
                <div className="flex-1" />

                {/* Actions */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    {repoLink && (
                        <a
                            href={repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition"
                        >
                            <FaGithub aria-hidden="true" /> GitHub<span className="sr-only">: {title} (åpnes i ny fane)</span>
                        </a>
                    )}

                    {siteLink && (
                        <a
                            href={siteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            <FiExternalLink aria-hidden="true" /> Besøk siden<span className="sr-only">: {title} (åpnes i ny fane)</span>
                        </a>
                    )}

                    {unavailable.length > 0 && (
                        <p className="text-sm text-gray-600">{unavailable.join(' · ')}</p>
                    )}
                </div>
            </div>
        </article>
    );
}

export default Card;
