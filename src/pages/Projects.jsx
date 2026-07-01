import { For } from "solid-js";

import styles from './Projects.module.css';

function ProjectCard(project, right) {
    return (
        <a href={project.url} target="_blank" class={`${styles.card} ${right ? 'right' : 'left'}`}>
            <div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <img src={project.preview_url} alt="(missing preview)" />
            </div>
        </a>
    );
}

function Projects() {
    const projects = [
        {
            name: "Solo Leveling TUI",
            description: "Workout tracking app for termits(terminal hermits).",
            preview_url: "https://placehold.co/1920x1080",
            url: "https://github.com/n0op3/solo-leveling-tui"
        },
        {
            name: "Better World Presets",
            description: "A Minecraft mod which enables saving and restoring world creation settings.",
            preview_url: "https://placehold.co/1920x1080",
            url: "https://github.com/n0op3/better-world-presets-fabric"
        }
    ];

    return (
        <div class="container">
            <h1 class="centered">My Projects</h1>
            <div class={styles.projects}>
                <For each={projects} fallback={<div>No projects to list! :(</div>}>
                    {(project, i) => (
                        ProjectCard(project, i() % 2 != 0)
                    )}
                </For>
            </div>
        </div >
    );
}

export default Projects
