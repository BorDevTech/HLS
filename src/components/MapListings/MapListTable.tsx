import * as CUR from "@chakra-ui/react";

import MapListItem from "./MapListItem";
import {
  useRef,
  useState,
  // useEffect, ,
} from "react";
/* <CUR.Accordion>
            <CUR.AccordionItem>
              <h2>
                <CUR.AccordionButton>
                  <CUR.Box as="span" flex="1" pt={2} textAlign="center">
                    Advanced Filters
                  </CUR.Box>
                  <CUR.AccordionIcon />
                </CUR.AccordionButton>
              </h2>
              <CUR.AccordionPanel pb={4} bg={"blue.300"}>
                <CUR.AspectRatio ratio={1}>
                  <CUR.Text>
                    MIN to MAX Price MIN to MAX Beds /Bath MIN to MAX Sqft MIN
                    to MAX Range(distance away from host location) MIN to MAX
                    Year
                  </CUR.Text>
                </CUR.AspectRatio>
              </CUR.AccordionPanel>
            </CUR.AccordionItem>
            <CUR.AccordionItem>
              <h2>
                <CUR.AccordionButton>
                  <CUR.Box as="span" flex="1" pt={2} textAlign="center">
                    Properties
                  </CUR.Box>
                  <CUR.AccordionIcon />
                </CUR.AccordionButton>
              </h2>
              <CUR.AccordionPanel pb={4} bg={"blue.300"}>
                <CUR.AspectRatio ratio={1}>
                  <CUR.Text>
                    MIN to MAX Price MIN to MAX Beds /Bath MIN to MAX Sqft MIN
                    to MAX Range(distance away from host location) MIN to MAX
                    Year
                  </CUR.Text>
                </CUR.AspectRatio>
              </CUR.AccordionPanel>
            </CUR.AccordionItem>
          </CUR.Accordion>*/
const MapListTable = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  // const sectionSize = sectionRef.current?.clientHeight;

  const itemSizeRef = useRef<HTMLButtonElement | null>(null);
  const itemsToCount = (refHeight: number, items: number) => {
    let itemsCounted = refHeight * items;
    return itemsCounted;
  };
  const [panelSize, setPanelSize] = useState({
    I1: 0,
    I2: 0,
  });

  return (
    <>
      <CUR.Accordion ref={sectionRef} h={"100%"} w={"100%"} allowToggle>
        <CUR.Card
          as={CUR.AccordionItem}
          borderRadius={0}
          borderBottom={1}
          borderTop={1}
          borderStyle={"solid"}
        >
          <h2>
            <CUR.AccordionButton
              ref={itemSizeRef}
              onClick={() => {
                setPanelSize({
                  ...panelSize,
                  I1:
                    //@ts-ignore
                    sectionRef.current?.clientHeight -
                    //@ts-ignore
                    itemsToCount(itemSizeRef.current?.clientHeight, 2.02),
                  I2: 0,
                });
              }}
            >
              <CUR.Box as="span" flex="1" pt={2} textAlign="center">
                Properties
              </CUR.Box>
              <CUR.AccordionIcon />
            </CUR.AccordionButton>
          </h2>
          <CUR.AccordionPanel h={panelSize.I1} pb={4}>
            <MapListItem />
          </CUR.AccordionPanel>
        </CUR.Card>
      </CUR.Accordion>
    </>
  );
};

export default MapListTable;
