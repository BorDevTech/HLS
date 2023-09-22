import * as CUR from "@chakra-ui/react";
import ListingTable from "../components/MapListings/ListingTable";

interface Props {}
const center = { lng: 0, lat: 0, zoom: 0 };
const Home = ({}: Props) => {
  return (
    <CUR.Grid
      templateAreas={{
        base: `"Map""MapList"`,
        md: `"Map MapList"`,
        lg: `"Map MapList"`,
      }}
      templateColumns={{ md: `repeat(4,1fr)`, lg: `repeat(10,1fr)` }}
      templateRows={{
        base: `repeat(8,1fr)`,
        md: `repeat(1,1fr)`,
        lg: `repeat(10,1fr)`,
      }}
      h={"100%"}
      w={"100%"}
    >
      <CUR.GridItem
        as={"iframe"}
        src={`https://api.mapbox.com/styles/v1/devell-robinson-bordevtech/clmiwn21e03xn01phcbpcfanz.html?title=false&access_token=${
          import.meta.env.VITE_MAPTOKEN
        }&zoomwheel=true#${center.zoom !== 0 ? center.zoom : 9.43}/${
          center.lng !== 0 ? center.lng : 27.929
        }/${center.lat !== 0 ? center.lat : -82.2824}`}
        area={"Map"}
        borderColor={"purple.600"}
        border={"1px"}
        colSpan={{ lg: 7 }}
        rowSpan={{ base: 4, lg: 10 }}
        title="Property Map"
        width={"100%"}
        height={"100%"}
      />
      <CUR.GridItem
        area={"MapList"}
        border={"1px"}
        colSpan={{ lg: 3 }}
        rowSpan={{ base: 4, lg: 10 }}
        borderColor={"yellow.600"}
      >
        <ListingTable />
      </CUR.GridItem>
    </CUR.Grid>
  );
};

export default Home;
