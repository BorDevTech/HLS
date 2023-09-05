import * as CUR from "@chakra-ui/react";
// import ListControls from "./../components/MapListControls/ListControls";
import React, { FC } from "react";
// import AppleMaps from "./../components/AppleMap/AppleMaps";

interface Props {
  displayHeight: number;
}

const Home: FC<Props> = ({}) => {
  const routeWidth = window.innerWidth;
  const [listIndex, setListIndex] = React.useState<number>(-1);

  return (
    <>
      <CUR.Grid
        templateAreas={{
          base: `"Map" "MapList" `,
          md: `"Map MapList" `,
          lg: `"Map MapList" `,
        }}
        h={{ base: "75%", md: "100%" }}
      >
        <CUR.Show above={"base"}>
          <CUR.GridItem
            area={"Map"}
            w={{ base: routeWidth, md: routeWidth * 0.75 }}
            borderColor={"orange"}
            border={"1px"}
          >
            <CUR.Box
              as="iframe"
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14054.5927325246!2d-82.68073525!3d28.278682850000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1693097872792!5m2!1sen!2sus"
              h={"100%"}
              w={"100%"}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </CUR.GridItem>
        </CUR.Show>
        <CUR.Show above="base">
          <CUR.GridItem
            area={"MapList"}
            h={"100%"}
            w={"100%"}
            // ref={listSize}
          >
            {/* <ListControls
            // listWidth={mapListSize}
            /> */}

            <CUR.Center>
              <CUR.HStack>
                <CUR.Box>dwad</CUR.Box>
                <CUR.Box>dwad</CUR.Box>
                <CUR.Box>dwad</CUR.Box>
                <CUR.Box>dwad</CUR.Box>
              </CUR.HStack>
            </CUR.Center>
            <CUR.Accordion defaultIndex={-1} index={listIndex}>
              <CUR.AccordionItem>
                <CUR.Card>
                  <h2>
                    <CUR.AccordionButton onClick={() => setListIndex(0)}>
                      <CUR.Box flex="1" textAlign="center">
                        <CUR.Center>
                          <CUR.HStack>
                            <span>Price : $100,000</span>
                          </CUR.HStack>
                        </CUR.Center>
                      </CUR.Box>
                      <CUR.AccordionIcon />
                    </CUR.AccordionButton>
                  </h2>
                </CUR.Card>
                <CUR.AccordionPanel pb={4}>
                  <CUR.VStack>
                    <CUR.Center>
                      <CUR.Skeleton h={350} w={350} />
                    </CUR.Center>
                    <CUR.VStack>
                      <CUR.HStack>
                        <CUR.Button>Prev</CUR.Button>
                        <CUR.Button>Next</CUR.Button>
                      </CUR.HStack>
                      <CUR.Button>Details</CUR.Button>
                    </CUR.VStack>
                  </CUR.VStack>
                </CUR.AccordionPanel>
              </CUR.AccordionItem>
              <CUR.AccordionItem>
                <CUR.Card>
                  <h2>
                    <CUR.AccordionButton onClick={() => setListIndex(1)}>
                      <CUR.Box flex="1" textAlign="center">
                        <CUR.Center>
                          <CUR.HStack>
                            <CUR.Skeleton h="20px" w="20px" />
                            <span>Price : $120,000</span>
                          </CUR.HStack>
                        </CUR.Center>
                      </CUR.Box>
                      <CUR.AccordionIcon />
                    </CUR.AccordionButton>
                  </h2>
                </CUR.Card>
                <CUR.AccordionPanel pb={4}>
                  <CUR.VStack>
                    <CUR.Center>
                      <CUR.Skeleton h={350} w="350px" />
                    </CUR.Center>
                    <CUR.VStack>
                      <CUR.HStack>
                        <CUR.Button>Prev</CUR.Button>
                        <CUR.Button>Next</CUR.Button>
                      </CUR.HStack>
                      <CUR.Button>Details</CUR.Button>
                    </CUR.VStack>
                  </CUR.VStack>
                </CUR.AccordionPanel>
              </CUR.AccordionItem>
              <CUR.AccordionItem>
                <CUR.Card>
                  <h2>
                    <CUR.AccordionButton onClick={() => setListIndex(2)}>
                      <CUR.Box flex="1" textAlign="center">
                        <CUR.Center>
                          <CUR.HStack>
                            <CUR.Skeleton h="20px" w="20px" />
                            <span>Price : $130,000</span>
                          </CUR.HStack>
                        </CUR.Center>
                      </CUR.Box>
                      <CUR.AccordionIcon />
                    </CUR.AccordionButton>
                  </h2>
                </CUR.Card>
                <CUR.AccordionPanel pb={4}>
                  <CUR.VStack>
                    <CUR.Center>
                      <CUR.Skeleton h={350} w="350px" />
                    </CUR.Center>
                    <CUR.VStack>
                      <CUR.HStack>
                        <CUR.Button>Prev</CUR.Button>
                        <CUR.Button>Next</CUR.Button>
                      </CUR.HStack>
                      <CUR.Button>Details</CUR.Button>
                    </CUR.VStack>
                  </CUR.VStack>
                </CUR.AccordionPanel>
              </CUR.AccordionItem>
              <CUR.AccordionItem>
                <CUR.Card>
                  <h2>
                    <CUR.AccordionButton onClick={() => setListIndex(3)}>
                      <CUR.Box flex="1" textAlign="center">
                        <CUR.Center>
                          <CUR.HStack>
                            <CUR.Skeleton h="20px" w="20px" />
                            <span>Price : $140,000</span>
                          </CUR.HStack>
                        </CUR.Center>
                      </CUR.Box>
                      <CUR.AccordionIcon />
                    </CUR.AccordionButton>
                  </h2>
                </CUR.Card>
                <CUR.AccordionPanel pb={4}>
                  <CUR.VStack>
                    <CUR.Button onClick={() => setListIndex(listIndex - 1)}>
                      UP
                    </CUR.Button>

                    <CUR.Center>
                      <CUR.Skeleton h={350} w="350px" />
                    </CUR.Center>
                    <CUR.VStack>
                      <CUR.HStack>
                        <CUR.Button>Prev</CUR.Button>
                        <CUR.Button>Details</CUR.Button>
                        <CUR.Button>Next</CUR.Button>
                      </CUR.HStack>
                      <CUR.Button>DOWn</CUR.Button>
                    </CUR.VStack>
                  </CUR.VStack>
                </CUR.AccordionPanel>
              </CUR.AccordionItem>
            </CUR.Accordion>
          </CUR.GridItem>
        </CUR.Show>
      </CUR.Grid>
    </>
  );
};

export default Home;
