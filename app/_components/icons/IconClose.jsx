function IconClose({ width = '24', height = '24' }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="lucide lucide-x"
            viewBox="0 0 24 24"
        >
            <path d="M18 6L6 18M6 6l12 12"></path>
        </svg>
    );
}

export default IconClose;