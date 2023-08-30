import { Link } from "react-router-dom";
import * as CUR from "@chakra-ui/react";
import * as CUI from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <CUR.Box>
        <CUR.HStack>
          <CUR.Show above={"lg"}>
            {colorMode === "light" ? (
              <CUR.Box aria-label="dark mode toggle" onClick={toggleColorMode}>
                <CUR.HStack>
                  <CUR.Text>dark</CUR.Text>
                  <CUI.MoonIcon />
                </CUR.HStack>
              </CUR.Box>
            ) : (
              <CUR.Box aria-label="light mode toggle" onClick={toggleColorMode}>
                <CUR.HStack>
                  <CUI.SunIcon />
                  <CUR.Text>light</CUR.Text>
                </CUR.HStack>
              </CUR.Box>
            )}
            <CUR.Spacer w={24} />
          </CUR.Show>

          <Link to="/view/dashboard/buy">Buy</Link>
          <Link to="/view/dashboard/sell">Sell</Link>
          <Link to="/profile/favorites">Favorites</Link>
          <Link to="/view/dashboard/rent">Rent</Link>
          <Link to="/view/dashboard/profile">Profile</Link>
          <Link to="/login">Login</Link>
        </CUR.HStack>
      </CUR.Box>
    </>
  );
};

export default Navigation;
