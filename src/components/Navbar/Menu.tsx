import { Link } from "react-router-dom";
import * as CUR from "@chakra-ui/react";
import * as CUI from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";

const Menu = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <CUR.Menu>
        <CUR.MenuButton as={CUR.Button} rightIcon={<CUI.HamburgerIcon />}>
          Menu
        </CUR.MenuButton>
        <CUR.MenuList>
          <CUR.MenuGroup title="Account">
            <CUR.MenuItem icon={<CUI.AddIcon />}>Profile</CUR.MenuItem>
            <CUR.MenuItem icon={<CUI.AddIcon />}>Payments</CUR.MenuItem>
            <CUR.MenuItem icon={<CUI.AddIcon />}>Searches</CUR.MenuItem>
            <CUR.MenuItem icon={<CUI.AddIcon />}>Favorites</CUR.MenuItem>
          </CUR.MenuGroup>
          <CUR.MenuGroup title="Help">
            <CUR.MenuItem>
              <Link to="/guides/faq">F.A.Q.'s</Link>
            </CUR.MenuItem>
          </CUR.MenuGroup>

          <CUR.MenuItem>
            <Link to="/guides/faq/addListing">Add Listing</Link>
          </CUR.MenuItem>
          <CUR.MenuItem>Delete</CUR.MenuItem>
          <CUR.MenuItem>Attend a Workshop</CUR.MenuItem>

          <CUR.MenuGroup title="Actions">
            <CUR.MenuDivider />
            <CUR.HStack
              justifyContent={"space-evenly"}
              divider={
                <>
                  <CUR.Center height="50px">
                    <CUR.Divider orientation="vertical" />
                  </CUR.Center>
                </>
              }
            >
              <CUR.Box>
                <Link to="/login">
                  <CUR.VStack>
                    <CUI.UnlockIcon />
                    <CUR.Text>Login</CUR.Text>
                  </CUR.VStack>
                </Link>
              </CUR.Box>
              <CUR.Box>
                <Link to="/profile">
                  <CUR.VStack>
                    <CUI.UnlockIcon />
                    <CUR.Text>Profile</CUR.Text>
                  </CUR.VStack>
                </Link>
              </CUR.Box>
              {colorMode === "light" ? (
                <button type="button" onClick={toggleColorMode}>
                  <CUR.VStack>
                    <CUI.MoonIcon />
                    <CUR.Text>dark mode</CUR.Text>
                  </CUR.VStack>
                </button>
              ) : (
                <button type="button" onClick={toggleColorMode}>
                  <CUR.VStack>
                    <CUI.SunIcon />
                    <CUR.Text>light mode</CUR.Text>
                  </CUR.VStack>
                </button>
              )}
            </CUR.HStack>
          </CUR.MenuGroup>
        </CUR.MenuList>
      </CUR.Menu>
    </>
  );
};

export default Menu;
