import * as CUR from "@chakra-ui/react";
// import { useState } from "react";
import * as RI from "react-icons/ai";

type Property = {
  status:
    | "For Sale"
    | "For Rent"
    | "Back on Market"
    | "Accepted Offer"
    | "Accepting Backup Offers"
    | "Sold";
  style:
    | "Manufactured"
    | "Single Family"
    | "Multi Family"
    | "Condominium"
    | "Townhouse";
  price: { sign?: "$"; amount: number };
  range: { distance: number; measure: "ft" | "mi" };
  street: string;
  city: string;
  state: string;
  zipCode: number;
  beds: number;
  baths: number;
  sqft: number;
  yearBuilt: number;
  favorite: boolean;
};

const properties: Array<Property> = [
  {
    status: "For Sale",
    price: { sign: "$", amount: 1000 },
    style: "Single Family",
    range: { distance: 10, measure: "mi" },
    street: "123 Main St",
    city: "Tampa",
    state: "Florida",
    zipCode: 30297,
    beds: 2,
    baths: 1,
    sqft: 1000,
    yearBuilt: 1980,
    favorite: false,
  },
  {
    status: "For Sale",
    price: { sign: "$", amount: 2000 },
    style: "Single Family",
    range: { distance: 20, measure: "mi" },
    street: "456 Elm St",
    city: "Tampa",
    state: "Florida",
    zipCode: 30297,
    beds: 3,
    baths: 2,
    sqft: 1000,
    yearBuilt: 1990,
    favorite: false,
  },
  {
    status: "For Sale",
    price: { sign: "$", amount: 3000 },
    style: "Single Family",
    range: { distance: 30, measure: "mi" },
    street: "789 Oak St",
    city: "Tampa",
    state: "Florida",
    zipCode: 30297,
    beds: 4,
    baths: 3,
    sqft: 1000,
    yearBuilt: 2000,
    favorite: false,
  },
  {
    status: "For Sale",
    price: { sign: "$", amount: 4000 },
    style: "Single Family",
    range: { distance: 40, measure: "mi" },
    street: "1012 Pine St",
    city: "Tampa",
    state: "Florida",
    zipCode: 30297,
    beds: 5,
    baths: 4,
    sqft: 1000,
    yearBuilt: 2010,
    favorite: false,
  },
  {
    status: "For Sale",
    price: { sign: "$", amount: 5000 },
    style: "Single Family",
    range: { distance: 50, measure: "mi" },
    street: "1314 Maple St",
    city: "Tampa",
    state: "Florida",
    zipCode: 30297,
    beds: 6,
    baths: 5,
    sqft: 1000,
    yearBuilt: 2020,
    favorite: false,
  },
  {
    status: "For Sale",
    price: { sign: "$", amount: 5000 },
    style: "Single Family",
    range: { distance: 50, measure: "mi" },
    street: "1314 Maple St",
    city: "Tampa",
    state: "Florida",
    zipCode: 30297,
    beds: 6,
    baths: 5,
    sqft: 1000,
    yearBuilt: 2020,
    favorite: false,
  },
];
console.log(properties.length);
const MapListItem = () => {
  //   const [isFavorite, setFavorite] = useState(false);
  return (
    <>
      <CUR.Grid templateRows={`repeat(${properties.length},1fr)`} gap={0.5}>
        {properties.map(
          ({
            status,
            price,
            range,
            street,
            city,
            state,
            zipCode,
            beds,
            baths,
            sqft,
          }: Property) => (
            <CUR.GridItem rowSpan={1}>
              <CUR.Card border={1} borderRadius={4} borderStyle={"solid"} p={0}>
                <CUR.CardBody p={1}>
                  <CUR.Grid
                    templateColumns={`repeat(10,1fr)`}
                    templateRows={`repeat(3,1fr)`}
                    h={175}
                    w={"100%"}
                  >
                    <CUR.GridItem colSpan={5} rowSpan={5}>
                      <CUR.Skeleton h={"100%"} w={"100%"} />
                    </CUR.GridItem>
                    <CUR.GridItem colSpan={2} rowSpan={1}>
                      <CUR.HStack>
                        <CUR.Text>{status}</CUR.Text>
                        <CUR.Spacer />
                        <CUR.Text>
                          {price.sign}
                          {price.amount}
                        </CUR.Text>
                      </CUR.HStack>
                    </CUR.GridItem>
                    <CUR.GridItem colSpan={2} rowSpan={1}>
                      <CUR.Text>
                        {range.distance}
                        {range.measure}
                      </CUR.Text>
                    </CUR.GridItem>
                    <CUR.GridItem colSpan={1} rowSpan={1}>
                      <CUR.Center>
                        <CUR.IconButton aria-label="Favorite Property">
                          <RI.AiFillHeart />
                        </CUR.IconButton>
                      </CUR.Center>
                    </CUR.GridItem>
                    <CUR.GridItem colSpan={5} rowSpan={2}>
                      <CUR.VStack>
                        <CUR.Text>{` ${street} ${city}, ${state} ${zipCode}`}</CUR.Text>
                        <CUR.HStack>
                          <CUR.Text>{beds} bd</CUR.Text>
                          <CUR.Text>{baths} ba</CUR.Text>
                          <CUR.Text>{sqft} sqft</CUR.Text>
                        </CUR.HStack>
                      </CUR.VStack>
                    </CUR.GridItem>

                    {/*
                    
                    
                    

                     */}
                  </CUR.Grid>
                </CUR.CardBody>
              </CUR.Card>
            </CUR.GridItem>
          )
        )}
      </CUR.Grid>
    </>
  );
};

export default MapListItem;
