import React, { Fragment } from "react";
import imageHome from "../../../public/images/fox.png";
import './Home.css';
import superHero from '../../../public/images/superhero.png'
import superKid from '../../../public/images/superkid.png'
import { useNavigate } from "react-router-dom";

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
              Welcome to GoMyKid! Get ready to embark on an adventure filled
              with excitement and learning! With our awesome games designed just
              for you, you can explore, play, and learn new things—all in one
              amazing place! So, what are you waiting for? Let the fun begin!
            </div>
            <button
              onClick={()=>navigate("/Register")}
              className="button"
              style={{ verticalAlign: "middle" }}
            >
              <span>Play </span>
            </button>
          </div>
          <img className="image" src={imageHome} alt="Image" />
        </div>

        <div className="container2">
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
      </Fragment>
    );
  
  }

export default Home;
