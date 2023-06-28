import React from "react";
import J2 from "../img/j2.jpg";
import J3 from "../img/J3.jpg";
import classes from "./Gallery.module.css";
function Gallery() {
  let data = [
    {
      id: 1,
      imgSrc: J3,
    },
    {
      id: 2,
      imgSrc: J2,
    },
    {
      id: 3,
      imgSrc: J3,
    },
    {
      id: 4,
      imgSrc: J2,
    },
    {
      id: 5,
      imgSrc: J3,
    },
    {
      id: 6,
      imgSrc: J2,
    },
    {
      id: 7,
      imgSrc: J3,
    },
    {
      id: 8,
      imgSrc: J2,
    },
  ];

  return (
    <>
      <div className={classes.gallery}>
        {data.map((item, index) => {
          return (
            <div className={classes.pics} key={index}>
              <img src={item.imgSrc} style={{ width: "100%" }} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
