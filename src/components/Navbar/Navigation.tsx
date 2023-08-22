import { Link } from "react-router-dom";
import * as CUR from "@chakra-ui/react";

const Navigation = () => {
  return (
    <>
      <CUR.Box>
        <CUR.HStack>
          <Link to="/buy">Buy</Link>
          <Link to="/dashboard/listing/add">Sell</Link>
          <Link to="/profile/favorites">Favorites</Link>
          <Link to="/rent">Rent</Link>

          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
        </CUR.HStack>
      </CUR.Box>
    </>
  );
};

export default Navigation;
