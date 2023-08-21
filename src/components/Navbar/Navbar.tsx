import * as Nav from "./NavbarIndex";
import * as CUR from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <CUR.Grid
        templateRows={"repeat(5,1fr)"}
        templateAreas={{
          base: `"Brand Search Navigation Buttons"`,
          md: `"Brand Search Navigation Buttons"`,
          lg: `"Brand Search Navigation Buttons"`,
        }}
      >
        <Nav.Brand />
        <Nav.SearchBar />
        <Nav.Navigation />
        <Nav.Menu />
      </CUR.Grid>
    </>
  );
};

export default Navbar;
