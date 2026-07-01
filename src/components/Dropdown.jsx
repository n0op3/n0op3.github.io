import { createSignal } from 'solid-js';

import './Dropdown.css'
import { ChevronDown } from 'lucide-solid';

function Dropdown(props) {
    const [open, setOpen] = createSignal(false);

    return (
        <div class="dropdown">
            <button class="dropdown__trigger" onClick={() => setOpen(o => !o)}>
                {props.selected} <ChevronDown class="dropdown__icon" />
            </button>
            {open() && (
                <ul class="dropdown__menu">
                    {props.options.map(opt => (
                        <li
                            class="dropdown__item"
                            onClick={() => { props.onSelect(opt); setOpen(false); }}
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown
