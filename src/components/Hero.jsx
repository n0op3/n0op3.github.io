import { createSignal } from 'solid-js';
import './Hero.css'

function Hero() {
    const [imageLoaded, setImageLoaded] = createSignal(false);

    return (
        <section class="hero">
            <p class="hero__eyebrow">こんいちは！</p>
            <img class={`hero__avatar ${imageLoaded() ? 'loaded' : ''}`}
                src="https://avatars.githubusercontent.com/u/167058949"
                onLoad={() => setImageLoaded(true)} />
            <h1 class="hero__headline">My name is <span class="gradient--fg">n0op3</span></h1>
            <p class="hero__subheadline">
                I'm a self-taught backend software developer with nearly a decade of experience.
            </p>
            <div class="hero__actions">
                <a href="/projects" class="btn btn--primary"><span style="z-index: 1">My projects</span></a>
                <a href="/about" class="btn btn--ghost">More about me</a>
            </div>
        </section>
    );
}

export default Hero
