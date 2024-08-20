function IconBurger({width = "24", height = "24"}) {
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
        className="lucide lucide-menu"
        viewBox="0 0 24 24"
      >
        <path d="M4 12L20 12"></path>
        <path d="M4 6L20 6"></path>
        <path d="M4 18L20 18"></path>
      </svg>
    );
  }
  
  export default IconBurger;