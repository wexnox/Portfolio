import Card from '../components/Card.jsx';
import React from 'react';
import Matplan from '../assets/images/Matplan-1200.webp';
import MatplanSmall from '../assets/images/Matplan-640.webp';
import Drinktree from '../assets/images/Drinktree-1200.webp';
import DrinktreeSmall from '../assets/images/Drinktree-640.webp';
import ProjectManagement from '../assets/images/ProjectManagement-1200.webp';
import ProjectManagementSmall from '../assets/images/ProjectManagement-640.webp';
import WowBlog from '../assets/images/WoWBlog-1200.webp';
import WowBlogSmall from '../assets/images/WoWBlog-640.webp';
import Rainydays from '../assets/images/Rainydays-1200.webp';
import RainydaysSmall from '../assets/images/Rainydays-640.webp';
import AdventureTrailHikes from '../assets/images/AdventureTrailHikes-1200.webp';
import AdventureTrailHikesSmall from '../assets/images/AdventureTrailHikes-640.webp';

function Projects() {
    // Order within each group is the order here. `featured` puts a project in the top group,
    // `isArchived` in the archive, everything else under "More projects".
    const projects = [
        {
            title: 'Matplan',
            featured: true,
            isOnline: true,
            isPublicRepo: false,
            description:
                'Norwegian meal planner for recipes, weekly and monthly plans, shopping lists and pantry. The frontend and backend are two separate applications: a Vue app talking to a REST API built in Laravel.',
            longDescription:
                'The planner follows ISO weeks, lets you move meals with drag and drop, and builds shopping lists that can be shared with a link. The pantry suggests recipes based on what you have, and the app can be read offline as a PWA.',
            highlights: [
                'REST API in Laravel 12 with roles, moderation and audit log',
                'Weekly and monthly plans with drag and drop and keyboard support',
                'Shopping lists with share links, connected to the pantry',
                'PWA with offline reading, light and dark theme',
            ],
            tech: ['Laravel 12', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'PWA'],
            repoUrl: '',
            deployedUrl: 'https://matplan.wexox.no/',
            imgSrc: Matplan,
            imgSrcSet: `${MatplanSmall} 640w, ${Matplan} 1200w`,
        },
        {
            title: 'Drinktree',
            featured: true,
            isOnline: true,
            isPublicRepo: false,
            description:
                'Fullstack app for discovering, creating and keeping track of drink recipes. You register the ingredients you have, or scan them with the camera, and get suggestions for drinks you can make with what you already have.',
            longDescription:
                'The backend is written in Kotlin with Spring Boot and PostgreSQL, and the frontend in Vue with TypeScript. The application is packaged as a single Docker image and runs with Docker Compose.',
            highlights: [
                'Kotlin and Spring Boot with PostgreSQL and Flyway migrations',
                'Vue and TypeScript in the frontend',
                'AI-based ingredient recognition and drink suggestions',
                'Docker image built and published automatically from CI',
            ],
            tech: ['Kotlin', 'Spring Boot', 'Vue', 'TypeScript', 'PostgreSQL', 'Docker'],
            repoUrl: 'https://github.com/wexnox/drinktree',
            deployedUrl: 'https://drinktree.wexox.no',
            imgSrc: Drinktree,
            imgSrcSet: `${DrinktreeSmall} 640w, ${Drinktree} 1200w`,
        },
        {
            title: 'Project Management',
            featured: true,
            isOnline: false,
            isPublicRepo: false,
            description:
                'Project planning tool for small teams, with dependencies, scheduling and critical path. The desktop app works offline and syncs with a shared server when connected.',
            longDescription:
                'Every change is stored in a change log, so conflicts between clients resolve the same way regardless of order. Teams can choose end-to-end encryption, where the server only stores encrypted data.',
            highlights: [
                'Planning core with scheduling, critical path and deadline checks',
                'Desktop client in Compose Multiplatform with encrypted local SQLite',
                'Sync server in Spring Boot with PostgreSQL',
                'End-to-end encryption for teams',
            ],
            tech: ['Kotlin', 'Compose Multiplatform', 'Spring Boot', 'PostgreSQL', 'SQLite'],
            repoUrl: 'https://github.com/wexnox/Project_Management',
            deployedUrl: '',
            imgSrc: ProjectManagement,
            imgSrcSet: `${ProjectManagementSmall} 640w, ${ProjectManagement} 1200w`,
        },
        {
            title: 'E-Learning',
            featured: true,
            isOnline: false,
            isPublicRepo: false,
            description:
                'E-learning site built to practise for a university course in social science research methods. It has module quizzes, review of wrong answers, flashcards, timed exam practice and a progress overview.',
            longDescription:
                'The site is a Blazor Web App on .NET 10 with its own user accounts. Questions and terms you answer correctly come back at increasing intervals, and wrong answers come back right away.',
            highlights: [
                'Blazor Web App with interactive server rendering on .NET 10',
                'ASP.NET Core Identity and Entity Framework Core',
                'Spaced repetition for quizzes and flashcards',
                'Notes and highlights in the theory text',
            ],
            tech: ['.NET 10', 'Blazor', 'C#', 'Entity Framework Core', 'Tailwind CSS'],
            repoUrl: 'https://github.com/wexnox/E-Learning',
            deployedUrl: '',
        },
        {
            title: 'Project Exam 2 — Holidaze',
            isOnline: false,
            isPublicRepo: true,
            description:
                'Holidaze is a modern accommodation booking platform, built as the final exam project at Noroff. It covers both the customer flow (search, filtering, detail view and booking of venues) and an admin area where venue managers can create, edit and follow up their own venues and bookings.',
            longDescription:
                'The application is built against a public REST API and uses JWT-based authentication, protected routes and role-based access. The focus was on good UX, responsive design, accessibility (WCAG) and a clean component structure in React.',
            highlights: [
                'Authentication, protected routes and roles (customer / venue manager)',
                'CRUD for venues and bookings against the Holidaze API',
                'Search, filtering and calendar-based date selection',
                'Responsive and accessible design with Tailwind CSS',
            ],
            tech: ['React', 'React Router', 'Tailwind CSS', 'REST API', 'Vite'],
            repoUrl: 'https://github.com/wexnox/Project-Exam-2-Holidaze',
            deployedUrl: '',
            imgSrc: 'https://picsum.photos/seed/holidaze/500/300',
        },
        {
            title: 'Portfolio',
            isOnline: true,
            isPublicRepo: true,
            description:
                'This portfolio site, built to collect and present my projects in a clean and professional way. It is made with Vite, React and Tailwind CSS, and optimised for performance and easy extension.',
            longDescription:
                'The content is data-driven so new projects are easy to add. The design emphasises readability, clear hierarchy and consistent typography, while staying light and responsive on all devices.',
            highlights: [
                'Data-driven project list that is easy to extend',
                'Responsive grid and modern card design',
                'SEO via react-helmet-async',
                'Clean component structure in React',
            ],
            tech: ['Vite', 'React', 'Tailwind CSS', 'React Router'],
            repoUrl: 'https://github.com/wexnox/Portfolio',
            deployedUrl: 'http://portfolio.wexox.no',
            imgSrc: 'https://picsum.photos/seed/portfolio/500/300',
        },
        {
            title: 'JavaScript Frameworks — Online Shop',
            isOnline: false,
            isPublicRepo: true,
            description:
                'A complete online shop built in React to demonstrate modern frameworks, state management and API integration. Users can browse products, read details, add items to the cart and complete a simulated checkout.',
            longDescription:
                'The project emphasises component-based architecture, reusable hooks and a clean separation between UI, state and data. It also includes search, loading and error handling, and a contact page with form validation.',
            highlights: [
                'Product list, detail page, cart and checkout flow',
                'Global state with Context / hooks',
                'Form validation and user-friendly error handling',
                'Products fetched from an external API',
            ],
            tech: ['React', 'JavaScript', 'CSS / Sass', 'REST API'],
            repoUrl: 'https://github.com/wexnox/JS_Framework_CA',
            deployedUrl: '',
            imgSrc: 'https://picsum.photos/seed/shop/500/300',
        },
        {
            title: 'Social Media Application',
            isOnline: false,
            isPublicRepo: true,
            description:
                'Frontend client for an existing social media platform, built to practise JavaScript against an API. Users can register, log in, and view, create, edit and delete posts.',
            longDescription:
                'The code is split into modules for authentication, posts and rendering, with search and filtering of posts. The interface is built with Bootstrap and Sass, and the project is bundled with Vite.',
            highlights: [
                'Registration, login and logout against the API',
                'Create, edit and delete posts',
                'Search and filtering of posts',
                'Modular JavaScript bundled with Vite',
            ],
            tech: ['JavaScript', 'Bootstrap', 'Sass', 'Vite', 'REST API'],
            repoUrl: 'https://github.com/wexnox/SocialMedia',
            deployedUrl: '',
        },
        {
            title: 'Flower Power',
            isOnline: true,
            isPublicRepo: false,
            description:
                'Online shop selling flower bouquets, built on WordPress with WooCommerce. Customers can browse the range, customise bouquets, pay online and order delivery.',
            longDescription:
                'The project was about setting up a complete e-commerce solution with simple administration for the client, a tidy product structure, categories and payment integration. The theme and selected features are adapted to support the brand.',
            highlights: [
                'Full WooCommerce setup with products and categories',
                'Customised theme and user flow',
                'Payment and shipping integrations',
                'Simple content administration for the client',
            ],
            tech: ['WordPress', 'WooCommerce', 'PHP', 'CSS'],
            repoUrl: '',
            deployedUrl: 'http://flower-power.wexox.no',
            imgSrc: 'https://picsum.photos/seed/flower/500/300',
        },
        {
            title: 'Semester Project 2 — Auction House',
            isOnline: false,
            isPublicRepo: false,
            description:
                'An auction platform where registered users can list their own items and bid on others. Users receive credit when they register and can follow auctions in real time until the bidding deadline.',
            longDescription:
                'The project integrates with an auction API and handles authentication, creating auctions with images and descriptions, and an overview of your own bids and won auctions. The design is built on Bootstrap and adapted for both desktop and mobile.',
            highlights: [
                'Registration, login and profile with credit balance',
                'Create, edit and bid on auction listings',
                'Search and filtering of active auctions',
                'Responsive UI built with Bootstrap',
            ],
            tech: ['Vite', 'JavaScript', 'HTML', 'Bootstrap', 'REST API'],
            repoUrl: 'https://github.com/wexnox/AuctionHouse',
            deployedUrl: '',
            imgSrc: 'https://picsum.photos/seed/auction/500/300',
        },
        {
            title: 'Rainydays',
            isOnline: true,
            isPublicRepo: false,
            description:
                'Online shop selling rain jackets for men and women, designed for outdoor life and active use. The project covers the whole customer journey from product overview to checkout.',
            longDescription:
                'The site is built with semantic HTML5, a modular Sass architecture and vanilla JavaScript, and uses Gulp for build steps such as minification and image processing. The design is responsive and focuses on a clean, brand-consistent look.',
            highlights: [
                'Product list, detail page and cart',
                'Modular Sass structure with variables and mixins',
                'Build pipeline with Gulp (minify, autoprefix, sass)',
                'Responsive and accessible design',
            ],
            tech: ['HTML5', 'Sass / CSS3', 'JavaScript', 'Gulp'],
            repoUrl: 'http://github.com/wexnox/rainydays',
            deployedUrl: 'http://rainydays.wexox.no',
            imgSrc: Rainydays,
            imgSrcSet: `${RainydaysSmall} 640w, ${Rainydays} 1200w`,
        },
        {
            title: 'Adventure Trail Hikes',
            isOnline: true,
            isPublicRepo: false,
            description:
                'Marketing site for a travel company offering extreme hikes in several countries. The site presents the trips, guides potential customers and collects enquiries through a form.',
            longDescription:
                'The focus was on strong visual storytelling, fast pages and a good mobile experience. The site is built with a modular Sass structure and automated with Gulp to simplify development and deployment.',
            highlights: [
                'Visually driven landing page with a clear CTA',
                'Detail pages per trip with itinerary and pricing',
                'Contact form with validation',
                'Performance-optimised images and responsive grid',
            ],
            tech: ['HTML5', 'Sass / CSS3', 'JavaScript', 'Gulp'],
            repoUrl: 'https://github.com/wexnox/Adventure-Trail-Hikes',
            deployedUrl: 'http://adventure.wexox.no',
            imgSrc: AdventureTrailHikes,
            imgSrcSet: `${AdventureTrailHikesSmall} 640w, ${AdventureTrailHikes} 1200w`,
        },
        {
            title: 'CSS Frameworks CA',
            isOnline: false,
            isPublicRepo: true,
            description:
                'Course assignment in CSS frameworks at Noroff: page templates for a social media site with a landing page, feed and profile page, built with Bootstrap and Sass.',
            longDescription:
                'Bootstrap is set up with custom Sass variables, and the project is bundled with Vite.',
            highlights: [
                'Landing page, feed and profile page',
                'Bootstrap customised with Sass variables',
                'Bundled with Vite, with ESLint and Prettier',
            ],
            tech: ['HTML', 'Bootstrap', 'Sass', 'Vite'],
            repoUrl: 'https://github.com/wexnox/css-frameworks-ca',
            deployedUrl: '',
        },
        {
            title: 'Community Science Museum',
            isOnline: false,
            isPublicRepo: false,
            description:
                'Website for an interactive science museum aimed at children aged 7 to 15 and their families. Built as the first-semester exam project, with emphasis on design, target audience and responsive HTML and CSS.',
            longDescription:
                'The site has separate pages for exhibits, exploring, visitor information, getting involved and contact.',
            highlights: [
                'Six pages: home, exhibits, explore, visit, get involved and contact',
                'Responsive design in plain HTML and CSS',
                'Design adapted for children, young people and parents',
            ],
            tech: ['HTML', 'CSS', 'JavaScript', 'Vite'],
            repoUrl: 'https://github.com/wexnox/Community_Science_Museum',
            deployedUrl: '',
        },
        {
            title: 'World of Warcraft Blog',
            isOnline: false,
            isArchived: true,
            isPublicRepo: false,
            description:
                'A content-driven blog about World of Warcraft where articles, guides and news are published through a headless CMS. The frontend is built from scratch with a focus on readability, fast loading and search engine optimisation.',
            longDescription:
                'The content is fetched from a WordPress installation used as a headless CMS via REST API. The site includes a carousel of featured posts, dynamic detail pages, search, a comment system and a separate admin page for selected features.',
            highlights: [
                'Headless CMS architecture with WordPress as backend',
                'Dynamic blog and detail pages driven by the API',
                'Carousel, search and pagination of articles',
                'Optimised for performance and SEO',
            ],
            tech: ['HTML', 'JavaScript', 'Sass', 'WordPress (Headless CMS)'],
            repoUrl: 'https://github.com/wexnox/project-exam-1-wexnox',
            deployedUrl: 'http://blog.wexox.no',
            imgSrc: WowBlog,
            imgSrcSet: `${WowBlogSmall} 640w, ${WowBlog} 1200w`,
        },
        {
            title: 'Scientific Project — E-Commerce',
            isOnline: false,
            isArchived: true,
            isPublicRepo: false,
            description:
                'Academic e-commerce project developed at university level (2018), focused on fullstack development, a secure payment flow and a structured MVC architecture.',
            longDescription:
                'The application is built on Laravel 5 with Stripe.js for card payments and Bootstrap for a responsive interface. The project demonstrates routing, authentication, database-driven products and a complete purchase flow from cart to receipt.',
            highlights: [
                'MVC architecture in Laravel',
                'Secure payment via Stripe.js',
                'User and admin roles',
                'Responsive interface with Bootstrap',
            ],
            tech: ['Laravel 5', 'PHP', 'Stripe.js', 'Bootstrap', 'MySQL'],
            repoUrl: 'http://github.com/wexnox',
            deployedUrl: 'http://spa3000.wexox.no',
            imgSrc: 'https://picsum.photos/seed/spa3000/500/300',
        },
    ];

    const featured = projects.filter((project) => project.featured);
    const archived = projects.filter((project) => project.isArchived);
    const others = projects.filter((project) => !project.featured && !project.isArchived);

    return (
        <div className="container mx-auto px-4 space-y-16">
            <section aria-labelledby="projects-featured">
                <h3 id="projects-featured" className="mb-6 text-xl font-bold text-gray-900">Featured</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {featured.map((project, index) => (
                        // The first featured project leads the list across the full width
                        <div key={project.title} className={index === 0 ? 'lg:col-span-3' : undefined}>
                            <Card project={project} featured lead={index === 0} />
                        </div>
                    ))}
                </div>
            </section>

            <section aria-labelledby="projects-more">
                <h3 id="projects-more" className="mb-6 text-xl font-bold text-gray-900">More projects</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {others.map((project) => (
                        <Card key={project.title} project={project} />
                    ))}
                </div>
            </section>

            <section aria-labelledby="projects-archive">
                <h3 id="projects-archive" className="text-xl font-bold text-gray-900">Archive</h3>
                <p className="mt-1 mb-6 text-sm text-gray-600">These projects have been taken offline.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {archived.map((project) => (
                        <Card key={project.title} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Projects;
