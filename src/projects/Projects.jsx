import Card from '../components/Card.jsx';
import React from 'react';
import WowBlog from '../assets/images/WoWBlog.png'
import Rainydays from '../assets/images/Rainydays.png'
import AdventureTrailHikes from '../assets/images/AdventureTrailHikes.png'
function Projects() {
    const projects = [
        {
            title: 'Project Exam 2',
            description: 'A blog about World of Warcraft',
            features: ['Website built with HTML, JavaScript and CSS with Sass', 'API: Content stored on a WordPress installation as a Headless CMS'],
            repoUrl: 'https://github.com/wexnox/project-exam-1-wexnox',
            deployedUrl: 'http://blog.wexox.no',
            imgSrc: 'https://picsum.photos/seed/picsum/500/300',
        },
        {
            title: 'JavaScript Frameworks CA',
            description: 'A blog about World of Warcraft',
            features: ['Website built with HTML, JavaScript and CSS with Sass', 'API: Content stored on a WordPress installation as a Headless CMS'],
            repoUrl: 'https://github.com/wexnox/project-exam-1-wexnox',
            deployedUrl: 'http://blog.wexox.no',
            imgSrc: 'https://picsum.photos/seed/picsum/500/300',
        },
        {
            title: 'Semester Project 2',
            description: 'A blog about World of Warcraft',
            features: ['Website built with HTML, JavaScript and CSS with Sass', 'API: Content stored on a WordPress installation as a Headless CMS'],
            repoUrl: 'https://github.com/wexnox/project-exam-1-wexnox',
            deployedUrl: 'http://blog.wexox.no',
            imgSrc: 'https://picsum.photos/seed/picsum/500/300',
        },
        {
            title: 'World of Warcraft Blog',
            description: 'A blog about World of Warcraft',
            features: ['Website built with HTML, JavaScript and CSS with Sass', 'API: Content stored on a WordPress installation as a Headless CMS'],
            repoUrl: 'https://github.com/wexnox/project-exam-1-wexnox',
            deployedUrl: 'http://blog.wexox.no',
            imgSrc: WowBlog,
        },
        {
            title: 'Rainydays',
            description: 'An online shop selling mens and womens rain jackets. They are designed for a range of different outdoor activities that enrich peoples lives.',
            features: ['Built using HTML5,SASS(CSS3), JavaScript and Gulp'],
            repoUrl: 'http://github.com/wexnox/rainydays',
            deployedUrl: 'http://rainydays.wexox.no',
            imgSrc: Rainydays,
        },
        {
            title: 'Adventure-Trail-Hikes',
            description: 'Adventure Trails Hikes is a new business offering extreme hiking in a number of different countries.',
            features: ['Built using HTML5,SASS(CSS3), JavaScript and Gulp'],
            repoUrl: 'https://github.com/wexnox/Adventure-Trail-Hikes',
            deployedUrl: 'http://adventure.wexox.no',
            imgSrc: AdventureTrailHikes,
        },
        {
            title: 'Flower Power',
            description: 'E-commerce site selling bouquets online',
            features: ['WordPress and WooCommerce'],
            repoUrl: '',
            deployedUrl: 'http://flower-power.wexox.no',
            imgSrc: 'https://picsum.photos/seed/picsum/500/300',
        },
        {
            title: 'Scientific Project Assignment E-Commerce Project',
            description: 'E-Commerce project for Uni',
            features: ['Laravel 5.2-4 with Stripe.js and Bootstrap'],
            repoUrl: 'http://github.com/wexnox',
            deployedUrl: 'http://spa3000.wexox.no',
            imgSrc: 'https://picsum.photos/seed/picsum/500/300',
        }, {
            title: 'Gilbert',
            description: 'A hub for Recipe, food planning and shopping',
            features: ['Built using Tailwind, Alpine, Livewire and Laravel 8/9'],
            repoUrl: 'http://github.com/wexnox',
            deployedUrl: 'http://gilbert.wexox.no',
            imgSrc: 'https://picsum.photos/seed/picsum/500/300',
        },

    ];

    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project, index) =>
                <Card key={index} project={project} />,
            )}
        </div>
    );
}

export default Projects;