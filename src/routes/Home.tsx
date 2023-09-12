import * as CUR from "@chakra-ui/react";

import ListingTable from "../components/MapListings/ListingTable";

interface Props {}
const Home = ({}: Props) => {
  return (
    <>
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
          area={"Map"}
          borderColor={"purple.600"}
          border={"1px"}
          colSpan={{ lg: 7 }}
          rowSpan={{ lg: 10 }}
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14054.5927325246!2d-82.68073525!3d28.278682850000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1693097872792!5m2!1sen!2sus"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
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
    </>
  );
};

export default Home;
