import { Link } from "react-router-dom";
import redwoods from './Video/Redwoods.mp4';

const HomePage = () => {
  return (
        <>
          <video className="vid-bg" autoPlay loop muted>
            <source src={redwoods} type='video/mp4' />
          </video>
            <div className="content">
              <h2>
                Welcome to <span>WanderList</span></h2>
              <p>Plan Your Next National Park Adventure</p>
              <Link to="/parks">
                <button
                  value=""
                  type="button"
                  className="home-btn btn-lg"
                >
                  Get Started
                </button>
              </Link>
            </div>
        </>
  );
};

export default HomePage;
