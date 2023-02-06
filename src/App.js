import "./App.css";
import Breaker from "./Components/Breaker";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import "./Jhalak_Bhandari.pdf";
import { Button } from "@mui/material";
import { saveAs } from "file-saver";
function App() {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/15v0cQvWVLoEmmbm9cQFPcUtaFOvH5ywm/view?usp=sharing",
      "jhalak_bhandari.pdf"
    );
  };
  return (
    <div>
      <div className="banner">
        <p>I CODE</p>
      </div>

      <div className="box">
        {/* ABOUT */}
        <div className="about">
          {/*INTRO */}
          <div className="label">
            Are you looking for someone to spice up your website?
          </div>
          {/*NAME AND DESCRIPTION */}
          <div className="name">
            <p>
              <h5>
                Hi! I am <h2>JHALAK BHANDARI (@_JHALAKBHANDARI_)</h2>
              </h5>
            </p>

            <p>
              I am a Frontend developer located in Delhi,India. I am skilled in
              Reactjs and Redux and currently learning Nodejs.<br/> Diligent, problem
              solver, independent employee with a hunger to learn. Reading books
              and blogs, writing poetry, learning new skills.
            </p>

            <p>
              Interested in learning the entire fullstack developement and
              working on ambitious projects with positive people.
            </p>
          </div>
        </div>
        <Breaker />
        {/* LOOKING FOR */}
        <div>
          <div className="skills">
            <h4>👩‍💻Skills and Experience</h4>
            <p>
              I started learning coding in 2020. The main area of my expertise
              are HTML, CSS, JS, Reactjs, Redux, Typescript, NextJS, TailwindCSS
              and translating designs into code.<br/> I have built numerous small
              projects during my udemy course. I had coded the frontend of SPIE
              Website of my college alongwith my collegemates.
            </p>
          </div>
        </div>
        <Breaker />
        {/* LOOKING FOR */}
        <div>
          <div className="search">
            <h4>👩‍💻Looking For....</h4>
            <p>
              I am looking for an environment of like-minded people where i can
              learn, grow and contribute as well. I can use all my abilities to
              their fullest.
            </p>
          </div>
        </div>
        <Breaker />
        {/* PROJECTS */}
        <div className="projects">
          <ul>
            <h6>
              <li>
                <Button>✨My BLOG</Button>(soon....)
              </li>
              <li>
                <Button href="https://github.com/jhalakbhandari">
                  🏗️Projects
                </Button>
              </li>
              <li>
                <Button onClick={saveFile}>📧Resume</Button>
              </li>
            </h6>
          </ul>
        </div>
        <Breaker />
        {/* EXTRA */}

        <div className="read">
          <div>
            <h4>Currently reading....</h4>
          </div>
          <div>
            <Gallery />
          </div>
        </div>
        <Breaker />
        {/*currently working on */}
        {/* <div className="work">
          <div>
            <h4>Currently working on....</h4>
          </div>
          <div>
            <Gallery />
          </div>
        </div>*/}
      </div>
      <Footer />
    </div>
  );
}

export default App;
