// ==================================================================
// Mediaflow — script.js
// ------------------------------------------------------------------
// Dit bestand bevat ALLE JavaScript voor de hele website (alle talen).
// Elke pagina in /, /en/, /de/ en /fr/ laadt dit ene bestand.
//
// Opbouw (boven naar beneden):
// 1. NAV_ITEMS      — lijst van alle pagina's (voor menu en footer)
// 2. SOCIAL_LINKS   — social media-iconen (SVG-paden)
// 3. currentPage()  — bepaalt op welke pagina we zijn
// 4. currentLanguage() — bepaalt in welke taal we zijn (nl/en/de/fr)
// 5. buildLanguageSwitcher() — bouwt de NL/EN/DE/FR knoppen
// 6. buildHeader()  — bouwt de header met logo, menu en taalknoppen
// 7. buildFooter()  — bouwt de footer met brand, socials en links
// 8. buildSocialCards() — vult de social-kaarten op de contactpagina
// 9. DOMContentLoaded — start alles op zodra de pagina is geladen:
//    header/footer injecteren, hamburger, FAQ-accordion, motion
// ==================================================================

// ------------------------------------------------------------------
// 1. NAV_ITEMS
// De volgorde en labels van alle pagina's. Deze lijst wordt gebruikt
// voor BOTH het desktopmenu, het mobiele menu EN de footer-links.
// `cta: true` zorgt dat de "Contact"-link er als knop uit gaat zien.
// Wil je een pagina toevoegen/verwijderen of hernoemen? Pas het hier,
// dan past het automatisch overal.
// ------------------------------------------------------------------
const NAV_ITEMS = [
    { href: 'index.html', label: 'Home' },
    { href: 'diensten.html', label: 'Diensten' },
    { href: 'portfolio.html', label: 'Portfolio' },
    { href: 'over-mij.html', label: 'Over mij' },
    { href: 'tarieven.html', label: 'Tarieven' },
    { href: 'proces.html', label: 'Proces' },
    { href: 'faq.html', label: 'FAQ' },
    { href: 'contact.html', label: 'Contact', cta: true },
];

// ------------------------------------------------------------------
// 2. SOCIAL_LINKS
// Elk social-icoon bestaat uit:
//   href     — de URL waar de link naartoe gaat
//   title    — tooltip en label op de contactpagina
//   viewBox  — het tekengebied van de SVG (elk icoon heeft eigen afmetingen,
//              hierdoor worden iconen niet afgesneden of scheef gecentreerd)
//   path     — de SVG-vorm zelf (een lange lijn van coördinaten die
//              samen het icoontje tekent)
// ------------------------------------------------------------------
const SOCIAL_LINKS = [
    {
        href: 'https://www.linkedin.com/in/jaap-spakman/',
        title: 'LinkedIn',
        viewBox: '0 0 448 512',
        path: 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
    },
    {
        href: 'https://www.instagram.com/mediaflow0548/',
        title: 'Instagram',
        viewBox: '0 0 448 512',
        path: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
    },
    {
        href: 'https://www.youtube.com/@Mediaflow0548',
        title: 'YouTube',
        viewBox: '0 0 576 512',
        path: 'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z',
    },
    {
        href: 'https://www.tiktok.com/@mediaflow_0548',
        title: 'TikTok',
        viewBox: '0 0 448 512',
        path: 'M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z',
    },
    {
        href: 'https://www.facebook.com/profile.php?id=61591504469334',
        title: 'Facebook',
        viewBox: '0 0 320 512',
        path: 'M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z',
    },
];

// ------------------------------------------------------------------
// 3. currentPage()
// Haalt de bestandsnaam uit de URL (bijv. "index.html" of "faq.html").
// Wordt gebruikt om de actieve menu-link te markeren en om de
// taalwisselaar naar de juiste pagina te laten verwijzen.
// ------------------------------------------------------------------
function currentPage() {
    const path = window.location.pathname;
    const file = path.split('/').pop() || 'index.html';
    return file;
}

// ------------------------------------------------------------------
// 4. currentLanguage()
// Kijkt in welke map de pagina zich bevindt:
//   /en/ → Engels, /de/ → Duits, /fr/ → Frans
//   geen van deze → standaard Nederlands (de root)
// ------------------------------------------------------------------
function currentLanguage() {
    const path = window.location.pathname;
    if (path.includes('/en/')) return 'en';
    if (path.includes('/de/')) return 'de';
    if (path.includes('/fr/')) return 'fr';
    return 'nl';
}

