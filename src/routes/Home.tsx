import * as CUR from "@chakra-ui/react";
// import ListControls from "./../components/MapListControls/ListControls";
// import AppleMaps from "./../components/AppleMap/AppleMaps";
import MapListing from "./../components/MapListings/MapListing";

interface Props {
  mapSpace: number;
}
const Home = ({ mapSpace }: Props) => {
  console.log(mapSpace);
  return (
    <>
      <CUR.Grid
        templateAreas={{
          base: `"Map""MapList"`,
          md: `"Map MapList"`,
          lg: `"Map MapList"`,
        }}
        templateColumns={{
          base: `repeat(1fr)`,
          md: `repeat(2, 1fr)`,
          lg: `repeat(2, 1fr)`,
        }}
        templateRows={{
          base: `repeat(2fr)`,
          md: `repeat(1)`,
          lg: `repeat(1)`,
        }}
      >
        <CUR.GridItem
          area={"Map"}
          borderColor={"purple.600"}
          border={"1px"}
          w={{ base: innerWidth, md: innerWidth * 0.75, lg: innerWidth * 0.75 }}
          h={{ base: mapSpace * 0.5, md: mapSpace, lg: mapSpace }}
        >
          <CUR.Box
            as="iframe"
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14054.5927325246!2d-82.68073525!3d28.278682850000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1693097872792!5m2!1sen!2sus"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            h={10}
            height={"100%"}
            width={"100%"}
          />
        </CUR.GridItem>
        <CUR.GridItem
          area={"MapList"}
          border={"1px"}
          borderColor={"yellow.600"}
          h={{ base: mapSpace * 0.5, md: mapSpace, lg: mapSpace }}
        >
          <MapListing />
        </CUR.GridItem>
      </CUR.Grid>
    </>
  );
};

export default Home;
