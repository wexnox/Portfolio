import { FaGithub } from 'react-icons/fa'; // import GitHub icon from react-icons
import { CgWebsite } from 'react-icons/cg';
import React from 'react';

function Card({ project }) {
    return (
        <div className="flex flex-col bg-white bg-opacity-60 shadow-lg rounded-lg max-w-md mx-auto backdrop-blur-md h-full justify-between">
            <div>
                <div className="flex justify-center">
                    <img className="w-full h-48 object-cover rounded-t-lg" src={project.imgSrc} alt={project.title} />
                </div>

                <div className="px-6 py-4">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{project.title}</h2>
                    <p className="py-2 text-gray-700">{project.description}</p>
                    <h5 className="py-2 text-gray-700 text-base">Features:</h5>
                    {project.features.map((feature, index) => <p key={index} className="text-gray-600">{feature}</p>)}
                </div>
            </div>
            <div className="px-6 py-10 flex flex-col sm:flex-row items-center justify-center">
                <a href={project.repoUrl} className="text-blue-600 hover:underline flex items-center mb-4 sm:mb-0">
                    <FaGithub className="mr-2" /> GitHub
                </a>
                {project.deployedUrl && (
                    <a href={project.deployedUrl} className="ml-0 sm:ml-4 text-blue-600 hover:underline flex items-center">
                        <CgWebsite className="mr-2" /> Go to Site
                    </a>
                )}
            </div>
        </div>
    );
}

export default Card;