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
          Full Stack Software Dev Engineer with background knowledge of C#, .NET Core, Entity Framework and SQL Server.
          React and Angular JavaScript framework. Proficient with hardware projects such as IoT and Embedded Systems.
          Strong professional with a BSc willing to be an asset for an organization.
          Please visit my github repository <a href="https://github.com/SbongaMabaso/">SbongaMabaso</a> to explore some of my projects.
          <br />
          I also write blogs about different topic in programming, visit <a href="https://semoblog.great-site.net">semoblog</a> for more. 
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
