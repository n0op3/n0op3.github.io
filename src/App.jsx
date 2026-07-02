import { Router, Route } from "@solidjs/router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";

function App() {
    return (
        <>
            <header><Navbar /></header>
            <main>
                <Router>
                    <Route path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />
                </Router>
            </main>
            <footer><Footer /></footer>
        </>
    )
}

export default App;
