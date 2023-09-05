import { Routes, Route } from "react-router-dom";
import * as pages from "./routes";
import * as dashboard from "./routes/Dashboard";
import * as CUR from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect, useRef } from "react";

function App() {
  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      height: innerHeight,
      width: innerWidth,
    });

    useEffect(() => {
      const handleWindowResizeChange = () => {
        setWindowSize({
          ...windowSize,
          height: innerHeight,
          width: innerWidth,
        });
      };
      window.addEventListener("resize", handleWindowResizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowResizeChange);
      };
    }, []);
    return windowSize;
  };

  const windowSize = useWindowSize();

  const navRef = useRef<HTMLElement | null>(null);
  const ScreenDisplay = () => {
    const [displaySize, setDisplaySize] = useState({
      navbar: 0,
      routeDisplay: 0,
    });
    useEffect(() => {
      const handleElementSizing = () => {
        setDisplaySize({
          ...displaySize,
          //@ts-ignore
          navbar: navRef.current?.clientHeight,
        });
      };

      window.addEventListener("load", handleElementSizing);
      return () => {
        window.removeEventListener("load", handleElementSizing);
      };
    }, []);
    return displaySize;
  };

  const displaySize = ScreenDisplay();
  // useEffect(() => {
  //   console.log(displaySize.routeDisplay);
  //   setDisplaySize({
  //     ...displaySize,
  //     navbar: navRef.current?.clientHeight,
  //   });
  // }, [displaySize.routeDisplay]);

  console.log(displaySize.navbar + " navRef");
  const routes = [
    {
      path: "/",
      element: <pages.Home displayHeight={displaySize.routeDisplay} />,
    },
    {
      path: "/register",
      element: <pages.Register />,
    },
    {
      path: "/view/dashboard/rent",
      element: <dashboard.Rent />,
    },
    {
      path: "/view/dashboard/buy",
      element: <dashboard.Buy />,
    },
    {
      path: "/view/dashboard/guides/faq",
      element: <pages.Home displayHeight={displaySize.routeDisplay} />,
    },
    {
      path: "/view/dashboard/*/listing/:id",
      element: <pages.Home displayHeight={displaySize.routeDisplay} />,
    },
    {
      path: "/view/dashboard/profile/create",
      element: <pages.Profile />,
    },
    {
      path: "/login",
      element: <pages.Login />,
    },
    {
      path: "/view/dashboard/profile",
      element: <pages.Profile />,
    },
    {
      path: "/view/dashboard/profile/edit",
      element: <pages.Profile />,
    },
    {
      path: "/view/dashboard/profile/favorites",
      element: <pages.Home displayHeight={displaySize.routeDisplay} />,
    },
    {
      path: "/view/dashboard/sell/guides/faq/addListing",
      element: <pages.Home displayHeight={displaySize.routeDisplay} />,
    },
    {
      path: "/view/dashboard/sell",
      element: <dashboard.Sell />,
    },
    {
      path: "/view/dashboard/listing/add",
      element: <pages.Home displayHeight={displaySize.routeDisplay} />,
    },
  ];
  return (
    <>
      <CUR.Grid
        templateAreas={{
          base: `"Navbar" "Main"`,
          md: `"Navbar" "Main"`,
          lg: `"Navbar" "Main"`,
        }}
      >
        <CUR.GridItem area={"Navbar"}>
          <CUR.Box as="nav" ref={navRef}>
            <Navbar />
          </CUR.Box>
        </CUR.GridItem>
        <CUR.GridItem
          area={"Main"}
          h={`${windowSize.height - displaySize.navbar}px`}
        >
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
