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
                <span>Contact</span>
                <div class="gradient--bg" style="display: flex; justify-content: center; align-items: center; gap: var(--space-3); padding: 8px 8px 0px 8px; margin-top: 0">
                    <a href="https://github.com/n0op3" target="_blank" title="GitHub"><Icon icon={siGithub} /></a>
                    <a href="mailto:n0op3@proton.me" target="_blank" title="ProtonMail"><Icon icon={siProtonmail} /></a>
                    <a href="https://discord.dog/n0op3" target="_blank" title="Discord"><Icon icon={siDiscord} /></a>
                </div >
            </div >
        </div >
    );
}

export default Footer
