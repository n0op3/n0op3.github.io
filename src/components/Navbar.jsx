import './Navbar.css'

function ThemeDropdown() {
    function updateTheme(e) {
        document.documentElement.setAttribute('data-theme', e.target.value);
        localStorage.setItem('theme', e.target.value);
    }

    const theme = localStorage.getItem('theme') ?? 'inferno';
    document.documentElement.setAttribute('data-theme', theme);

    return (
        <select onChange={updateTheme}>
            <option value="inferno">Inferno</option>
            <option value="tokyo">Tokyo</option>
        </select>
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
