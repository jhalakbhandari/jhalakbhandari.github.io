import React from "react";
import { Pace, WindupChildren, Linebreaker } from "windups";
import "./About.css";
import { easings } from "react-animation";
const About = () => {
  console.log(window.innerWidth);
  const style = {
    animation: ` pop-in ${easings.easeInExpo} 500ms forwards`,
  };
  return (
    <div className="about ">
      <h1 style={style}>JHALAK BHANDARI</h1>

      <p>
        <WindupChildren>
          <Pace getPace={(char) => (char === " " ? 600 : 40)}>
            {"React developer | Student"}
          </Pace>
        </WindupChildren>
      </p>

      <div>
        <Linebreaker fontStyle={"72px 'Menlo', monospace"} width={3000}>
          <WindupChildren>
            <Pace getPace={(char) => (char === " " ? 400 : 40)}>
              You will always find me learning, teaching, and yearning to learn
              a new skill. I love reading books and singing!
            </Pace>
          </WindupChildren>
        </Linebreaker>
      </div>
    </div>
  );
};

export default About;
