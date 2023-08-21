import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Profile, Register } from "./routes";
import * as CUR from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <CUR.Grid
        templateAreas={{
          base: `"Navbar" "Main" "Footer"`,
          md: `"Navbar" "Main" "Footer"`,
          lg: `"Navbar" "Main" "Footer"`,
        }}
        minH={window.innerHeight}
        minW={window.innerWidth}
      >
        <CUR.GridItem area={"Navbar"}>
          <nav>
            <Navbar />
          </nav>
        </CUR.GridItem>
        <CUR.GridItem area={"Main"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/favorites" element={<Home />} />
            <Route path="/guides/faq" element={<Home />} />
            <Route path="/guides/faq/addListing" element={<Home />} />
          </Routes>
        </CUR.GridItem>
        <CUR.GridItem area={"Footer"}>
          <p>footer</p>
        </CUR.GridItem>
      </CUR.Grid>
    </>
  );
}

export default App;
