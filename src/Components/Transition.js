import React from "react";
import { useRef, useEffect } from "react";
import "./Transition.css";

import { Power4 } from "gsap";
const Transition = ({ timeline }) => {
  const trans = useRef(null);
  useEffect(() => {
    timeline.to(trans.current, {
      duration: 2,
      x: 2600,
      ease: Power4.easeOut,
    });
  });
  return (
    <div>
      <div className="transition-effect" ref={trans}></div>
    </div>
  );
};

export default Transition;
