import { Routes, Route } from "react-router-dom";
import * as pages from "./routes";
import * as dashboard from "./routes/Dashboard";
import * as CUR from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useRef, useState } from "react";

function App() {
  const setRouteArea = () => {
    const navSizeRef = useRef<HTMLElement | null>(null);
    const [routeHeight, setRouteHeight] = useState(0);
    const WindowHeight = window.innerHeight;
    //@ts-ignore
    const result = WindowHeight - navSizeRef.current?.clientHeight;

    useEffect(() => {
      setTimeout(() => {
        setRouteHeight(result);
      }, 1 * 10);
      addEventListener("resize", setRouteArea);
      return () => {
        removeEventListener("resize", setRouteArea);
      };
    }, []);
    return { navSizeRef, routeHeight, result };
  };
  const AppGrid = setRouteArea();
  const mapGrid = AppGrid.routeHeight;
  const routes = [
    {
      path: "/",
      element: <pages.Home mapSpace={AppGrid.result} />,
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
      element: <pages.Home mapSpace={mapGrid} />,
    },
    {
      path: "/view/dashboard/*/listing/:id",
      element: <pages.Home mapSpace={mapGrid} />,
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
      element: <pages.Home mapSpace={mapGrid} />,
    },
    {
      path: "/view/dashboard/sell/guides/faq/addListing",
      element: <pages.Home mapSpace={mapGrid} />,
    },
    {
      path: "/view/dashboard/sell",
      element: <dashboard.Sell />,
    },
    {
      path: "/view/dashboard/listing/add",
      element: <pages.Home mapSpace={mapGrid} />,
    },
  ];
  return (
    <CUR.Grid
      templateAreas={`"Navbar" "Main"`}
      templateColumns={`repeat(1,1fr)`}
      templateRows={`repeat(2)`}
    >
      <CUR.GridItem area={"Navbar"}>
        <CUR.Box as="nav" ref={AppGrid.navSizeRef}>
          <Navbar />
        </CUR.Box>
      </CUR.GridItem>
      <CUR.GridItem area={"Main"} h={AppGrid.routeHeight}>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Routes>
      </CUR.GridItem>
    </CUR.Grid>
  );
}

export default App;
