import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Particle from "../components/Particle";
import Socialicons from "../components/Socialicons";
import Spinner from "../components/Spinner";
import vid1 from '../Game1.webm'
import VideoComponent from "../components/VideoComponent";

function Home({ lightMode }) {
  const [information, setInformation] = useState("");

  
  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Home - Gamsole development blog</title>
        <meta
          name="description"
          content="Gamsole development blog"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-home-area vid--container mi-padding-section">
          <Particle lightMode={lightMode} />
            <VideoComponent className={"video"} src={vid1} />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-12">
                <div className="mi-home-content">
                  <h1>
                    Hello, Welcome to {" "}
                    <span className="color-theme">{information.name} </span>
                    blog
                  </h1>
                  <p>{information.aboutContent}</p>
                  <p>I've been developing games for several years with many games on the windows platform. Now developing for the Steam platform and will be sharing my knowledge to help you on your own game development journey.</p>
                  <p>If you have any questions, post them here or in the YouTube comments and I'll do my best to help.</p>
                  <Socialicons bordered />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default Home;
