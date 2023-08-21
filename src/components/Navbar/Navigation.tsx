import { Link } from "react-router-dom";
import * as CUR from "@chakra-ui/react";

const Navigation = () => {
  return (
    <>
      <CUR.HStack>
        <Link to="/guides/faq">Buy</Link>
        <Link to="/guides/faq">Sell</Link>
        <Link to="/guides/faq">Favorites</Link>
        <Link to="/guides/faq">Rent</Link>

        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </CUR.HStack>
    </>
  );
};

export default Navigation;
