import { HashRouter, Route } from "@solidjs/router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
    return (
        <>
            < header > <Navbar /></header >
            <main class="container">
                <HashRouter>
                    <Route path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                </HashRouter>
            </main>
            <footer ><Footer /></footer>
        </>
    )
}

export default App;
