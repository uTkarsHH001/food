import React from "react";
import Carousel from "./Carousel.jsx";
import "./Imagecarousel.css";

export default function Cariusel() {
  let box = document.querySelector(".product-container");
  const previous = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  const next = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };
  return (
    <>
      <div className="product-carousel">
        <button className="pre-btn" onClick={previous}>
          <p>&lt;</p>
        </button>
        <button className="next-btn" onClick={next}>
          <p>&gt;</p>
        </button>
        <div className="product-container">
          <Carousel cardno="1" />
          <Carousel cardno="2" />
          <Carousel cardno="3" />
          <Carousel cardno="4" />
          <Carousel cardno="5" />
          <Carousel cardno="6" />
          <Carousel cardno="7" />
          <Carousel cardno="8" />
          <Carousel cardno="9" />
          <Carousel cardno="10" />
          <Carousel cardno="11" />
          <Carousel cardno="12" />
        </div>
      </div>
    </>
  );
}
