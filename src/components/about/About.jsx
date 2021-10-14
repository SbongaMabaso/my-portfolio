import "./about.css";
import Award from "../../img/award.png";
import Bgimg from "../../img/bg.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Bgimg}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          "There is always a to do it better - find it!".
          - Thomas Edison
        </p>
        <p className="a-desc">
          I'm a computer engineer by profession. There are many fields in computer engineering, 
          therefore, my field of interest is web development, Machine Learning and AI, and IoT.
          I'm co-founder of a startup company <a href="ownculture.africa">ownculture</a> founded in 2021.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Achievment Awards</h4>
            <p className="a-award-desc">
              Golden Key International Honour Society, 2016.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
