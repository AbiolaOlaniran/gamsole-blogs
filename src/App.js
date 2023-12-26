import React, { useState } from "react";
import * as Icon from "react-feather";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Game from "./pages/Game";
import BlogDetails from "./pages/BlogDetails";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";

function App() {
  const [lightMode, setLightMode] = useState(false);

  lightMode
    ? document.body.classList.add("light")
    : document.body.classList.remove("light");

  const handleMode = () => {
    if (!lightMode) {
      setLightMode(true);
      document.body.classList.add("light");
    } else {
      setLightMode(false);
      document.body.classList.remove("light");
    }
  };

  return (
    <BrowserRouter>
      <div className="light-mode">
        <span className="icon">
          <Icon.Sun />
        </span>
        <button
          className={
            lightMode ? "light-mode-switch active" : "light-mode-switch"
          }
          onClick={() => handleMode()}
        ></button>
      </div>
      <Routes>
        <Route path="/" index element={<Home lightMode={lightMode} />} />
        <Route path="game" element={<Game />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:id/:title" element={<BlogDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
