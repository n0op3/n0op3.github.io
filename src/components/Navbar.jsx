import './Navbar.css'

function Navbar() {
    return (
        <nav class="navbar">
            <ul class="navbar__links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Me</a></li>
                <li><a href="/projects">Projects</a></li>
            </ul>
        </nav>
    );
}

export default Navbar
