function IconSearch({width = '24', heigth = '24'}) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={heigth}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="lucide lucide-search"
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="M21 21l-4.3-4.3"></path>
      </svg>
    );
  }
  
  export default IconSearch;