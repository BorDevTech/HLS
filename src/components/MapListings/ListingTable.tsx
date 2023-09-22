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
  const panel1Ref = useRef<HTMLButtonElement | null>(null);
  const panel2Ref = useRef<HTMLButtonElement | null>(null);
  const [panelSize, setPanelSize] = useState({ PI1: 0, PI2: 0 });

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
  console.log("The value of input 1 is" + homeCostRange.input1val);
  console.log("The value of input 2 is" + homeCostRange.input2val);

  const numbers = "10000";
  console.log(parseInt(numbers) / 1000);
  return (
    <>
      <CUR.Grid
        w={"100%"}
        h={"100%"}
        templateRows={{ base: `repeat(8,1fr)`, lg: `repeat(20,1fr)` }}
        templateColumns={{ lg: `repeat(1,1fr)` }}
        gap={0}
        ref={gridRef}
      >
        <CUR.GridItem rowSpan={{ lg: 1 }} colSpan={{ lg: 1 }}>
          <CUR.Card borderRadius={0} as={CUR.Accordion} allowToggle>
            <CUR.AccordionItem>
              <h2>
                <CUR.AccordionButton ref={panel1Ref}>
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
                  columnGap={2}
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
                        onClick={() => setQuickSort({ ...quickSort, price: 0 })}
                      >
                        Price
                      </CUR.Button>
                    ) : quickSort.price === 0 ? (
                      <CUR.Button
                        rightIcon={<CUI.TriangleDownIcon />}
                        onClick={() => setQuickSort({ ...quickSort, price: 1 })}
                      >
                        Price
                      </CUR.Button>
                    ) : (
                      <CUR.Button
                        rightIcon={<CUI.ArrowUpDownIcon />}
                        onClick={() => setQuickSort({ ...quickSort, price: 1 })}
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
                        onClick={() => setQuickSort({ ...quickSort, beds: 0 })}
                      >
                        Beds
                      </CUR.Button>
                    ) : quickSort.beds === 0 ? (
                      <CUR.Button
                        rightIcon={<CUI.TriangleDownIcon />}
                        onClick={() => setQuickSort({ ...quickSort, beds: 1 })}
                      >
                        Beds
                      </CUR.Button>
                    ) : (
                      <CUR.Button
                        rightIcon={<CUI.ArrowUpDownIcon />}
                        onClick={() => setQuickSort({ ...quickSort, beds: 1 })}
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
                        onClick={() => setQuickSort({ ...quickSort, sqft: 0 })}
                      >
                        Sqft
                      </CUR.Button>
                    ) : quickSort.sqft === 0 ? (
                      <CUR.Button
                        rightIcon={<CUI.TriangleDownIcon />}
                        onClick={() => setQuickSort({ ...quickSort, sqft: 1 })}
                      >
                        Sqft
                      </CUR.Button>
                    ) : (
                      <CUR.Button
                        rightIcon={<CUI.ArrowUpDownIcon />}
                        onClick={() => setQuickSort({ ...quickSort, sqft: 1 })}
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
                        onClick={() => setQuickSort({ ...quickSort, range: 0 })}
                      >
                        Range
                      </CUR.Button>
                    ) : quickSort.range === 0 ? (
                      <CUR.Button
                        rightIcon={<CUI.TriangleDownIcon />}
                        onClick={() => setQuickSort({ ...quickSort, range: 1 })}
                      >
                        Range
                      </CUR.Button>
                    ) : (
                      <CUR.Button
                        rightIcon={<CUI.ArrowUpDownIcon />}
                        onClick={() => setQuickSort({ ...quickSort, range: 1 })}
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
                        onClick={() => setQuickSort({ ...quickSort, year: 0 })}
                      >
                        Year
                      </CUR.Button>
                    ) : quickSort.range === 0 ? (
                      <CUR.Button
                        rightIcon={<CUI.TriangleDownIcon />}
                        onClick={() => setQuickSort({ ...quickSort, year: 1 })}
                      >
                        Year
                      </CUR.Button>
                    ) : (
                      <CUR.Button
                        rightIcon={<CUI.ArrowUpDownIcon />}
                        onClick={() => setQuickSort({ ...quickSort, year: 1 })}
                      >
                        Year
                      </CUR.Button>
                    )}
                  </CUR.GridItem>
                </CUR.Grid>
              </CUR.AccordionPanel>
            </CUR.AccordionItem>
            <CUR.Card as={CUR.AccordionItem} borderRadius={1}>
              <h2>
                <CUR.AccordionButton
                  ref={panel2Ref}
                  onClick={() => {
                    setPanelSize({
                      ...panelSize,
                      PI2:
                        gridRef.current?.clientHeight -
                        panel1Ref.current?.clientHeight * 3.08,
                    });
                  }}
                >
                  <CUR.Box as="span" flex="1" pt={2} textAlign="center">
                    Advanced Filters
                  </CUR.Box>
                  <CUR.AccordionIcon />
                </CUR.AccordionButton>
              </h2>
              <CUR.AccordionPanel h={panelSize.PI2} pb={4}>
                <CUR.Card>
                  <CUR.FormControl as="fieldset">
                    <CUR.FormLabel as="legend" textAlign={"center"}>
                      Set Price
                    </CUR.FormLabel>
                    <CUR.Grid templateColumns={`repeat(4,1fr)`}>
                      {/*  */}
                      <CUR.GridItem colSpan={1}>
                        <CUR.NumberInput
                          min={homeCostRange.minCost}
                          max={homeCostRange.input2val}
                          step={1000}
                          textAlign={"center"}
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
                          <CUR.NumberInputField />
                        </CUR.NumberInput>
                      </CUR.GridItem>
                      <CUR.GridItem colSpan={2}>
                        <CUR.Spacer w={"100%"} h={"100%"} />
                      </CUR.GridItem>
                      <CUR.GridItem colSpan={1}>
                        <CUR.NumberInput
                          min={homeCostRange.input1val}
                          max={homeCostRange.maxCost}
                          step={1000}
                          textAlign={"center"}
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
                          <CUR.NumberInputField />
                        </CUR.NumberInput>
                      </CUR.GridItem>
                      <CUR.GridItem colSpan={6}>
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
                      </CUR.GridItem>

                      {/* */}
                    </CUR.Grid>
                  </CUR.FormControl>
                  <CUR.FormControl as="fieldset">
                    <CUR.FormLabel as="legend" textAlign={"center"}>
                      Beds & Baths
                    </CUR.FormLabel>
                    <CUR.Button>1+</CUR.Button>
                    <CUR.Button>2+</CUR.Button>
                    <CUR.Button>3+</CUR.Button>
                    <CUR.Button>4+</CUR.Button>
                    <CUR.Button>5+</CUR.Button>
                  </CUR.FormControl>
                  <CUR.FormControl as="fieldset">
                    <CUR.FormLabel as="legend" textAlign={"center"}>
                      Sqft & lot size
                    </CUR.FormLabel>
                    <CUR.Grid
                      templateColumns={`repeat(3,1fr)`}
                      templateRows={`repeat(2,1fr)`}
                    >
                      <CUR.GridItem colSpan={1} rowSpan={1}>
                        <CUR.Stack>
                          <CUR.NumberInput
                            // min={homeCostRange.minRange}
                            // max={homeCostRange.maxRange}
                            step={10}
                            // defaultValue={homeCostRange.maxRange}
                            // value={homeCostRange.input2val}
                            onChange={(e) => {}}
                          >
                            <CUR.NumberInputField />
                          </CUR.NumberInput>
                          <CUR.Select placeholder="Any Size">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </CUR.Select>
                        </CUR.Stack>
                      </CUR.GridItem>
                      <CUR.GridItem colSpan={1} rowSpan={2}>
                        <CUR.Spacer />
                      </CUR.GridItem>

                      <CUR.GridItem colSpan={1} rowSpan={1}>
                        <CUR.Stack>
                          <CUR.NumberInput
                            // min={homeCostRange.minRange}
                            // max={homeCostRange.maxRange}
                            step={10}
                            // defaultValue={homeCostRange.maxRange}
                            // value={homeCostRange.input2val}
                            onChange={(e) => {}}
                          >
                            <CUR.NumberInputField />
                          </CUR.NumberInput>
                          <CUR.Select placeholder="Any Size">
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                          </CUR.Select>
                        </CUR.Stack>
                      </CUR.GridItem>
                    </CUR.Grid>
                  </CUR.FormControl>
                  <CUR.FormControl as="fieldset">
                    <CUR.FormLabel as="legend" textAlign={"center"}>
                      Choose Range
                    </CUR.FormLabel>
                    <CUR.Grid>
                      <CUR.GridItem>
                        <CUR.NumberInput
                          // min={homeCostRange.minRange}
                          // max={homeCostRange.maxRange}
                          step={10}
                          // defaultValue={homeCostRange.maxRange}
                          // value={homeCostRange.input2val}
                          onChange={(e) => {}}
                        >
                          <CUR.NumberInputField />
                        </CUR.NumberInput>
                      </CUR.GridItem>
                      <CUR.GridItem>
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
                      </CUR.GridItem>
                    </CUR.Grid>
                  </CUR.FormControl>
                  <CUR.FormControl as="fieldset">
                    <CUR.FormLabel as="legend" textAlign={"center"}>
                      Year Built
                    </CUR.FormLabel>
                    <CUR.Grid
                      templateColumns={`repeat(3,1fr)`}
                      templateRows={`repeat(2,1fr)`}
                    >
                      <CUR.GridItem colSpan={1} rowSpan={1}>
                        <CUR.Stack>
                          <CUR.NumberInput
                            // min={homeCostRange.minRange}
                            // max={homeCostRange.maxRange}
                            step={10}
                            // defaultValue={homeCostRange.maxRange}
                            // value={homeCostRange.input2val}
                            onChange={(e) => {}}
                          >
                            <CUR.NumberInputField />
                          </CUR.NumberInput>
                          <CUR.Select placeholder="Any Year">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </CUR.Select>
                        </CUR.Stack>
                      </CUR.GridItem>
                      <CUR.GridItem colSpan={1} rowSpan={2}>
                        <CUR.Spacer />
                      </CUR.GridItem>

                      <CUR.GridItem colSpan={1} rowSpan={1}>
                        <CUR.Stack>
                          <CUR.NumberInput
                            // min={homeCostRange.minRange}
                            // max={homeCostRange.maxRange}
                            step={10}
                            // defaultValue={homeCostRange.maxRange}
                            // value={homeCostRange.input2val}
                            onChange={(e) => {}}
                          >
                            <CUR.NumberInputField />
                          </CUR.NumberInput>
                          <CUR.Select placeholder="Any Year">
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                          </CUR.Select>
                        </CUR.Stack>
                      </CUR.GridItem>
                    </CUR.Grid>
                  </CUR.FormControl>
                </CUR.Card>
              </CUR.AccordionPanel>
            </CUR.Card>
          </CUR.Card>
        </CUR.GridItem>
        <CUR.GridItem rowSpan={{ lg: 19 }} colSpan={{ lg: 1 }}>
          <Map.MapListTable />
        </CUR.GridItem>
      </CUR.Grid>
    </>
  );
};

export default ListingTable;
