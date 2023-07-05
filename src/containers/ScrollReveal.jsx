import { duration } from "@mui/material";
import { useRef, useEffect } from "react";
import scrollReveal from "scrollreveal";

const ScrollReveal = ({ children, style, delay = 500, duration=900 }) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      scrollReveal().reveal(sectionRef.current, {
        reset: false,
        delay: delay,
        duration: duration,
      });
    }
  }, [delay]);
  
  return (
    <section
      ref={sectionRef}
      style={style}
      className="container scroll-section"
      data-testid="section"
    >
      {children}
    </section>
  );
};

export default ScrollReveal;
