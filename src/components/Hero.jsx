import './Hero.css'

function Hero() {
    return (
        <section class="hero">
            <p class="hero__eyebrow">こんいちは！</p>
            <h1 class="hero__headline">My name is n0op3</h1>
            <p class="hero__subheadline">
                I'm a self-taught software developer with almost a decade of experience.
            </p>
            <div class="hero__actions">
                <button class="btn btn--primary">My projects</button>
                <button class="btn btn--ghost">More about me</button>
            </div>
        </section>
    );
}

export default Hero
