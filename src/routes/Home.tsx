import * as CUR from "@chakra-ui/react";

interface Props {}

const Home = ({}: Props) => {
  return (
    <>
      <CUR.Grid
        id="HomeGrid"
        templateAreas={{
          base: `"Map MapList" `,
          md: `"Map MapList" `,
          lg: `"Map MapList" `,
        }}
        h={"100%"}
      >
        <CUR.GridItem area={"Map"} bg={"yellow.500"} border={"2px"}>
          <CUR.Box w={"100%"} h={"100%"} borderColor={"black"}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14054.5927325246!2d-82.68073525!3d28.278682850000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1693097872792!5m2!1sen!2sus"
              width={"100%"}
              height={"100%"}
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </CUR.Box>
        </CUR.GridItem>
        <CUR.GridItem area={"MapList"} w={"50%"}>
          <CUR.Square bg={"orange.500"}></CUR.Square>
        </CUR.GridItem>
      </CUR.Grid>
    </>
  );
};

export default Home;
