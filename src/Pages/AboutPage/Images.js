import React, { useRef, useEffect } from "react";
import "./Images.css";
import { gsap } from "gsap";
import image1 from "../../img/image1.png";
import image2 from "../../img/image2.png";
import image3 from "../../img/image3.png";
function Images() {
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);
  useEffect(() => {
    const [img1, img2, img3] = [
      imgRef1.current,
      imgRef2.current,
      imgRef3.current,
    ];
    gsap.from(img1, { opacity: 0, x: -100, duration: 1 });
    gsap.from(img2, { opacity: 0, x: 100, duration: 1, delay: 0.5 });
    gsap.from(img3, { opacity: 0, y: 100, duration: 1, delay: 1 });
  }, []);
  return (
    <div>
      <div className="images ">
        <div className="box1" src={image1} ref={imgRef1}></div>
        <div className="box2" src={image2} ref={imgRef2}></div>
        <div className="box3" src={image3} ref={imgRef3}></div>
      </div>
    </div>
  );
}
export default Images;
