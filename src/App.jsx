import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <header class="container"><Navbar /></header>
            <main class="container"><Hero /></main>
            <footer class="container">{/* footer goes here */}</footer>
        </>
    );
}

export default App;
