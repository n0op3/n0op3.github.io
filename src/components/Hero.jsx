import { siGithub, siProtonmail } from 'simple-icons';
import Icon from '../utils/Icons';

import './Hero.css'

function Hero() {
    return (
        <section class="hero">
            <p class="hero__eyebrow">こんいちは！</p>
            <img class="hero__avatar" src="https://avatars.githubusercontent.com/u/167058949" />
            <h1 class="hero__headline">My name is <a class="a--fg">n0op3</a></h1>
            <p class="hero__subheadline">
                I'm a self-taught software developer with nearly a decade of experience.
            </p>
            <div class="hero__actions">
                <button class="btn btn--primary"><a href="/projects">My projects</a></button>
                <button class="btn btn--ghost"><a href="/about">More about me</a></button>
            </div>
            <div class="hero__links">
                <a href="https://github.com/n0op3"><Icon icon={siGithub} /></a>
                <a href="mailto:n0op3@proton.me"><Icon icon={siProtonmail} /></a>
            </div>
        </section>
    );
}

export default Hero
