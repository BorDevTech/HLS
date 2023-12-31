import { Link } from "react-router-dom";
import * as CUR from "@chakra-ui/react";

const Brand = () => {
  var AppName = "HLS" as const;

  return (
    <Link to="/">
      <CUR.Box>
        <CUR.Heading>{AppName}</CUR.Heading>
      </CUR.Box>
    </Link>
  );
};

export default Brand;