// ------------------------------------------------------------------
// 5. buildLanguageSwitcher()
// Bouwt de NL/EN/DE/FR-knoppen in de header. De actieve taal wordt
// een disabled button (niet klikbaar, gemarkeerd). De andere talen
// worden links naar dezelfde pagina in de juiste map.
// Bijv.: je staat op /en/faq.html en klikt DE → je gaat naar /de/faq.html.
// ------------------------------------------------------------------
function buildLanguageSwitcher() {
    const current = currentLanguage();
    const page = currentPage();
    const inSubfolder = current !== 'nl';
    const rootPrefix = inSubfolder ? '../' : '';
    const languages = [
        { code: 'nl', label: 'NL', title: 'Nederlands', prefix: '' },
        { code: 'en', label: 'EN', title: 'English', prefix: 'en/' },
        { code: 'de', label: 'DE', title: 'Deutsch', prefix: 'de/' },
        { code: 'fr', label: 'FR', title: 'Français', prefix: 'fr/' },
    ];

    return languages.map((lang) => {
        const active = lang.code === current;
        const href = active ? '' : `${rootPrefix}${lang.prefix}${page}`;
        if (active) {
            return `<button type="button" class="active" disabled title="${lang.title}">${lang.label}</button>`;
        }
        return `<a href="${href}" title="${lang.title}">${lang.label}</a>`;
    }).join('');
}

// ------------------------------------------------------------------
// 6. buildHeader()
// Bouwt de complete header: logo links, menu + taalknoppen rechts,
// en een hamburger-knop voor mobiel. Wordt geïnjecteerd in het
// lege <header class="site-header"></header>-element op elke pagina.
// ------------------------------------------------------------------
function buildHeader() {
    const active = currentPage();
    const links = NAV_ITEMS.map((item) => {
        const classes = [item.cta ? 'nav-cta' : '', active === item.href ? 'active' : '']
            .filter(Boolean)
            .join(' ');
        return `<a href="${item.href}" class="${classes}">${item.label}</a>`;
    }).join('');

    const mobileLinks = NAV_ITEMS.map((item) => {
        const classes = [item.cta ? 'nav-cta' : '', active === item.href ? 'active' : '']
            .filter(Boolean)
            .join(' ');
        return `<a href="${item.href}" class="${classes}">${item.label}</a>`;
    }).join('');

    return `
        <div class="header-inner">
            <a href="index.html" class="brand">
                <img src="${rootPrefix}logo.png" alt="Mediaflow logo">
                <span>Media<span class="brand-flow">flow</span></span>
            </a>
            <nav class="nav-desktop">
                ${links}
                <div class="lang-switch" aria-label="Taalkeuze">
                    ${buildLanguageSwitcher()}
                </div>
            </nav>
            <button class="hamburger" aria-label="Menu openen of sluiten" aria-expanded="false">
                <span></span><span></span><span></span>
            </button>
        </div>
        <nav class="nav-mobile">
            ${mobileLinks}
        </nav>
    `;
}

// ------------------------------------------------------------------
// 7. buildFooter()
// Bouwt de footer in 3 kolommen: brand + socials | paginalinks | contact.
// De social-icoontjes worden uit SOCIAL_LINKS gehaald. Wordt geïnjecteerd
// in het lege <footer class="site-footer"></footer>-element op elke pagina.
// ------------------------------------------------------------------
function buildFooter() {
    const pageLinks = NAV_ITEMS.map((item) => `<a href="${item.href}">${item.label}</a>`).join('');
    const socials = SOCIAL_LINKS.map((social) => `
        <a href="${social.href}" target="_blank" rel="noopener" title="${social.title}">
            <svg viewBox="${social.viewBox}"><path d="${social.path}"/></svg>
        </a>
    `).join('');

    return `
        <div class="footer-inner">
            <div>
                <div class="footer-brand">
                    <img src="${rootPrefix}logo.png" alt="Mediaflow logo">
                    <strong>Media<span class="brand-flow">flow</span></strong>
                </div>
                <p class="footer-tagline">Drone videografie &amp; promotievideo's</p>
                <div class="social-row">${socials}</div>
            </div>
            <div>
                <h4>Pagina's</h4>
                ${pageLinks}
            </div>
            <div>
                <h4>Contact</h4>
                <a href="mailto:mediaflow0548@outlook.com">mediaflow0548@outlook.com</a>
                <a href="tel:+31618643610">+31 6 18643610</a>
                <a href="https://www.google.com/maps/search/?api=1&query=Holten%2C+Overijssel" target="_blank" rel="noopener">Holten, Overijssel</a>
            </div>
        </div>
        <div class="footer-bottom">© 2026 Mediaflow — Jaap Spakman</div>
    `;
}

