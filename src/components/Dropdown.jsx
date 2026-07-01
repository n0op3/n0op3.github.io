import { createSignal, onCleanup, onMount } from 'solid-js';

import './Dropdown.css'
import { ChevronDown } from 'lucide-solid';

function Dropdown(props) {
    const [open, setOpen] = createSignal(false);
    let ref;

    function handleOutside(e) {
        if (!ref.contains(e.target)) setOpen(false);
    }

    onMount(() => document.addEventListener('click', handleOutside));
    onCleanup(() => document.removeEventListener('click', handleOutside));

    return (
        <div class="dropdown" ref={ref}>
            <button class="dropdown__trigger" onClick={() => setOpen(o => !o)}>
                {props.selected} <ChevronDown class="dropdown__icon" />
            </button>
            {open() && (
                <ul class="dropdown__menu">
                    {props.options.map(opt => (
                        <a class="dropdown__item"
                            onClick={() => { props.onSelect(opt); setOpen(false); }}>
                            {opt}
                        </a>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown
