import * as CUR from "@chakra-ui/react";
import ListingTable from "../components/MapListings/ListingTable";

interface Props {}
const Home = ({}: Props) => {
  return (
    <CUR.Grid
      templateAreas={{
        base: `"Map""MapList"`,
        md: `"Map MapList"`,
        lg: `"Map MapList"`,
      }}
      templateColumns={{ md: `repeat(4,1fr)`, lg: `repeat(10,1fr)` }}
      templateRows={{ md: `repeat(1,1fr)`, lg: `repeat(10,1fr)` }}
      h={"100%"}
      w={"100%"}
    >
      <CUR.GridItem
        as={"iframe"}
        src={`https://api.mapbox.com/styles/v1/devell-robinson-bordevtech/clmiwn21e03xn01phcbpcfanz.html?title=false&access_token=${
          import.meta.env.VITE_MAPTOKEN
        }&zoomwheel=true#9.43/27.929/-82.2824`}
        area={"Map"}
        borderColor={"purple.600"}
        border={"1px"}
        colSpan={{ lg: 7 }}
        rowSpan={{ lg: 10 }}
        title="Property Map"
        width={"100%"}
        height={"100%"}
      />
      <CUR.GridItem
        area={"MapList"}
        border={"1px"}
        colSpan={{ lg: 3 }}
        rowSpan={{ lg: 10 }}
        borderColor={"yellow.600"}
      >
        <ListingTable />
      </CUR.GridItem>
    </CUR.Grid>
  );
};

export default Home;
