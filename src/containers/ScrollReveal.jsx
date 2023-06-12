import { useRef, useEffect } from "react";
import scrollReveal from "scrollreveal";

const ScrollReveal = ({ children, style, delay = 500 }) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      scrollReveal().reveal(sectionRef.current, {
        reset: false,
        delay: delay
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
