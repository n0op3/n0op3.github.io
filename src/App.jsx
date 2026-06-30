import { HashRouter, Route } from "@solidjs/router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <header ><Navbar /></header>
            <main class="container">
                <HashRouter>
                    <Route path="/" component={Home} />
                    <Route path="/about" component={About} />
                </HashRouter>
            </main>
            <footer ><Footer /></footer>
        </>
    )
}

export default App;
