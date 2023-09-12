import * as CUR from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { MapListItem } from ".";
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
  const sectionSize = sectionRef.current?.clientHeight;

  const itemSizeRef = useRef<HTMLButtonElement | null>(null);
  const itemsToCount = (refHeight: number, items: number) => {
    let itemsCounted = refHeight * items;
    return itemsCounted;
  };
  const [panelSize, setPanelSize] = useState({
    I1: 0,
    I2: 0,
  });

  console.log(sectionRef.current?.clientHeight);
  console.log(itemsToCount(itemSizeRef.current?.clientHeight, 3));
  console.log(panelSize.I1);
  console.log(panelSize.I2);

  return (
    <>
      <CUR.Accordion ref={sectionRef} h={"100%"} w={"100%"} allowToggle>
        <CUR.Card as={CUR.AccordionItem} borderRadius={0}>
          <h2>
            <CUR.AccordionButton
              ref={itemSizeRef}
              onClick={() => {
                setPanelSize({
                  ...panelSize,
                  I1:
                    sectionSize -
                    itemsToCount(itemSizeRef.current?.clientHeight, 2.02),
                  I2: 0,
                });
              }}
            >
              <CUR.Box as="span" flex="1" pt={2} textAlign="center">
                Advanced Filters
              </CUR.Box>
              <CUR.AccordionIcon />
            </CUR.AccordionButton>
          </h2>
          <CUR.AccordionPanel h={panelSize.I1} pb={4}>
            <CUR.Card>
              <CUR.FormControl as="fieldset">
                <CUR.FormLabel as="legend" textAlign={"center"}>
                  Set Price
                </CUR.FormLabel>
                <CUR.VStack spacing="24px">
                  <CUR.RangeSlider
                    aria-label={["min", "max"]}
                    defaultValue={[0, 100]}
                  >
                    <CUR.RangeSliderTrack>
                      <CUR.RangeSliderFilledTrack />
                    </CUR.RangeSliderTrack>
                    <CUR.RangeSliderThumb index={0} />
                    <CUR.RangeSliderThumb index={1} />
                  </CUR.RangeSlider>
                </CUR.VStack>
              </CUR.FormControl>
              <CUR.FormControl as="fieldset">
                <CUR.FormLabel as="legend" textAlign={"center"}>
                  Beds & Baths
                </CUR.FormLabel>
                <CUR.VStack spacing="24px">
                  <CUR.RangeSlider
                    aria-label={["min", "max"]}
                    defaultValue={[10, 30]}
                  >
                    <CUR.RangeSliderTrack>
                      <CUR.RangeSliderFilledTrack />
                    </CUR.RangeSliderTrack>
                    <CUR.RangeSliderThumb index={0} />
                    <CUR.RangeSliderThumb index={1} />
                  </CUR.RangeSlider>
                </CUR.VStack>
              </CUR.FormControl>
              <CUR.FormControl as="fieldset">
                <CUR.FormLabel as="legend" textAlign={"center"}>
                  Sqft & lot size
                </CUR.FormLabel>
                <CUR.VStack spacing="24px">
                  <CUR.RangeSlider
                    aria-label={["min", "max"]}
                    defaultValue={[10, 30]}
                  >
                    <CUR.RangeSliderTrack>
                      <CUR.RangeSliderFilledTrack />
                    </CUR.RangeSliderTrack>
                    <CUR.RangeSliderThumb index={0} />
                    <CUR.RangeSliderThumb index={1} />
                  </CUR.RangeSlider>
                </CUR.VStack>
              </CUR.FormControl>
              <CUR.FormControl as="fieldset">
                <CUR.FormLabel as="legend" textAlign={"center"}>
                  Choose Range
                </CUR.FormLabel>
                <CUR.VStack spacing="24px">
                  <CUR.RangeSlider
                    aria-label={["min", "max"]}
                    defaultValue={[10, 30]}
                  >
                    <CUR.RangeSliderTrack>
                      <CUR.RangeSliderFilledTrack />
                    </CUR.RangeSliderTrack>
                    <CUR.RangeSliderThumb index={0} />
                    <CUR.RangeSliderThumb index={1} />
                  </CUR.RangeSlider>
                </CUR.VStack>
              </CUR.FormControl>
              <CUR.FormControl as="fieldset">
                <CUR.FormLabel as="legend" textAlign={"center"}>
                  Year Built
                </CUR.FormLabel>
                <CUR.VStack spacing="24px">
                  <CUR.RangeSlider
                    aria-label={["min", "max"]}
                    defaultValue={[10, 30]}
                  >
                    <CUR.RangeSliderTrack>
                      <CUR.RangeSliderFilledTrack />
                    </CUR.RangeSliderTrack>
                    <CUR.RangeSliderThumb index={0} />
                    <CUR.RangeSliderThumb index={1} />
                  </CUR.RangeSlider>
                </CUR.VStack>
              </CUR.FormControl>
            </CUR.Card>
            MIN to MAX Price MIN to MAX Beds /Bath MIN to MAX Sqft MIN to MAX
            Range(distance away from host location) MIN to MAX Year
          </CUR.AccordionPanel>
        </CUR.Card>
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
