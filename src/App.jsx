import { HashRouter, Route } from "@solidjs/router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";

function App() {
    return (
        <>
            <header class="container"><Navbar /></header>
            <HashRouter>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
            </HashRouter>
            <footer class="container">{/* footer goes here */}</footer>
        </>
    )
}

export default App;
