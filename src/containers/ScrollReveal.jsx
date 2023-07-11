import { duration } from "@mui/material";
import { useRef, useEffect } from "react";
import scrollReveal from "scrollreveal";

const ScrollReveal = ({ children, style, delay = 500, duration=900, easing= "cubic-bezier(0.5, 0, 0, 1)",   scale= 1 }) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      scrollReveal().reveal(sectionRef.current, {
        reset: false,
        delay: delay,
        duration: duration,
        easing:easing,
        scale:scale,
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
