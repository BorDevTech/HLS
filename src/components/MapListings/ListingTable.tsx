import { useState } from "react";
import * as Map from "./index";
import * as CUR from "@chakra-ui/react";
import * as CUI from "@chakra-ui/icons";
import Filters from "./Filters";

const ListingTable = () => {
  //Needed states
  /*sort status, price, address(name), bedrooms, sqft,*/
  const [quickSort, setQuickSort] = useState({
    status: -1,
    price: -1,
    beds: -1,
    sqft: -1,
    range: -1,
  });
  //Advanced Filters
  /*  list date,bedroom-bathroom amount, min-max price, keyword*/
  //Quick Features
  /*  Amenities, Views, age restrictions, stories, lot size */

  return (
    <>
      <CUR.Grid
        w={"100%"}
        h={"100%"}
        templateRows={{ lg: `repeat(20,1fr)` }}
        templateColumns={{ lg: `repeat(1,1fr)` }}
        gap={0}
      >
        <CUR.GridItem rowSpan={{ lg: 1 }} colSpan={{ lg: 1 }}>
          <CUR.Card borderRadius={0} as={CUR.Accordion} allowToggle>
            <CUR.AccordionItem>
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
                  templateColumns={{ lg: `repeat(5,1fr)` }}
                  templateRows={{ lg: `repeat(1,1fr)` }}
                  columnGap={2}
                >
                  <CUR.GridItem colSpan={{ lg: 1 }}>
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
                  <CUR.GridItem colSpan={{ lg: 1 }}>
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
                  <CUR.GridItem colSpan={{ lg: 1 }}>
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
                  <CUR.GridItem colSpan={{ lg: 1 }}>
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
                  <CUR.GridItem colSpan={{ lg: 1 }}>
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
                </CUR.Grid>
              </CUR.AccordionPanel>
            </CUR.AccordionItem>
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
