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
      >
        <CUR.GridItem
          area={"Map"}
          bg={"yellow.500"}
          h={window.innerHeight - 76}
        >
          <CUR.Box w={"100%"}>
            <CUR.Box h={"100%"}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14054.5927325246!2d-82.68073525!3d28.278682850000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1693097872792!5m2!1sen!2sus"
                width={"100%"}
                height={window.innerHeight - 76}
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </CUR.Box>
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
