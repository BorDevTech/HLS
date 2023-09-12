import { Routes, Route } from "react-router-dom";
import * as pages from "./routes";
import * as dashboard from "./routes/Dashboard";
import * as CUR from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const routes = [
    {
      path: "/",
      element: <pages.Home />,
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
      element: <pages.Home />,
    },
    {
      path: "/view/dashboard/*/listing/:id",
      element: <pages.Home />,
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
      element: <pages.Home />,
    },
    {
      path: "/view/dashboard/sell/guides/faq/addListing",
      element: <pages.Home />,
    },
    {
      path: "/view/dashboard/sell",
      element: <dashboard.Sell />,
    },
    {
      path: "/view/dashboard/listing/add",
      element: <pages.Home />,
    },
  ];
  return (
    <CUR.Grid
      templateAreas={`"Navbar" "Main"`}
      h={innerHeight}
      w={innerWidth}
      gap={0}
      templateRows={`repeat(13,1fr)`}
    >
      <CUR.GridItem
        as={Navbar}
        area={"Navbar"}
        rowSpan={1}
        borderColor={"blue.300"}
      />
      <CUR.GridItem area={"Main"} rowSpan={12}>
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
