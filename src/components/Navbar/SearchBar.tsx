import * as CUR from "@chakra-ui/react";
import * as CUI from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";

const SearchBar = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <CUR.InputGroup>
        <CUR.Input placeholder={"search"} />
        <CUR.InputRightElement>
          <CUR.IconButton
            colorScheme="blackAlpha.50"
            aria-label="Search database"
            icon={
              <CUI.SearchIcon
                color={colorMode === "light" ? "#000000" : "#FFFFFF"}
              />
            }
          />
        </CUR.InputRightElement>
      </CUR.InputGroup>
    </>
  );
};

export default SearchBar;
