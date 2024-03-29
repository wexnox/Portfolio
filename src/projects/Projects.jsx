import Card from '../components/Card.jsx';
import React from 'react';
import WowBlog from '../assets/images/WoWBlog.png'
import Rainydays from '../assets/images/Rainydays.png'
import AdventureTrailHikes from '../assets/images/AdventureTrailHikes.png'

function Projects() {
    const projects = [
        {
            title: 'Project Exam 2 (Holidaze)',
            isOnline: false,
            isPublicRepo: true,
            description: 'A newly launched accommodation booking site called Holidaze',
            features: ['Website built with HTML, Tailwind, React', 'Resit'],
            repoUrl: 'https://github.com/wexnox/Project-Exam-2-Holidaze',
            deployedUrl: '',
            imgSrc: 'https://picsum.photos/seed/picsum/500/300',
        },
        {
            title: 'JavaScript Frameworks CA (Online Shop)',
            isOnline: false,
            isPublicRepo: true,
            description: 'To apply knowledge of React to build an eCom store.',
            features: ['Website built with HTML, JavaScript and CSS with Sass', 'Resit'],
            repoUrl: 'https://github.com/wexnox/JS_Framework_CA',
            deployedUrl: '',
            imgSrc: 'https://picsum.photos/seed/picsum/500/300',
        },
        {
            title: 'Semester Project 2 (Auction House)',
            isOnline: false,
            isPublicRepo: false,
            description: 'An auction site is looking to launch a website where users can add items to be bid on and bid on items other users have put up for auction.',
            features: ['Website built with Vite, HTML, CSS with Bootstrap and JavaScript', 'Resit'],
            repoUrl: 'https://github.com/wexnox/AuctionHouse',
            deployedUrl: '',
            imgSrc: 'https://picsum.photos/seed/picsum/500/300',
        },
        {
            title: 'World of Warcraft Blog',
            isOnline: true,
            isPublicRepo: false,
            description: 'A blog about World of Warcraft',
            features: ['Website built with HTML, JavaScript and CSS with Sass', 'API: Content stored on a WordPress installation as a Headless CMS'],
            repoUrl: 'https://github.com/wexnox/project-exam-1-wexnox',
            deployedUrl: 'http://blog.wexox.no',
            imgSrc: WowBlog,
        },
        {
            title: 'Rainydays',
            isOnline: true,
            isPublicRepo: false,
            description: 'An online shop selling mens and womens rain jackets. They are designed for a range of different outdoor activities that enrich peoples lives.',
            features: ['Built using HTML5,SASS(CSS3), JavaScript and Gulp'],
            repoUrl: 'http://github.com/wexnox/rainydays',
            deployedUrl: 'http://rainydays.wexox.no',
            imgSrc: Rainydays,
        },
        {
            title: 'Adventure-Trail-Hikes',
            isOnline: true,
            isPublicRepo: false,
            description: 'Adventure Trails Hikes is a new business offering extreme hiking in a number of different countries.',
            features: ['Built using HTML5,SASS(CSS3), JavaScript and Gulp'],
            repoUrl: 'https://github.com/wexnox/Adventure-Trail-Hikes',
            deployedUrl: 'http://adventure.wexox.no',
            imgSrc: AdventureTrailHikes,
        },
        {
            title: 'Flower Power',
            isOnline: true,
            isPublicRepo: false,
            description: 'E-commerce site selling bouquets online',
            features: ['WordPress and WooCommerce'],
            repoUrl: '',
            deployedUrl: 'http://flower-power.wexox.no',
            imgSrc: 'https://picsum.photos/seed/picsum/500/300',
        },
        {
            title: 'Scientific Project Assignment E-Commerce Project',
            isOnline: true,
            isPublicRepo: false,
            description: 'E-Commerce project for University 2018',
            features: ['Laravel 5.2-4 with Stripe.js and Bootstrap'],
            repoUrl: 'http://github.com/wexnox',
            deployedUrl: 'http://spa3000.wexox.no',
            imgSrc: 'https://picsum.photos/seed/picsum/500/300',
        }, {
             title: 'Portfolio',
            isOnline: true,
            isPublicRepo: true,
            description: 'Portfolio site',
            features: ['Built using Vite, React and Tailwind'],
            repoUrl: 'https://github.com/wexnox/Portfolio',
            deployedUrl: 'http://portfolio.wexox.no',
            imgSrc: 'https://picsum.photos/seed/picsum/500/300',
        },

    ];

    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project, index) =>
                <Card key={index} project={project}/>,
            )}
        </div>
    );
}

export default Projects;