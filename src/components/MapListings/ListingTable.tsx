import { useEffect, useRef, useState } from "react";
import * as Map from "./index";
import * as CUR from "@chakra-ui/react";
import * as CUI from "@chakra-ui/icons";

const ListingTable = () => {
  //Needed states
  /*sort status, price, address(name), bedrooms, sqft,*/
  const [quickSort, setQuickSort] = useState({
    status: -1,
    price: -1,
    beds: -1,
    sqft: -1,
    range: -1,
    year: -1,
  });

  //Sort & Advanced Filters panel calc
  const gridRef = useRef<HTMLDivElement | null>(null);
  const panel1Ref = useRef<HTMLElement | null>(null);

  const [homeCostRange, setHomeCostRange] = useState({
    minCost: 1000,
    maxCost: 100000,
    slider1pos: 0,
    slider2pos: 0,
    input1val: 0,
    input2val: 0,
  });
  useEffect(() => {
    setHomeCostRange({
      ...homeCostRange,
      slider1pos: homeCostRange.minCost,
      slider2pos: homeCostRange.maxCost,
      input1val: homeCostRange.minCost,
      input2val: homeCostRange.maxCost,
    });
  }, []);
  /*  list date,bedroom-bathroom amount, min-max price, keyword*/
  //Quick Features
  /*  Amenities, Views, age restrictions, stories, lot size */

  return (
    <CUR.Grid
      ref={gridRef}
      w={"100%"}
      h={"100%"}
      templateRows={{ base: `repeat(8,1fr)`, lg: `repeat(1,1fr)` }}
      templateColumns={{ lg: `repeat(1,1fr)` }}
    >
      <CUR.GridItem rowSpan={{ lg: 1 }} colSpan={{ lg: 1 }}>
        <CUR.Accordion borderRadius={0} as={CUR.Card} allowToggle>
          <CUR.AccordionItem as={CUR.Card} borderRadius={1} ref={panel1Ref}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <CUR.AccordionButton>
                    <CUR.Box as="span" flex="1" pt={2} textAlign="center">
                      Quick Sort
                    </CUR.Box>
                    <CUR.AccordionIcon />
                  </CUR.AccordionButton>
                </h2>
                <CUR.AccordionPanel pb={4}>
                  <CUR.Grid
                    templateColumns={{
                      base: `repeat(3,1fr)`,
                      lg: `repeat(5,1fr)`,
                    }}
                    templateRows={{ lg: `repeat(1,1fr)` }}
                    columnGap={isExpanded ? 2 : 2}
                  >
                    <CUR.GridItem
                      colSpan={{ lg: 1 }}
                      rowSpan={{ base: 1, lg: 1 }}
                    >
                      {quickSort.status === 1 ? (
                        <CUR.Button
                          rightIcon={<CUI.TriangleUpIcon />}
                          onClick={() =>
                            setQuickSort({ ...quickSort, status: 0 })
                          }
                        >
                          Status
                        </CUR.Button>
                      ) : quickSort.status === 0 ? (
                        <CUR.Button
                          rightIcon={<CUI.TriangleDownIcon />}
                          onClick={() =>
                            setQuickSort({ ...quickSort, status: 1 })
                          }
                        >
                          Status
                        </CUR.Button>
                      ) : (
                        <CUR.Button
                          rightIcon={<CUI.ArrowUpDownIcon />}
                          onClick={() =>
                            setQuickSort({ ...quickSort, status: 1 })
                          }
                        >
                          Status
                        </CUR.Button>
                      )}
                    </CUR.GridItem>
                    <CUR.GridItem
                      colSpan={{ lg: 1 }}
                      rowSpan={{ base: 1, lg: 1 }}
                    >
                      {quickSort.price === 1 ? (
                        <CUR.Button
                          rightIcon={<CUI.TriangleUpIcon />}
                          onClick={() =>
                            setQuickSort({ ...quickSort, price: 0 })
                          }
                        >
                          Price
                        </CUR.Button>
                      ) : quickSort.price === 0 ? (
                        <CUR.Button
                          rightIcon={<CUI.TriangleDownIcon />}
                          onClick={() =>
                            setQuickSort({ ...quickSort, price: 1 })
                          }
                        >
                          Price
                        </CUR.Button>
                      ) : (
                        <CUR.Button
                          rightIcon={<CUI.ArrowUpDownIcon />}
                          onClick={() =>
                            setQuickSort({ ...quickSort, price: 1 })
                          }
                        >
                          Price
                        </CUR.Button>
                      )}
                    </CUR.GridItem>
                    <CUR.GridItem
                      colSpan={{ lg: 1 }}
                      rowSpan={{ base: 1, lg: 1 }}
                    >
                      {quickSort.beds === 1 ? (
                        <CUR.Button
                          rightIcon={<CUI.TriangleUpIcon />}
                          onClick={() =>
                            setQuickSort({ ...quickSort, beds: 0 })
                          }
                        >
                          Beds
                        </CUR.Button>
                      ) : quickSort.beds === 0 ? (
                        <CUR.Button
                          rightIcon={<CUI.TriangleDownIcon />}
                          onClick={() =>
                            setQuickSort({ ...quickSort, beds: 1 })
                          }
                        >
                          Beds
                        </CUR.Button>
                      ) : (
                        <CUR.Button
                          rightIcon={<CUI.ArrowUpDownIcon />}
                          onClick={() =>
                            setQuickSort({ ...quickSort, beds: 1 })
                          }
                        >
                          Beds
                        </CUR.Button>
                      )}
                    </CUR.GridItem>
                    <CUR.GridItem
                      colSpan={{ lg: 1 }}
                      rowSpan={{ base: 1, lg: 1 }}
                    >
                      {quickSort.sqft === 1 ? (
                        <CUR.Button
                          rightIcon={<CUI.TriangleUpIcon />}
                          onClick={() =>
                            setQuickSort({ ...quickSort, sqft: 0 })
                          }
                        >
                          Sqft
                        </CUR.Button>
                      ) : quickSort.sqft === 0 ? (
                        <CUR.Button
                          rightIcon={<CUI.TriangleDownIcon />}
                          onClick={() =>
                            setQuickSort({ ...quickSort, sqft: 1 })
                          }
                        >
                          Sqft
                        </CUR.Button>
                      ) : (
                        <CUR.Button
                          rightIcon={<CUI.ArrowUpDownIcon />}
                          onClick={() =>
                            setQuickSort({ ...quickSort, sqft: 1 })
                          }
                        >
                          Sqft
                        </CUR.Button>
                      )}
                    </CUR.GridItem>
                    <CUR.GridItem
                      colSpan={{ lg: 1 }}
                      rowSpan={{ base: 1, lg: 1 }}
                    >
                      {quickSort.range === 1 ? (
                        <CUR.Button
                          rightIcon={<CUI.TriangleUpIcon />}
                          onClick={() =>
                            setQuickSort({ ...quickSort, range: 0 })
                          }
                        >
                          Range
                        </CUR.Button>
                      ) : quickSort.range === 0 ? (
                        <CUR.Button
                          rightIcon={<CUI.TriangleDownIcon />}
                          onClick={() =>
                            setQuickSort({ ...quickSort, range: 1 })
                          }
                        >
                          Range
                        </CUR.Button>
                      ) : (
                        <CUR.Button
                          rightIcon={<CUI.ArrowUpDownIcon />}
                          onClick={() =>
                            setQuickSort({ ...quickSort, range: 1 })
                          }
                        >
                          Range
                        </CUR.Button>
                      )}
                    </CUR.GridItem>
                    <CUR.GridItem
                      colSpan={{ lg: 1 }}
                      rowSpan={{ base: 1, lg: 1 }}
                    >
                      {quickSort.year === 1 ? (
                        <CUR.Button
                          rightIcon={<CUI.TriangleUpIcon />}
                          onClick={() =>
                            setQuickSort({ ...quickSort, year: 0 })
                          }
                        >
                          Year
                        </CUR.Button>
                      ) : quickSort.range === 0 ? (
                        <CUR.Button
                          rightIcon={<CUI.TriangleDownIcon />}
                          onClick={() =>
                            setQuickSort({ ...quickSort, year: 1 })
                          }
                        >
                          Year
                        </CUR.Button>
                      ) : (
                        <CUR.Button
                          rightIcon={<CUI.ArrowUpDownIcon />}
                          onClick={() =>
                            setQuickSort({ ...quickSort, year: 1 })
                          }
                        >
                          Year
                        </CUR.Button>
                      )}
                    </CUR.GridItem>
                  </CUR.Grid>
                </CUR.AccordionPanel>
              </>
            )}
          </CUR.AccordionItem>
          <CUR.AccordionItem as={CUR.Card} borderRadius={1}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <CUR.AccordionButton>
                    <CUR.Box as="span" flex="1" pt="2" textAlign="center">
                      Advanced Filters
                    </CUR.Box>
                    <CUR.AccordionIcon />
                  </CUR.AccordionButton>
                </h2>
                <CUR.AccordionPanel
                  h={
                    isExpanded
                      ? //@ts-ignore
                        gridRef.current?.clientHeight -
                        //@ts-ignore
                        panel1Ref.current?.clientHeight * 3.1
                      : panel1Ref.current?.clientHeight
                  }
                  pb={4}
                >
                  <CUR.Card>
                    {/*  */}
                    <form>
                      <CUR.Grid
                        templateRows={`repeat(2,1fr)`}
                        templateColumns={`repeat(3,1fr)`}
                        as={CUR.Card}
                        bg={"blackAlpha.400"}
                        p={{ lg: 0.5 }}
                        m={2}
                      >
                        <CUR.GridItem>
                          <CUR.FormControl as="fieldset">
                            <CUR.FormLabel as="legend" textAlign={"center"}>
                              Set Min Price
                            </CUR.FormLabel>
                            <CUR.NumberInput
                              min={homeCostRange.minCost}
                              max={homeCostRange.input2val}
                              step={1000}
                              defaultValue={homeCostRange.minCost}
                              value={homeCostRange.input1val}
                              onChange={(e) => {
                                parseInt(e) < homeCostRange.minCost
                                  ? setHomeCostRange({
                                      ...homeCostRange,
                                      input1val: homeCostRange.minCost,
                                      slider1pos: 1,
                                    })
                                  : setHomeCostRange({
                                      ...homeCostRange,
                                      input1val: parseInt(e),
                                      slider1pos: parseInt(e) / 1000,
                                    });
                              }}
                            >
                              <CUR.NumberInputField textAlign={"center"} />
                            </CUR.NumberInput>
                          </CUR.FormControl>
                        </CUR.GridItem>
                        <CUR.GridItem as={CUR.Spacer} w={"100%"} h={"100%"} />
                        <CUR.GridItem>
                          <CUR.FormControl as="fieldset">
                            <CUR.FormLabel as="legend" textAlign={"center"}>
                              Set Max Price
                            </CUR.FormLabel>
                            <CUR.NumberInput
                              min={homeCostRange.input1val}
                              max={homeCostRange.maxCost}
                              step={1000}
                              defaultValue={homeCostRange.maxCost}
                              value={homeCostRange.input2val}
                              onChange={(e) => {
                                parseInt(e) > homeCostRange.maxCost
                                  ? setHomeCostRange({
                                      ...homeCostRange,
                                      input1val: homeCostRange.maxCost,
                                      slider1pos: 100,
                                    })
                                  : setHomeCostRange({
                                      ...homeCostRange,
                                      input2val: parseInt(e),
                                      slider2pos: parseInt(e) / 1000,
                                    });
                              }}
                            >
                              <CUR.NumberInputField textAlign={"center"} />
                            </CUR.NumberInput>
                          </CUR.FormControl>
                        </CUR.GridItem>
                        <CUR.GridItem colSpan={3}>
                          <CUR.FormControl as="fieldset">
                            <CUR.FormLabel as="legend" textAlign={"center"}>
                              Set Price Range
                            </CUR.FormLabel>
                            <CUR.RangeSlider
                              aria-label={["min", "max"]}
                              onChange={(val) => {
                                setHomeCostRange({
                                  ...homeCostRange,
                                  input1val: val[0] * 1000,
                                  input2val: val[1] * 1000,
                                });
                              }}
                              onChangeEnd={(val) => {
                                //Slider 1
                                val[0] > val[1]
                                  ? setHomeCostRange({
                                      ...homeCostRange,
                                      input1val: homeCostRange.input2val - 1000,
                                      slider1pos: val[1] - 1,
                                    })
                                  : setHomeCostRange({
                                      ...homeCostRange,
                                      input1val: homeCostRange.input1val,
                                      slider1pos: val[0],
                                    });
                                //Slider 2
                                val[1] < val[0]
                                  ? setHomeCostRange({
                                      ...homeCostRange,
                                      input2val: homeCostRange.input1val + 1000,
                                      slider2pos: val[0] + 1,
                                    })
                                  : setHomeCostRange({
                                      ...homeCostRange,
                                      input2val: homeCostRange.input2val,
                                      slider2pos: val[1],
                                    });
                              }}
                              defaultValue={[1, 100]}
                              value={[
                                homeCostRange.input1val / 1000,
                                homeCostRange.input2val / 1000,
                              ]}
                            >
                              <CUR.RangeSliderTrack>
                                <CUR.RangeSliderFilledTrack />
                              </CUR.RangeSliderTrack>
                              <CUR.RangeSliderThumb index={0} />
                              <CUR.RangeSliderThumb index={1} />
                            </CUR.RangeSlider>
                          </CUR.FormControl>
                        </CUR.GridItem>
                      </CUR.Grid>

                      <CUR.Card bg={"blackAlpha.400"} p={4} m={2}>
                        <CUR.FormControl as="fieldset">
                          <CUR.FormLabel as="legend" textAlign={"center"}>
                            Choose Min Beds & Baths
                          </CUR.FormLabel>
                          <CUR.Center>
                            <CUR.HStack>
                              <CUR.Button>1+</CUR.Button>
                              <CUR.Button>2+</CUR.Button>
                              <CUR.Button>3+</CUR.Button>
                              <CUR.Button>4+</CUR.Button>
                              <CUR.Button>5+</CUR.Button>
                            </CUR.HStack>
                          </CUR.Center>
                        </CUR.FormControl>
                      </CUR.Card>
                      <CUR.Grid
                        templateColumns={`repeat(3,1fr)`}
                        templateRows={`repeat(2,1fr)`}
                        as={CUR.Card}
                        bg={"blackAlpha.400"}
                        p={{ lg: 0.5 }}
                        m={2}
                      >
                        <CUR.GridItem rowSpan={2}>
                          <CUR.FormControl as="fieldset">
                            <CUR.FormLabel as="legend" textAlign={"center"}>
                              Set Min Sqft
                            </CUR.FormLabel>
                            <CUR.NumberInput
                              // min={homeCostRange.minRange}
                              // max={homeCostRange.maxRange}
                              step={10}
                              // defaultValue={homeCostRange.maxRange}
                              // value={homeCostRange.input2val}
                            >
                              <CUR.NumberInputField textAlign={"center"} />
                            </CUR.NumberInput>
                          </CUR.FormControl>
                          <CUR.FormControl as="fieldset">
                            <CUR.FormLabel as="legend" textAlign={"center"}>
                              Select Min Sqft
                            </CUR.FormLabel>
                            <CUR.Select
                              placeholder="Any Size"
                              textAlign={"center"}
                            >
                              <option value={""}>1</option>
                              <option value={""}>2</option>
                              <option value={""}>3</option>
                              <option value={""}>4</option>
                              <option value={""}>5</option>
                            </CUR.Select>
                            <CUR.Spacer />
                          </CUR.FormControl>
                        </CUR.GridItem>
                        <CUR.GridItem as={CUR.Spacer} w={"100%"} />
                        <CUR.GridItem rowSpan={2}>
                          <CUR.FormControl as="fieldset">
                            <CUR.FormLabel as="legend" textAlign={"center"}>
                              Set Max Sqft
                            </CUR.FormLabel>
                            <CUR.NumberInput
                              // min={homeCostRange.minRange}
                              // max={homeCostRange.maxRange}
                              step={10}
                              // defaultValue={homeCostRange.maxRange}
                              // value={homeCostRange.input2val}
                            >
                              <CUR.NumberInputField textAlign={"center"} />
                            </CUR.NumberInput>
                          </CUR.FormControl>
                          <CUR.FormControl as="fieldset">
                            <CUR.FormLabel as="legend" textAlign={"center"}>
                              {" "}
                              Select Max Sqft
                            </CUR.FormLabel>
                            <CUR.Select
                              placeholder="Any Size"
                              textAlign={"center"}
                            >
                              <option value={""}>6</option>
                              <option value={""}>7</option>
                              <option value={""}>8</option>
                              <option value={""}>9</option>
                              <option value={""}>10</option>
                            </CUR.Select>
                          </CUR.FormControl>
                        </CUR.GridItem>
                      </CUR.Grid>
                      {/*  */}
                      <CUR.Card bg={"blackAlpha.400"} p={4} m={2}>
                        <CUR.FormControl as="fieldset">
                          <CUR.FormLabel as="legend" textAlign={"center"}>
                            Set Max Range
                          </CUR.FormLabel>
                          <CUR.NumberInput
                            // min={homeCostRange.minRange}
                            // max={homeCostRange.maxRange}
                            step={10}
                            // defaultValue={homeCostRange.maxRange}
                            // value={homeCostRange.input2val}
                            onChange={(e) => {
                              console.log(e);
                            }}
                          >
                            <CUR.NumberInputField textAlign={"center"} />
                          </CUR.NumberInput>
                        </CUR.FormControl>
                        <CUR.FormControl as="fieldset">
                          <CUR.FormLabel as="legend" textAlign={"center"}>
                            Choose Max Range
                          </CUR.FormLabel>
                          <CUR.Slider
                            flex="1"
                            focusThumbOnChange={false}
                            // value={value}
                            // onChange={handleChange}
                          >
                            <CUR.SliderTrack>
                              <CUR.SliderFilledTrack />
                            </CUR.SliderTrack>
                            <CUR.SliderThumb />
                          </CUR.Slider>
                        </CUR.FormControl>
                      </CUR.Card>
                      {/*  */}

                      {/*  */}
                      <CUR.Grid
                        templateColumns={`repeat(3,1fr)`}
                        templateRows={`repeat(2,1fr)`}
                        as={CUR.Card}
                        bg={"blackAlpha.400"}
                        p={{ lg: 0.5 }}
                        m={2}
                      >
                        <CUR.GridItem rowSpan={2}>
                          <CUR.FormControl as="fieldset">
                            <CUR.FormLabel as="legend" textAlign={"center"}>
                              Set Min Year Built
                            </CUR.FormLabel>
                            <CUR.NumberInput
                              // min={homeCostRange.minRange}
                              // max={homeCostRange.maxRange}
                              step={10}
                              // defaultValue={homeCostRange.maxRange}
                              // value={homeCostRange.input2val}
                            >
                              <CUR.NumberInputField textAlign={"center"} />
                            </CUR.NumberInput>
                          </CUR.FormControl>
                          <CUR.FormControl as="fieldset">
                            <CUR.FormLabel as="legend" textAlign={"center"}>
                              Select Min Year Built
                            </CUR.FormLabel>
                            <CUR.Select
                              placeholder="Any Year"
                              textAlign={"center"}
                            >
                              <option value={""}>1</option>
                              <option value={""}>2</option>
                              <option value={""}>3</option>
                              <option value={""}>4</option>
                              <option value={""}>5</option>
                            </CUR.Select>
                          </CUR.FormControl>
                        </CUR.GridItem>
                        <CUR.GridItem as={CUR.Spacer} w={"100%"} />
                        <CUR.GridItem rowSpan={2}>
                          <CUR.FormControl as="fieldset">
                            <CUR.FormLabel as="legend" textAlign={"center"}>
                              Set Max Year Built
                            </CUR.FormLabel>
                            <CUR.NumberInput
                              // min={homeCostRange.minRange}
                              // max={homeCostRange.maxRange}
                              step={10}
                              // defaultValue={homeCostRange.maxRange}
                              // value={homeCostRange.input2val}
                            >
                              <CUR.NumberInputField textAlign={"center"} />
                            </CUR.NumberInput>
                          </CUR.FormControl>
                          <CUR.FormControl as="fieldset">
                            <CUR.FormLabel as="legend" textAlign={"center"}>
                              Select Max Year Built
                            </CUR.FormLabel>
                            <CUR.Select
                              placeholder="Any Year"
                              textAlign={"center"}
                            >
                              <option value={""}>6</option>
                              <option value={""}>7</option>
                              <option value={""}>8</option>
                              <option value={""}>9</option>
                              <option value={""}>10</option>
                            </CUR.Select>
                          </CUR.FormControl>
                        </CUR.GridItem>
                      </CUR.Grid>
                    </form>
                  </CUR.Card>
                </CUR.AccordionPanel>
              </>
            )}
          </CUR.AccordionItem>
          <CUR.AccordionItem as={CUR.Card} borderRadius={1}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <CUR.AccordionButton>
                    <CUR.Box as="span" flex="1" pt={2} textAlign="center">
                      Properties
                    </CUR.Box>
                    <CUR.AccordionIcon />
                  </CUR.AccordionButton>
                </h2>
                <CUR.AccordionPanel
                  pb={4}
                  h={
                    isExpanded
                      ? //@ts-ignore
                        gridRef.current?.clientHeight -
                        //@ts-ignore
                        panel1Ref.current?.clientHeight * 3.1
                      : panel1Ref.current?.clientHeight
                  }
                  overflowY={"scroll"}
                >
                  {/* <Map.MapListTable /> */}
                  <Map.MapListItem />
                </CUR.AccordionPanel>
              </>
            )}
          </CUR.AccordionItem>
        </CUR.Accordion>
      </CUR.GridItem>
    </CUR.Grid>
  );
};

export default ListingTable;
