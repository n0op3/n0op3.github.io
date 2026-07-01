import { createSignal } from 'solid-js';
import Dropdown from './Dropdown';

import './Navbar.css'

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
    return (
        <nav class="navbar">
            <div></div>
            <div class="navbar__links">
                <a href="/">Home</a>
                <a href="/about">About Me</a>
                <a href="/projects">Projects</a>
            </div>
            <div class="navbar__theme-dropdown">
                <ThemeDropdown />
            </div>
        </nav>
    );
}

export default Navbar
