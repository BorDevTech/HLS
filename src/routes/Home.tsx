import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">HLS</Link>
          </li>
          <li>
            <input placeholder={"search"} />
          </li>
          <li>
            <button>
              <Link to="/profile/favorites">Favorites</Link>
            </button>
          </li>
          <li>
            <button>Share</button>
          </li>
          <li>
            <button>
              <Link to="/login">Login</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/">Profile</Link>
            </button>
          </li>
        </ul>
      </nav>
      <br />
      Welcome
      <br />
      Footer
      <br />
    </>
  );
};

export default Home;
