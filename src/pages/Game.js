import axios from "axios";
import FsLightbox from "fslightbox-react";
import React, { Suspense, useEffect, useState, useRef } from "react";
import * as Icon from "react-feather";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";
import gameVid from "../Game1.webm";
import gameVid2 from "../Game2.webm";
import gameVid3 from "../Game4.webm";

import VideoComponent from "../components/VideoComponent";

function Game() {
  useEffect(() => {
    let list = document.querySelector(".slider .list");
    let items = document.querySelectorAll(".slider .list .item");
    let dots = document.querySelectorAll(".slider .dots li");
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");

    let active = 0;
    let lengthItems = items.length - 1;

    next.onclick = function () {
      if (active + 1 > lengthItems) {
        active = 0;
      } else {
        active = active + 1;
      }
      reloadSlider();
    };

    prev.onclick = function () {
      if (active - 1 < 0) {
        active = lengthItems;
      } else {
        active = active - 1;
      }
      reloadSlider();
    };

    let refreshSlider = setInterval(() => {
      next.click();
    }, 15000);

    function reloadSlider() {
      let checkLeft = items[active].offsetLeft;
      list.style.left = -checkLeft + "px";

      let lastActiveDot = document.querySelector(".slider .dots li.active");
      if (lastActiveDot) {
        lastActiveDot.classList.remove("active");
      }

      dots[active].classList.add("active");
      clearInterval(refreshSlider);
      refreshSlider = setInterval(() => {
        next.click();
      }, 15000);
    }

    dots.forEach((li, key) => {
      li.addEventListener("click", () => {
        active = key;
        reloadSlider();
      });
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Gamsole - Upcoming Game</title>
        <meta
          name="description"
          content="Chester React Personal Portfolio Template About Page"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="slider">
          <div className="list">
            <div className="item">
              <VideoComponent className={"slider--video"} src={gameVid3} />
            </div>
            <div className="item">
              <VideoComponent className={"slider--video"} src={gameVid2} />
            </div>
            <div className="item">
              <VideoComponent className={"slider--video"} src={gameVid} />
            </div>
          </div>
          <div className="buttons">
            <button id="prev">{"<"}</button>
            <button id="next">{">"}</button>
          </div>

          {/* dots */}
          <ul className="dots">
            <li className="active"></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </Suspense>
    </Layout>
  );
}

export default Game;