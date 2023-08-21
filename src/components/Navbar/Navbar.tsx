import * as Nav from "./NavbarIndex";
import * as CUR from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <CUR.HStack
        justifyContent={{
          base: "space-evenly",
          md: "space-between",
          lg: "space-between",
        }}
        padding={2}
      >
        <CUR.Show above="base">
          <Nav.Brand />

          <CUR.Show above="lg">
            <Nav.SearchBar />
          </CUR.Show>
          <CUR.Show above="md">
            <Nav.Navigation />
          </CUR.Show>

          <CUR.Show below="md">
            <Nav.Menu />
          </CUR.Show>
        </CUR.Show>
      </CUR.HStack>
    </>
  );
};

export default Navbar;
