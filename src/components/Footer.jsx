import { siDiscord, siGithub, siProtonmail } from "simple-icons";
import Icon from "../utils/Icons";
import { ScrollText } from "lucide-solid";

import './Footer.css'

function Footer() {
    return (
        <div class="footer">
            <a href="https://mit-license.org" target="_blank">
                <div class="footer__license">
                    <ScrollText />
                    Licensed <span class="gradient--fg">MIT</span> 2026
                </div>
            </a>

            <div class="footer__links">
                <a href="https://github.com/n0op3" target="_blank"><Icon icon={siGithub} /></a>
                <a href="mailto:n0op3@proton.me" target="_blank"><Icon icon={siProtonmail} /></a>
                <a href="https://discord.dog/n0op3" target="_blank"><Icon icon={siDiscord} /></a>
            </div >
        </div >
    );
}

export default Footer
