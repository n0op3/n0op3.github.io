import { For } from "solid-js";
import Icon from "../utils/Icons";
import { siDiscord, siGithub, siProtonmail } from "simple-icons";

import styles from './Contact.module.css';

function ContactCard(contact) {
    return (
        <a href={contact.url} target="_blank">
            <div class={styles.card}>
                <h3>{contact.title}</h3>
                <Icon icon={contact.icon}></Icon>
            </div>
        </a>
    );
}

function Contact() {
    const contacts = [
        {
            title: "Discord",
            icon: siDiscord,
            url: "https://discord.dog/n0op3"
        },
        {
            title: "e-mail",
            icon: siProtonmail,
            url: "mailto:n0op3@proton.me"
        },
        {
            title: "GitHub",
            icon: siGithub,
            url: "https://github.com/n0op3"
        }
    ];
    return (
        <div class="container">
            <h1 class="centered">Wanna reach out?</h1>
            <For each={contacts} fallback={<div>No contact info yet, sorry!</div>}>
                {(contact) => (
                    ContactCard(contact)
                )}
            </For>
        </div>
    );
}

export default Contact
