import { Link } from "react-router";
import "./Homepage.css"

const Homepage = () => {
  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital"/>
            <div className="left">
        <h1>JAP IA</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          excepturi harum saepe incidunt, officia culpa vero sit optio natus
          dolore, quasi, ab accusamus dolorum dolor?
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>  
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