// ------------------------------------------------------------------
// 8. buildSocialCards()
// Vult de social media-kaarten op de contactpagina (in het element
// met id="social-contact"). Elke kaart is een klikbare link met het
// sociale-netwerk-icoon en de naam. Bestaat het element niet (bijv.
// op pagina's zonder social-sectie), dan doet deze functie niets.
// ------------------------------------------------------------------
function buildSocialCards() {
    const target = document.getElementById('social-contact');
    if (!target) return;

    target.innerHTML = `<div class="card-grid">${SOCIAL_LINKS.map((social) => `
        <a href="${social.href}" target="_blank" rel="noopener" class="card" style="text-decoration: none;">
            <div class="icon">🔗</div>
            <h3>${social.title}</h3>
        </a>
    `).join('')}</div>`;
}

// ------------------------------------------------------------------
// 9. DOMContentLoaded
// Dit blok wordt pas uitgevoerd zodra de volledige pagina is geladen.
// Hier gebeurt de "opstart" van de website:
//   a. Header en footer injecteren
//   b. Social-kaarten vullen
//   c. Hamburger-menu koppelen
//   d. FAQ-accordion koppelen
//   e. Motion/scroll-reveal activeren
// ------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Header, footer en socials dynamisch inladen
    // a. Header en footer injecteren in de lege containers
    const header = document.querySelector('.site-header');
    const footer = document.querySelector('.site-footer');

    if (header) {
        header.innerHTML = buildHeader();
    }

    if (footer) {
        footer.innerHTML = buildFooter();
    }

    // b. Social-kaarten vullen (alleen op de contactpagina)
    buildSocialCards();

    // Hamburger-menu openen/dichtklappen op mobiel
    // c. Hamburger-menu: klik toggelt het mobiele menu open/dicht
    //    en verandert het icoon van drie streepjes naar een kruisje
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.nav-mobile');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            const isOpen = mobileNav.classList.toggle('open');
            hamburger.classList.toggle('open', isOpen);
            hamburger.setAttribute('aria-expanded', String(isOpen));
        });
    }

    // FAQ-accordion: vraag aanklikken opent/sluit het antwoord
    // d. FAQ-accordion: elke klik op een vraag opent of sluit het antwoord.
    //    De class ".open" wordt op het .faq-item gezet (CSS regelt de rest)
    //    en aria-expanded wordt bijgewerkt voor schermlezers.
    document.querySelectorAll('.faq-question').forEach((button) => {
        button.addEventListener('click', () => {
            const item = button.closest('.faq-item');
            const isOpen = item.classList.toggle('open');
            button.setAttribute('aria-expanded', String(isOpen));
        });
    });

    // e. MOTION — scroll-reveal animaties
    //    Om terug te draaien: verwijder dit hele blok én het MOTION-blok
    //    in style.css (zoek daar naar "MOTION — om terug te draaien").
    //
    //    Hoe het werkt:
    //    1. We zoeken alle elementen die zachtjes zichtbaar moeten worden
    //       (kaartgrids, portfolio-folders, proces-stappen, contactlijst,
    //       en de groene CTA-blokken).
    //    2. We geven ze de class ".motion-reveal" (deze maakt ze onzichtbaar
    //       met een offset naar beneden).
    //    3. Een IntersectionObserver kijkt wanneer zo'n element in beeld
    //       scrollt. Zodra dat gebeurt, krijgt het de class ".motion-visible"
    //       (waardoor het zachtjes zichtbaar wordt). Daarna stoppen we met
    //       observeren, zodat het maar één keer gebeurt.
    const motionTargets = document.querySelectorAll(
        '.card-grid, .folder-grid, .steps, .contact-list, .cta-block'
    );
    motionTargets.forEach((target) => target.classList.add('motion-reveal'));

    const motionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('motion-visible');
                motionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    motionTargets.forEach((target) => motionObserver.observe(target));
    // EINDE MOTION
});
