import React from "react";
import { useEffect, useState } from "react";

function ScrollTop() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scrollTop">
      {showScroll && (
        <button
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            border: "none",
            backgroundColor: "#3b6035",
            color: "white",
            cursor: "pointer",
            padding: "10px",
            borderRadius: "50%",
            fontSize: "20px",
          }}
          onClick={scrollTop}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default ScrollTop;