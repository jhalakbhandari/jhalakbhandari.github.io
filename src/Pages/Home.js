import About from "./AboutPage/About";
import Images from "./AboutPage/Images";
import { gsap, Power3 } from "gsap";
import Layout from "../Layout/Layout";
import Transition from "../Components/Transition.js";
function Home() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();


  return (
    <Layout>
      <Transition timeline={tl} />
      <div>
        <About />
        <Images timeline={tl} ease={ease} />
      </div>
    </Layout>
  );
}

export default Home;
