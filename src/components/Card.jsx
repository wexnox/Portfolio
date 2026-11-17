import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

function Card({ project, featured = false, lead = false }) {
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
    const unavailable = [!repoLink && 'Private repo', !siteLink && (isArchived ? 'Archived' : 'Not published')].filter(Boolean);

    const details = (
        <>
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
        </>
    );

    return (
        <article
            className={`flex flex-col h-full bg-white/80 backdrop-blur-md rounded-2xl shadow-md ring-1 ring-gray-200/70 overflow-hidden ${lead ? 'lg:flex-row' : ''}`}>
            {imgSrc && (
                // The lead card sets the screenshot beside the text on wide screens
                <div className={lead ? 'relative lg:w-1/2 lg:shrink-0' : undefined}>
                    <img
                        src={imgSrc}
                        srcSet={imgSrcSet}
                        sizes={imgSrcSet ? (featured ? '(min-width: 1024px) 640px, 100vw' : '(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw') : undefined}
                        alt={isPlaceholderImage ? '' : `Screenshot of ${title}`}
                        loading="lazy"
                        decoding="async"
                        className={`w-full object-cover ${featured ? 'h-64 object-top' : 'h-52'} ${lead ? 'lg:absolute lg:inset-0 lg:h-full lg:object-left-top' : ''}`}
                    />
                </div>
            )}

            {/* Content */}
            <div className="flex flex-col flex-1 px-6 py-5">
                <h4 className={`font-semibold text-gray-900 tracking-tight break-words ${featured ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'}`}>
                    {title}
                </h4>

                {tech.length > 0 && (
                    <p className="mt-1 text-xs font-semibold text-gray-600">
                        {tech.join(' · ')}
                    </p>
                )}

                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                    {description}
                </p>

                {/* Featured projects show everything; the rest keep details behind a disclosure */}
                {featured ? (
                    details
                ) : (
                    (longDescription || bullets.length > 0) && (
                        <details className="mt-3">
                            <summary className="w-fit py-1 text-sm font-semibold text-blue-700 cursor-pointer">
                                More about the project<span className="sr-only">: {title}</span>
                            </summary>
                            {details}
                        </details>
                    )
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
                            <FaGithub aria-hidden="true" /> GitHub<span className="sr-only">: {title} (opens in a new tab)</span>
                        </a>
                    )}

                    {siteLink && (
                        <a
                            href={siteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            <FiExternalLink aria-hidden="true" /> Visit site<span className="sr-only">: {title} (opens in a new tab)</span>
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
