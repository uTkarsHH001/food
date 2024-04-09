import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import Home2 from "./Home2";
export default function Home() {
  return (
    <>
      <Navbar />
      <section>
        <div className="row">
          <div className="child-left">
            <h2>
              Have a <br />
              Nice Meal
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut br
              cupiditate ratione quibusdam deleniti nisi, saepe doloribus
              eligendi impedit recusandae quos iure maiores laborum. Esse, quas!
              Esse voluptatum officia atque quam! Lorem ipsum dolor sit amet
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
              quas? Natus earum ut amet dolorem sequi eos voluptatibus dolores,
              hic fugiat non unde velit, ratione illo iure vel quaerat adipisci!
            </p>
            <button className="comic-button">Read More!</button>
          </div>
          <div className="child-right">
            <img className="img-fluid" src="i2.jpg" alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="card">
          <div className="card1">
            <div className="cards">
              <img src="3in1.jpg" alt="" />
              <h2>Duls Ate</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="cards">
              <img src="3in1.jpg" alt="" />
              <h2>Duls Ate</h2> <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="cards">
              <img src="3in1.jpg" alt="" />
              <h2>Duls Ate</h2> <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="cards">
              <img src="3in1.jpg" alt="" />
              <h2>Duls Ate</h2> <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </section>{" "}
      <Home2 />
    </>
  );
}
