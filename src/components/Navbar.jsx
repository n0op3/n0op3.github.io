import { createSignal } from 'solid-js';
import Dropdown from './Dropdown';

import './Navbar.css'

function ThemeDropdown() {
    const [theme, setTheme] = createSignal(localStorage.getItem('theme') ?? 'Inferno');

    function updateTheme(t) {
        setTheme(t);
        document.documentElement.setAttribute('data-theme', t);
        localStorage.setItem('theme', t);
    }
    updateTheme(theme())

    return (
        <Dropdown options={['Inferno', 'Tokyo']} selected={theme()} onSelect={updateTheme} />
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
