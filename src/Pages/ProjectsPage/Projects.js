import React from "react";
import Card from "../../Components/Card";
import Layout from "../../Layout/Layout";
import "./Projects.css";
import { gsap } from "gsap";
import Transition from "../../Components/Transition.js";
function Projects() {
  let tl = new gsap.timeline();
  return (
    <Layout>
      <Transition timeline={tl}/>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <div>
          <Card
            title="AMAZIN APP"
            description="AMAZIN is an e-commerce app as my project. I made this e-commerce website for solo entrepreneurs tosell their items. The web application has user registration and authentication functionality, paymentintegration, adding, deleting, updating, searching, and filtering products and categories. Users can also addor delete items from the cart."
            imageUrl="https://tse3.mm.bing.net/th?id=OIP.7b8x7ZiVTYQtMT6TXYl9MQHaFQ&pid=Api&P=0&h=180"
            projectLink="https://github.com/jhalakbhandari/Amazin"
          />
        </div>
        <div>
          <Card
            title="Example Card"
            description="This is an example card component."
            imageUrl="https://tse3.mm.bing.net/th?id=OIP.7b8x7ZiVTYQtMT6TXYl9MQHaFQ&pid=Api&P=0&h=180"
          />
        </div>
        <div>
          <Card
            title="Example Card"
            description="This is an example card component."
            imageUrl="https://tse3.mm.bing.net/th?id=OIP.7b8x7ZiVTYQtMT6TXYl9MQHaFQ&pid=Api&P=0&h=180"
          />
        </div>
        <div>
          <Card
            title="Example Card"
            description="This is an example card component."
            imageUrl="https://tse3.mm.bing.net/th?id=OIP.7b8x7ZiVTYQtMT6TXYl9MQHaFQ&pid=Api&P=0&h=180"
          />
        </div>
        <div>
          <Card
            title="Example Card"
            description="This is an example card component."
            imageUrl="https://tse3.mm.bing.net/th?id=OIP.7b8x7ZiVTYQtMT6TXYl9MQHaFQ&pid=Api&P=0&h=180"
          />
        </div>
      </div>
    </Layout>
  );
}
export default Projects;
