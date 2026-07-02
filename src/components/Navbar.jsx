import { createSignal } from 'solid-js';
import Dropdown from './Dropdown';

import './Navbar.css'
import { createMediaQuery } from '@solid-primitives/media';

function ThemeDropdown() {
    const [theme, setTheme] = createSignal(localStorage.getItem('theme') ?? 'Inferno');

    function updateTheme(t) {
        setTheme(t);
        document.documentElement.setAttribute('data-theme', t);
        document.querySelector("link[rel='icon']").href = `/icons/favicon-${theme()}.svg`;
        localStorage.setItem('theme', t);
    }
    updateTheme(theme())

    return (
        <div style="display: flex; align-items: center; gap: var(--space-2)">
            <span style="color: var(--color-text-muted); font-size: var(--text-xsm)">Theme</span>
            < Dropdown options={['Inferno', 'Tokyo', 'Rose']} selected={theme()} onSelect={updateTheme} />
        </div>
    );
}

function Navbar() {
    const isMobile = createMediaQuery('(max-width: 640px)');

    return (
        <nav class="navbar">
            {isMobile() ? <></> : <div></div>}
            <div class="navbar__links">
                <a href="/">Home</a>
                <a href="/about">{isMobile() ? 'About' : 'About Me'}</a>
                <a href="/projects">Projects</a>
            </div>
            <div class="navbar__theme-dropdown">
                <ThemeDropdown />
            </div>
        </nav>
    );
}

export default Navbar
