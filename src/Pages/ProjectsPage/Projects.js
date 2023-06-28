import React from "react";
import Card from "../../Components/Card";
import Layout from "../../Layout/Layout";
import "./Projects.css";
function Projects() {
  return (
    <Layout>
      <div className="projects">
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
