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

const SOCIAL_LINKS = [
    {
        href: 'https://www.linkedin.com/in/jaap-spakman/',
        title: 'LinkedIn',
        path: 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
    },
    {
        href: 'https://www.instagram.com/mediaflow0548/',
        title: 'Instagram',
        path: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
    },
    {
        href: 'https://www.youtube.com/@Mediaflow0548',
        title: 'YouTube',
        path: 'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z',
    },
    {
        href: 'https://www.tiktok.com/@mediaflow_0548',
        title: 'TikTok',
        path: 'M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72c0 87.89-71.25 159.13-159.13 159.13S7 437.26 7 349.38s71.25-159.13 159.13-159.13c14.24 0 28 1.87 41.22 5.42v72.37c-13.22-4.67-27.28-7.33-41.22-7.33-51.05 0-92.49 41.44-92.49 92.49s41.44 92.49 92.49 92.49 92.49-41.44 92.49-92.49v-303h71.18a102.59 102.59 0 0 0 68.41 45.42v71.67A208.43 208.43 0 0 1 448 209.91z',
    },
    {
        href: 'https://www.facebook.com/profile.php?id=61591504469334',
        title: 'Facebook',
        path: 'M80 299.3V256H12v-54.7h68v-40.5c0-67.5 41.2-104 101.2-104 28.8 0 53.5 2.1 60.7 3v70.4h-41.7c-32.7 0-39 15.6-39 38.3V201.3h78l-10.2 54.7h-67.8v180.2H80z',
    },
];

function currentPage() {
    const path = window.location.pathname;
    const file = path.split('/').pop() || 'index.html';
    return file;
}

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
                <img src="logo.png" alt="Mediaflow logo">
                <span>Media<span class="brand-flow">flow</span></span>
            </a>
            <nav class="nav-desktop">
                ${links}
                <div class="lang-switch" aria-label="Taalkeuze">
                    <button type="button" class="active" disabled title="Nederlands">NL</button>
                    <button type="button" disabled title="English (binnenkort)">EN</button>
                    <button type="button" disabled title="Deutsch (binnenkort)">DE</button>
                    <button type="button" disabled title="Français (binnenkort)">FR</button>
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

function buildFooter() {
    const pageLinks = NAV_ITEMS.map((item) => `<a href="${item.href}">${item.label}</a>`).join('');
    const socials = SOCIAL_LINKS.map((social) => `
        <a href="${social.href}" target="_blank" rel="noopener" title="${social.title}">
            <svg viewBox="0 0 448 512"><path d="${social.path}"/></svg>
        </a>
    `).join('');

    return `
        <div class="footer-inner">
            <div>
                <div class="footer-brand">
                    <img src="logo.png" alt="Mediaflow logo">
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
                <a href="contact.html">Holten, Overijssel</a>
            </div>
        </div>
        <div class="footer-bottom">© 2026 Mediaflow — Jaap Spakman</div>
    `;
}

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

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const footer = document.querySelector('.site-footer');

    if (header) {
        header.innerHTML = buildHeader();
    }

    if (footer) {
        footer.innerHTML = buildFooter();
    }

    buildSocialCards();

    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.nav-mobile');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            const isOpen = mobileNav.classList.toggle('open');
            hamburger.classList.toggle('open', isOpen);
            hamburger.setAttribute('aria-expanded', String(isOpen));
        });
    }
});
