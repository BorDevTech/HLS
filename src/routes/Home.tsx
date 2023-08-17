import React from "react";
import { useColorMode } from "@chakra-ui/react";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "dark" : "light"}
      </button>
      <br />
      Welcome
      <br />
      Footer
      <br />
    </>
  );
};

export default Home;
