// import React from "react";
import * as CUR from "@chakra-ui/react";

interface Props {
  // listWidth: number;
}

const ListControls = ({}: // listWidth
Props) => {
  return (
    <>
      <CUR.VStack w={"100%"}>
        <CUR.HStack height={20} border={"4px"} borderColor={"black"}>
          <CUR.Box>Price</CUR.Box>
          <CUR.Box>Price</CUR.Box>
          <CUR.Box>Price</CUR.Box>
          <CUR.Box>Price</CUR.Box>
          <CUR.Box>Price</CUR.Box>
        </CUR.HStack>
      </CUR.VStack>
    </>
  );
};

export default ListControls;
