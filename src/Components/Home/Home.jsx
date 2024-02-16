import React, { Fragment } from "react";
import imageHome from "../../../public/images/fox.png";
import "./Home.css";
import superHero from "../../../public/images/superhero.png";
import superKid from "../../../public/images/superkid.png";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="container">
        <div className="text-container">
          <div className="text1">
            Come join
            <span className="greentext"> the fun</span> and discover your
            <span className="greentext"> rights!</span>
            <br /> Become a <span className="greentext">hero</span>
            for fairness as you{" "}
            <span className="greentext"> learn and play.</span>
            <br /> Let's make the world a
            <span className="greentext"> fairer </span> for everyone!
          </div>{" "}
          <div className="text2">
            Welcome to GoMyKid! Get ready to embark on an adventure filled with
            excitement and learning! With our awesome games designed just for
            you, you can explore, play, and learn new things—all in one amazing
            place! So, what are you waiting for? Let the fun begin!
          </div>
          <button
            onClick={() => navigate("/Register")}
            className="button"
            style={{ verticalAlign: "middle" }}
          >
            <span>Play </span>
          </button>
        </div>
        <img className="image" src={imageHome} alt="Image" />
      </div>

      <div className="container2" style={{marginBottom:"100px"}}>
        <div className="hello">
          <p>CERTIFICATES</p>
        </div>
        <div className="bello">
          <img src={superHero} alt="Image 1" />
          <img src={superKid} alt="Image 2" />
          <img src={superHero} alt="Image 3" />
          <img src={superKid} alt="Image 4" />
        </div>
      </div>

      {/* Videos & width */}
      <Stack direction={"row"} width={"100%"} px={30} spacing={30}>
        <Stack width={"50%"} height={"800"}>
          <iframe
            width="100%"
            height="420"
            src="../../../public/IntroVideo.mp4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </Stack>
        <Stack width={"50%"}>
          {/* text */}
          <img src="../../../public/IntroVideo.mp4" alt="" />
          {/* Demande Pdf Button */}
          <Stack className="ParentFromDemande" direction={"column"}>
            <img
              src="../../../public/TxtDemade.png"
              style={{ width: "93%" }}
              alt="Children's Rights"
            />
            <a
              href="https://drive.google.com/file/d/1wv6QpTAP4sBXbm9tz3VMLTwzyGNsMXik/view?usp=sharing"
              style={{ textDecoration: "none", color: "black" }}
              className="button"
            >
              Dowload
            </a>
          </Stack>
        </Stack>
      </Stack>
    </Fragment>
  );
};

export default Home;
