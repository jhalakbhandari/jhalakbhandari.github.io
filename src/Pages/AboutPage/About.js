import React from "react";
import { Pace, WindupChildren, Linebreaker } from "windups";
import "./About.css";
import { easings } from "react-animation";
import { useAuth } from "../../context/auth";
const About = () => {
 
  console.log(window.innerWidth);
  const style = {
    animation: ` pop-in ${easings.easeInExpo} 500ms forwards`,
  };
  return (
    <div className="lg:m-56 sm:m-12 md:m-12">
      <h1 style={style}>JHALAK BHANDARI</h1>

      <p>
        <WindupChildren>
          <Pace getPace={(char) => (char === " " ? 600 : 40)}>
            {"MERN FULLSTACK WEB DEVELOPER"}
          </Pace>
        </WindupChildren>
      </p>

      <div className="mt-1">
        <Linebreaker fontStyle={"72px 'Menlo', monospace"} width={3000}>
          <WindupChildren>
            <Pace getPace={(char) => (char === " " ? 400 : 40)}>
              <span className="text-green bg-yellow-300 font-bold p-1 ">
                Lem'me code your website!
              </span>
            </Pace>
          </WindupChildren>
        </Linebreaker>
      </div>
      <div className="lg:hidden xl:hidden">
        You will always find me learning, teaching, and yearning to learn a new
        skill. I love reading books and singing!
      </div>
    </div>
  );
};

export default About;
