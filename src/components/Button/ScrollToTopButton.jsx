import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const scrollToTop = () => {
    console.log("Scrolling to top");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button
        className="btn btn-circle bg-gray-800 text-white fixed bottom-4 right-4"
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7-7-7 7"
          />
        </svg>
      </button>
    )
  );
};

export default ScrollToTopButton;
