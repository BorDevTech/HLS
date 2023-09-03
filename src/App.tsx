import { Routes, Route } from "react-router-dom";
import * as pages from "./routes";
import * as dashboard from "./routes/Dashboard";
import * as CUR from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import { useRef, useState, useEffect } from "react";

function App() {
  const routes = [
    /* 
    // NonRegistered-User Routes
    // Usage: All users can access these channels regardless of registry 
    */
    { path: "/", element: <pages.Home /> },
    { path: "/register", element: <pages.Register /> },
    { path: "/view/dashboard/rent", element: <dashboard.Rent /> },
    { path: "/view/dashboard/buy", element: <dashboard.Buy /> },
    { path: "/view/dashboard/guides/faq", element: <pages.Home /> },
    /*
    //End of NonRegistered-User Routes  
    */
    /*
    //Listing Routes
    //signifies the channel of rent or buy used by the users to view listings
    */
    { path: "/view/dashboard/*/listing/:id", element: <pages.Home /> },
    /*
    //End of Listing Views
    //Registered User Routes
    */
    { path: "/view/dashboard/profile/create", element: <pages.Profile /> },
    { path: "/login", element: <pages.Login /> },
    { path: "/view/dashboard/profile", element: <pages.Profile /> },
    { path: "/view/dashboard/profile/edit", element: <pages.Profile /> },
    { path: "/view/dashboard/profile/favorites", element: <pages.Home /> },
    // {/* End of Registered User Routes */}
    // {/* Seller Routes */}
    {
      path: "/view/dashboard/sell/guides/faq/addListing",
      element: <pages.Home />,
    },
    { path: "/view/dashboard/sell", element: <dashboard.Sell /> },
    { path: "/view/dashboard/listing/add", element: <pages.Home /> },
    // {/* End of Seller Routes */}
  ];
  const [navbarSize, setNavbarSize] = useState(0);
  const navSize = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    setNavbarSize(navSize.current?.clientHeight);
  });

  return (
    <>
      <CUR.Grid
        templateAreas={{
          base: `"Navbar" "Main"`,
          md: `"Navbar" "Main"`,
          lg: `"Navbar" "Main"`,
        }}
      >
        <CUR.GridItem area={"Navbar"} ref={navSize}>
          <nav>
            <Navbar />
          </nav>
        </CUR.GridItem>
        <CUR.GridItem area={"Main"} h={window.innerHeight - navbarSize}>
          <Routes>
            {routes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
          </Routes>
        </CUR.GridItem>
      </CUR.Grid>
    </>
  );
}

export default App;
