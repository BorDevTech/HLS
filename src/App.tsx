import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/register" element={<Home />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/profile/favorites" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
