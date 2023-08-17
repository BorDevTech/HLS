import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home, Login, Profile, Register } from "./routes";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <h1>HLS</h1>
            </Link>
          </li>
          <li>
            <input placeholder={"search"} />
          </li>
          <li>
            <Link to="/profile/favorites">
              <button>Favorites</button>
            </Link>
          </li>
          <li>
            <Link to="/guides/faq">
              <button>Help</button>
            </Link>
          </li>
          <li>
            <Link to="/guides/faq">
              <button>Add Listing</button>
            </Link>
          </li>

          <li>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <button>Profile</button>
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/favorites" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
