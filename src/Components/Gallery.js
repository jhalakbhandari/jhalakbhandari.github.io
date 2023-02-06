import React from "react";
import "./Gallery.css";
import book from "../Images/th.jpg";

function Gallery() {
  return (
    <div className="gallery">
      <div className="card">
        <div>
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.g59g8RPPj-b8tdeEQ8ZF9gHaLu&pid=Api&P=0"
            alt="book"
          />
        </div>
        <div className="bookname">
          <p>Who moved my cheese?</p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
