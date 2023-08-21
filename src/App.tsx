import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home, Login, Profile, Register } from "./routes";
import * as CUR from "@chakra-ui/react";
import * as CUI from "@chakra-ui/icons";

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
            <CUR.Grid
              templateRows={"repeat(5,1fr)"}
              templateAreas={{
                base: `"Brand Buttons"`,
                md: `"Brand Navigation"`,
                lg: `"Brand Search Navigation Buttons"`,
              }}
            >
              <CUR.GridItem area={"Brand"}>
                <Link to="/">HLS</Link>
              </CUR.GridItem>
              <CUR.Show above={"lg"}>
                <CUR.GridItem area={"Search"}>
                  <input placeholder={"search"} />
                </CUR.GridItem>
                <CUR.Show above={"md"}>
                  <CUR.GridItem area={"Navigation"}>
                    <Link to="/guides/faq">Help</Link>
                    <Link to="/guides/faq/addListing">Add Listing</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/profile">Profile</Link>
                  </CUR.GridItem>
                </CUR.Show>
              </CUR.Show>
              <CUR.GridItem area={"Buttons"}>
                <Link to="/profile/favorites">
                  <CUR.VStack>
                    <CUI.StarIcon />
                    <CUR.Text>Favorites</CUR.Text>
                  </CUR.VStack>
                </Link>
              </CUR.GridItem>
            </CUR.Grid>
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
