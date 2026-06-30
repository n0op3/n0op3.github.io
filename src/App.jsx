import { HashRouter, Route } from "@solidjs/router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <header class="container"><Navbar /></header>
            <HashRouter>
                <Route path="/" component={Home} />
            </HashRouter>
            <footer class="container">{/* footer goes here */}</footer>
        </>
    )
}

export default App;
