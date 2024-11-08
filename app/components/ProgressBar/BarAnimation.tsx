import React, { ReactNode } from 'react'
import { useInView } from "react-intersection-observer";

type BarAnimation = {
  children: ReactNode;
};

const BarAnimation: React.FC<BarAnimation> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} >{children}</div>
  );
}

export default BarAnimation
