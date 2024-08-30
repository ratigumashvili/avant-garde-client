function IconFilter({width = "24", height = "24"}) {
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
        className="lucide lucide-sliders-horizontal"
        viewBox="0 0 24 24"
      >
        <path d="M21 4L14 4"></path>
        <path d="M10 4L3 4"></path>
        <path d="M21 12L12 12"></path>
        <path d="M8 12L3 12"></path>
        <path d="M21 20L16 20"></path>
        <path d="M12 20L3 20"></path>
        <path d="M14 2L14 6"></path>
        <path d="M8 10L8 14"></path>
        <path d="M16 18L16 22"></path>
      </svg>
    );
  }
  
  export default IconFilter;
  