function Icon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d={props.icon.path} />
        </svg>
    );
}

export default Icon
