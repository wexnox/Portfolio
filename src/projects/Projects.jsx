import Card from '../components/Card.jsx';
import React from 'react';
import Matplan from '../assets/images/Matplan-1200.webp';
import MatplanSmall from '../assets/images/Matplan-640.webp';
import WowBlog from '../assets/images/WoWBlog-1200.webp';
import WowBlogSmall from '../assets/images/WoWBlog-640.webp';
import Rainydays from '../assets/images/Rainydays-1200.webp';
import RainydaysSmall from '../assets/images/Rainydays-640.webp';
import AdventureTrailHikes from '../assets/images/AdventureTrailHikes-1200.webp';
import AdventureTrailHikesSmall from '../assets/images/AdventureTrailHikes-640.webp';

function Projects() {
    // Shown in this order: framework projects first, smaller ones further down
    const projects = [
        {
            title: 'Matplan',
            isOnline: true,
            isPublicRepo: false,
            description:
                'Norsk måltidsplanlegger for oppskrifter, uke- og månedsplaner, handlelister og matlager. Frontend og backend er to separate applikasjoner: en Vue-app som snakker med et REST API i Laravel.',
            longDescription:
                'Planleggeren følger ISO-uker, lar deg flytte måltider med dra-og-slipp og lager handlelister som kan deles med en lenke. Matlageret foreslår oppskrifter ut fra det du har, og appen kan leses uten nett som PWA.',
            highlights: [
                'REST API i Laravel 12 med roller, moderering og revisjonslogg',
                'Uke- og månedsplan med dra-og-slipp og tastaturstøtte',
                'Handlelister med delingslenke og kobling mot matlageret',
                'PWA med frakoblet lesing, lyst og mørkt tema',
            ],
            tech: ['Laravel 12', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'PWA'],
            repoUrl: '',
            deployedUrl: 'https://matplan.wexox.no/',
            imgSrc: Matplan,
            imgSrcSet: `${MatplanSmall} 640w, ${Matplan} 1200w`,
        },
        {
            title: 'Drinktree',
            isOnline: false,
            isPublicRepo: false,
            description:
                'Fullstack-app for å finne, lage og holde orden på drinkoppskrifter. Du registrerer ingrediensene du har, eller skanner dem med kameraet, og får forslag til drinker du kan lage med det du allerede har.',
            longDescription:
                'Backend er skrevet i Kotlin med Spring Boot og PostgreSQL, og frontend i Vue med TypeScript. Applikasjonen pakkes som ett Docker-image og kjøres med Docker Compose.',
            highlights: [
                'Kotlin og Spring Boot med PostgreSQL og Flyway-migreringer',
                'Vue og TypeScript i frontend',
                'AI-basert gjenkjenning av ingredienser og drinkforslag',
                'Docker-image bygget og publisert automatisk fra CI',
            ],
            tech: ['Kotlin', 'Spring Boot', 'Vue', 'TypeScript', 'PostgreSQL', 'Docker'],
            repoUrl: 'https://github.com/wexnox/drinktree',
            deployedUrl: '',
        },
        {
            title: 'Project Management',
            isOnline: false,
            isPublicRepo: false,
            description:
                'Prosjektplanleggingsverktøy for små team, med avhengigheter, tidsplan og kritisk linje. Skrivebordsappen fungerer uten nett og synkroniserer mot en delt server når den er tilkoblet.',
            longDescription:
                'Alle endringer lagres som en endringslogg, slik at konflikter mellom klienter løses likt uansett rekkefølge. Team kan velge ende-til-ende-kryptering, der serveren bare lagrer krypterte data.',
            highlights: [
                'Planleggingskjerne med tidsplan, kritisk linje og fristsjekk',
                'Skrivebordsklient i Compose Multiplatform med kryptert lokal SQLite',
                'Synkroniseringsserver i Spring Boot med PostgreSQL',
                'Ende-til-ende-kryptering for team',
            ],
            tech: ['Kotlin', 'Compose Multiplatform', 'Spring Boot', 'PostgreSQL', 'SQLite'],
            repoUrl: 'https://github.com/wexnox/Project_Management',
            deployedUrl: '',
        },
        {
            title: 'E-Learning',
            isOnline: false,
            isPublicRepo: false,
            description:
                'E-læringsside laget for å øve til et universitetsfag i samfunnsvitenskapelig metode. Den har modulquiz, repetisjon av feilsvar, flashkort, eksamensøving med tidsfrist og oversikt over fremdrift.',
            longDescription:
                'Siden er bygget som en Blazor Web App i .NET 10 med egne brukerkontoer. Spørsmål og begreper du svarer riktig på, kommer tilbake med økende mellomrom, og feilsvar kommer tilbake med en gang.',
            highlights: [
                'Blazor Web App med interaktiv server i .NET 10',
                'ASP.NET Core Identity og Entity Framework Core',
                'Repetisjon med økende intervaller for quiz og flashkort',
                'Notater og markeringer i teoriteksten',
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
        {
            title: 'JavaScript Frameworks — Online Shop',
            isOnline: false,
            isPublicRepo: true,
            description:
                'En komplett nettbutikk bygget i React for å demonstrere bruk av moderne rammeverk, state management og API-integrasjon. Brukere kan bla i produkter, lese detaljer, legge varer i handlekurv og gjennomføre en simulert checkout.',
            longDescription:
                'Prosjektet legger vekt på komponentbasert arkitektur, gjenbrukbare hooks og et rent skille mellom UI, tilstand og data. Det inkluderer også søk, lasting/feilhåndtering og en kontaktside med skjemavalidering.',
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
            title: 'Social Media Application',
            isOnline: false,
            isPublicRepo: true,
            description:
                'Frontend-klient for en eksisterende sosial medieplattform, laget for å øve på JavaScript mot et API. Brukere kan registrere seg, logge inn og se, opprette, redigere og slette innlegg.',
            longDescription:
                'Koden er delt i moduler for autentisering, innlegg og visning, med søk og filtrering av innlegg. Grensesnittet er bygget med Bootstrap og Sass, og prosjektet bygges med Vite.',
            highlights: [
                'Registrering, innlogging og utlogging mot API',
                'Opprette, redigere og slette innlegg',
                'Søk og filtrering av innlegg',
                'Modulær JavaScript bygget med Vite',
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
            imgSrcSet: `${RainydaysSmall} 640w, ${Rainydays} 1200w`,
        },
        {
            title: 'Adventure Trail Hikes',
            isOnline: true,
            isPublicRepo: false,
            description:
                'Markedsføringsside for et reiselivsselskap som tilbyr ekstreme fotturer i flere land. Siden presenterer turene, veileder potensielle kunder og samler inn forespørsler via skjema.',
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
            imgSrcSet: `${AdventureTrailHikesSmall} 640w, ${AdventureTrailHikes} 1200w`,
        },
        {
            title: 'CSS Frameworks CA',
            isOnline: false,
            isPublicRepo: true,
            description:
                'Kursoppgave i CSS-rammeverk på Noroff: sidemaler for et sosialt medium med forside, feed og profilside, bygget med Bootstrap og Sass.',
            longDescription:
                'Bootstrap er satt opp med egne Sass-variabler, og prosjektet bygges med Vite.',
            highlights: [
                'Forside, feed og profilside',
                'Bootstrap tilpasset med Sass-variabler',
                'Bygget med Vite, med ESLint og Prettier',
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
                'Nettsted for et interaktivt vitenskapsmuseum rettet mot barn og unge fra 7 til 15 år og familiene deres. Laget som eksamensprosjekt i første semester, med vekt på design, målgruppe og responsiv HTML og CSS.',
            longDescription:
                'Nettstedet har egne sider for utstillinger, utforsking, besøksinformasjon, engasjement og kontakt.',
            highlights: [
                'Seks sider: forside, utstillinger, utforsk, besøk, engasjer deg og kontakt',
                'Responsivt design i ren HTML og CSS',
                'Design tilpasset barn, unge og foreldre',
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
            imgSrcSet: `${WowBlogSmall} 640w, ${WowBlog} 1200w`,
        },
        {
            title: 'Scientific Project — E-Commerce',
            isOnline: false,
            isArchived: true,
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
    ];

    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {projects.map((project, index) => (
                <Card key={index} project={project} />
            ))}
        </div>
    );
}

export default Projects;
