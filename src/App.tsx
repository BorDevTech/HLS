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
      >
        <CUR.GridItem area={"Navbar"}>
          <nav>
            <Navbar />
          </nav>
        </CUR.GridItem>
        <CUR.GridItem area={"Main"}>
          <Routes>
            {/* NonRegistered-User Routes 
            Usage: All users can access these channels regardless of registry */}
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/view/dashboard/rent" element={<Home />} />
            <Route path="/view/dashboard/buy" element={<Home />} />
            <Route path="/view/dashboard/guides/faq" element={<Home />} />
            {/* End of NonRegistered-User Routes */}
            {/*  Listing Routes
             *: signifies the channel of rent or buy used by the users to view listings*/}
            <Route path="/view/dashboard/*/listing/:id" element={<Home />} />
            {/* End of Listing Views */}
            {/* Registered User Routes */}
            <Route
              path="/view/dashboard/profile/create"
              element={<Profile />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/view/dashboard/profile" element={<Profile />} />
            <Route path="/view/dashboard/profile/edit" element={<Profile />} />
            <Route
              path="/view/dashboard/profile/favorites"
              element={<Home />}
            />
            {/* End of Registered User Routes */}
            {/* Seller Routes */}
            <Route
              path="/view/dashboard/sell/guides/faq/addListing"
              element={<Home />}
            />
            <Route path="/view/dashboard/sell" element={<Home />} />
            <Route path="/view/dashboard/listing/add" element={<Home />} />
            {/* End of Seller Routes */}
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
