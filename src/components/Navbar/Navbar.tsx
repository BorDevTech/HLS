import * as Nav from "./NavbarIndex";
import * as CUR from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <CUR.HStack
        justifyContent={"space-between"}
        p={{ base: 2, md: 3, lg: 4 }}
      >
        <CUR.Show above="base">
          <Nav.Brand />

          <CUR.Show above="md">
            <CUR.Center>
              <CUR.Show above="lg">
                <Nav.SearchBar />
              </CUR.Show>
            </CUR.Center>
            <Nav.Navigation />
          </CUR.Show>
          <CUR.Show below="md">
            <Nav.Menu />
          </CUR.Show>
        </CUR.Show>
      </CUR.HStack>
      <CUR.Divider />
    </>
  );
};

export default Navbar;
