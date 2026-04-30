import Card from '../components/Card.jsx';
import React from 'react';
import WowBlog from '../assets/images/WoWBlog.png';
import Rainydays from '../assets/images/Rainydays.png';
import AdventureTrailHikes from '../assets/images/AdventureTrailHikes.png';

function Projects() {
    const projects = [
        {
            title: 'Project Exam 2 — Holidaze',
            isOnline: false,
            isPublicRepo: true,
            description:
                'Holidaze er en moderne plattform for booking av overnatting, utviklet som avsluttende eksamensprosjekt på Noroff. Prosjektet dekker både kundeflyten — søk, filtrering, detaljvisning og booking av venues — og en administrasjonsdel hvor venue managers kan opprette, redigere og følge opp sine egne utleieobjekter og bestillinger.',
            longDescription:
                'Applikasjonen er bygget mot et offentlig REST API og bruker JWT-basert autentisering, beskyttede ruter og rollebasert tilgang. Fokuset har vært på god UX, responsivt design, tilgjengelighet (WCAG) og ren komponentstruktur i React.',
            highlights: [
                'Autentisering, beskyttede ruter og roller (kunde / venue manager)',
                'CRUD for venues og bookinger mot Holidaze-API',
                'Søk, filtrering og kalenderbasert datovalg',
                'Responsivt og tilgjengelig design med Tailwind CSS',
            ],
            tech: ['React', 'React Router', 'Tailwind CSS', 'REST API', 'Vite'],
            repoUrl: 'https://github.com/wexnox/Project-Exam-2-Holidaze',
            deployedUrl: '',
            imgSrc: 'https://picsum.photos/seed/holidaze/500/300',
        },
        {
            title: 'JavaScript Frameworks — Online Shop',
            isOnline: false,
            isPublicRepo: true,
            description:
                'En komplett eCom-løsning bygget i React for å demonstrere bruk av moderne rammeverk, state management og API-integrasjon. Brukere kan bla i produkter, lese detaljer, legge varer i handlekurv og gjennomføre en simulert checkout.',
            longDescription:
                'Prosjektet legger vekt på komponentbasert arkitektur, gjenbrukbare hooks og en ren skille mellom UI, tilstand og data. Det inkluderer også søk, lasting/feilhåndtering og en kontaktside med skjemavalidering.',
            highlights: [
                'Produktliste, detaljside, handlekurv og checkout-flow',
                'Global state med Context / hooks',
                'Skjemavalidering og brukervennlig feilhåndtering',
                'Henting av produkter fra eksternt API',
            ],
            tech: ['React', 'JavaScript', 'CSS / Sass', 'REST API'],
            repoUrl: 'https://github.com/wexnox/JS_Framework_CA',
            deployedUrl: '',
            imgSrc: 'https://picsum.photos/seed/shop/500/300',
        },
        {
            title: 'Semester Project 2 — Auction House',
            isOnline: false,
            isPublicRepo: false,
            description:
                'En auksjonsplattform hvor registrerte brukere kan legge ut egne gjenstander og by på andres. Brukere får tildelt kreditt ved registrering og kan følge auksjoner i sanntid frem til budfristen.',
            longDescription:
                'Prosjektet integrerer mot et auksjons-API og håndterer autentisering, opprettelse av auksjoner med bilder og beskrivelser, samt en oversikt over egne bud og vunnede auksjoner. Designet er bygget på Bootstrap og tilpasset for både desktop og mobil.',
            highlights: [
                'Registrering, innlogging og profil med kredittsaldo',
                'Opprette, redigere og by på auksjonsoppføringer',
                'Søk og filtrering av aktive auksjoner',
                'Responsivt UI bygget med Bootstrap',
            ],
            tech: ['Vite', 'JavaScript', 'HTML', 'Bootstrap', 'REST API'],
            repoUrl: 'https://github.com/wexnox/AuctionHouse',
            deployedUrl: '',
            imgSrc: 'https://picsum.photos/seed/auction/500/300',
        },
        {
            title: 'World of Warcraft Blog',
            isOnline: true,
            isPublicRepo: false,
            description:
                'En innholdsdrevet blogg om World of Warcraft hvor artikler, guider og nyheter publiseres via et headless CMS. Frontend er bygget fra bunnen av med fokus på lesbarhet, hurtig lasting og søkemotoroptimalisering.',
            longDescription:
                'Innholdet hentes fra en WordPress-installasjon brukt som Headless CMS via REST API. Siden inkluderer en karusell med utvalgte innlegg, dynamiske detaljsider, søk, kommentarsystem og en egen administrasjonsside for utvalgte funksjoner.',
            highlights: [
                'Headless CMS-arkitektur med WordPress som backend',
                'Dynamiske blogg- og detaljsider drevet av API',
                'Karusell, søk og paginering av artikler',
                'Optimalisert for ytelse og SEO',
            ],
            tech: ['HTML', 'JavaScript', 'Sass', 'WordPress (Headless CMS)'],
            repoUrl: 'https://github.com/wexnox/project-exam-1-wexnox',
            deployedUrl: 'http://blog.wexox.no',
            imgSrc: WowBlog,
        },
        {
            title: 'Rainydays',
            isOnline: true,
            isPublicRepo: false,
            description:
                'Nettbutikk som selger regnjakker for menn og kvinner, designet for friluftsliv og aktiv bruk. Prosjektet dekker hele kundereisen fra produktoversikt til checkout.',
            longDescription:
                'Nettsiden er bygget med semantisk HTML5, modulær Sass-arkitektur og vanilla JavaScript, og bruker Gulp for byggesteg som minifisering og bildebehandling. Designet er responsivt og fokuserer på et rent og merkevarekonsistent uttrykk.',
            highlights: [
                'Produktliste, detaljside og handlekurv',
                'Modulær Sass-struktur med variabler og mixins',
                'Byggepipeline med Gulp (minify, autoprefix, sass)',
                'Responsivt og tilgjengelig design',
            ],
            tech: ['HTML5', 'Sass / CSS3', 'JavaScript', 'Gulp'],
            repoUrl: 'http://github.com/wexnox/rainydays',
            deployedUrl: 'http://rainydays.wexox.no',
            imgSrc: Rainydays,
        },
        {
            title: 'Adventure Trail Hikes',
            isOnline: true,
            isPublicRepo: false,
            description:
                'Markedsføringsside for et reiselivsselskap som tilbyr ekstrem fottur i flere land. Siden presenterer turene, veileder potensielle kunder og samler inn forespørsler via skjema.',
            longDescription:
                'Fokus har vært på sterk visuell historiefortelling, raske sider og god mobilopplevelse. Siden er bygget med en modulær Sass-struktur og automatisert med Gulp for å forenkle utvikling og deploy.',
            highlights: [
                'Visuelt drevet landingsside med tydelig CTA',
                'Detaljsider per tur med program og prisinformasjon',
                'Kontaktskjema med validering',
                'Ytelsesoptimaliserte bilder og responsivt grid',
            ],
            tech: ['HTML5', 'Sass / CSS3', 'JavaScript', 'Gulp'],
            repoUrl: 'https://github.com/wexnox/Adventure-Trail-Hikes',
            deployedUrl: 'http://adventure.wexox.no',
            imgSrc: AdventureTrailHikes,
        },
        {
            title: 'Flower Power',
            isOnline: true,
            isPublicRepo: false,
            description:
                'Nettbutikk som selger blomsterbuketter på nett, bygget på WordPress med WooCommerce. Kundene kan bla gjennom utvalget, tilpasse buketter, betale online og bestille levering.',
            longDescription:
                'Prosjektet handler om å sette opp en komplett e-handelsløsning med fokus på enkel administrasjon for kunden, ryddig produktstruktur, kategorier og betalingsintegrasjon. Tema og utvalgte funksjoner er tilpasset for å støtte merkevarens uttrykk.',
            highlights: [
                'Full WooCommerce-oppsett med produkter og kategorier',
                'Tilpasset tema og brukerflyt',
                'Betalings- og fraktintegrasjoner',
                'Enkel innholdsadministrasjon for sluttkunde',
            ],
            tech: ['WordPress', 'WooCommerce', 'PHP', 'CSS'],
            repoUrl: '',
            deployedUrl: 'http://flower-power.wexox.no',
            imgSrc: 'https://picsum.photos/seed/flower/500/300',
        },
        {
            title: 'Scientific Project — E-Commerce',
            isOnline: true,
            isPublicRepo: false,
            description:
                'Akademisk e-handelsprosjekt utviklet på universitetsnivå (2018) med fokus på fullstack-utvikling, sikker betalingsflyt og strukturert MVC-arkitektur.',
            longDescription:
                'Applikasjonen er bygget på Laravel 5 med Stripe.js for kortbetaling og Bootstrap for et responsivt grensesnitt. Prosjektet demonstrerer ruting, autentisering, databasedrevne produkter og en komplett kjøpsflyt fra handlekurv til kvittering.',
            highlights: [
                'MVC-arkitektur i Laravel',
                'Sikker betaling via Stripe.js',
                'Bruker- og admin-roller',
                'Responsivt grensesnitt med Bootstrap',
            ],
            tech: ['Laravel 5', 'PHP', 'Stripe.js', 'Bootstrap', 'MySQL'],
            repoUrl: 'http://github.com/wexnox',
            deployedUrl: 'http://spa3000.wexox.no',
            imgSrc: 'https://picsum.photos/seed/spa3000/500/300',
        },
        {
            title: 'Portfolio',
            isOnline: true,
            isPublicRepo: true,
            description:
                'Denne porteføljesiden — bygget for å samle og presentere prosjektene mine på en ren og profesjonell måte. Siden er laget med Vite, React og Tailwind CSS, og er optimalisert for ytelse og enkel utvidelse.',
            longDescription:
                'Innholdet er datadrevet slik at nye prosjekter enkelt kan legges til. Designet legger vekt på lesbarhet, tydelig hierarki og konsistent typografi, samtidig som det forblir lett og responsivt på alle enheter.',
            highlights: [
                'Datadrevet prosjektliste — enkel å utvide',
                'Responsivt grid og moderne kortdesign',
                'SEO via react-helmet-async',
                'Ren komponentstruktur i React',
            ],
            tech: ['Vite', 'React', 'Tailwind CSS', 'React Router'],
            repoUrl: 'https://github.com/wexnox/Portfolio',
            deployedUrl: 'http://portfolio.wexox.no',
            imgSrc: 'https://picsum.photos/seed/portfolio/500/300',
        },
    ];

    const sortedProjects = [...projects].sort((a, b) => {
        if (a.isOnline === b.isOnline) return 0;
        return a.isOnline ? -1 : 1;
    });

    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {sortedProjects.map((project, index) => (
                <Card key={index} project={project} />
            ))}
        </div>
    );
}

export default Projects;
