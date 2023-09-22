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
  lng: number;
  lat: number;
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
    lng: 0,
    lat: 0,
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
    lng: 0,
    lat: 0,
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
    lng: 0,
    lat: 0,
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
    lng: 0,
    lat: 0,
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
    lng: 0,
    lat: 0,
  },
  {
    status: "For Sale",
    price: { sign: "$", amount: 5000 },
    style: "Single Family",
    range: { distance: 50, measure: "mi" },
    street: "1316 Maple St",
    city: "Tampa",
    state: "Florida",
    zipCode: 30297,
    beds: 6,
    baths: 5,
    sqft: 1000,
    yearBuilt: 2020,
    favorite: false,
    lng: 0,
    lat: 0,
  },
];
const MapListItem = () => {
  //   const [isFavorite, setFavorite] = useState(false);
  return (
    <>
      <CUR.Grid gap={1}>
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
            lat,
            lng,
          }: Property) => (
            <CUR.GridItem key={street}>
              <CUR.Card border={"2px"} borderColor={"black"}>
                <CUR.Grid
                  templateColumns={`repeat(6,1fr)`}
                  templateRows={`repeat(4,1fr)`}
                >
                  <CUR.GridItem colSpan={2} rowSpan={4}>
                    <CUR.Skeleton h={"100%"} w={"100%"} />
                  </CUR.GridItem>
                  <CUR.GridItem colSpan={3} rowSpan={1}>
                    <CUR.Center>
                      <CUR.Heading size={"md"}>
                        {status} {price.sign}
                        {price.amount}
                      </CUR.Heading>
                      <CUR.Spacer />
                    </CUR.Center>
                  </CUR.GridItem>
                  <CUR.GridItem colSpan={1} rowSpan={1}>
                    <CUR.HStack>
                      <CUR.Spacer />
                      <CUR.Button p={0} h={5}>
                        {range.distance}
                        {range.measure}
                      </CUR.Button>
                      <CUR.Button p={0} h={5}>
                        {lat},{lng}
                      </CUR.Button>
                      <RI.AiFillHeart />
                      <CUR.Spacer />
                    </CUR.HStack>
                  </CUR.GridItem>

                  <CUR.GridItem colSpan={4} rowSpan={3}>
                    <CUR.Center>
                      <CUR.HStack>
                        <CUR.Text>
                          {` ${street}, ${city}, ${state} ${zipCode}`}
                        </CUR.Text>
                        <CUR.Text>{beds} bd</CUR.Text>
                        <CUR.Text>{baths} ba</CUR.Text>
                        <CUR.Text>{sqft} sqft</CUR.Text>
                      </CUR.HStack>
                    </CUR.Center>
                  </CUR.GridItem>
                </CUR.Grid>
              </CUR.Card>
            </CUR.GridItem>
          )
        )}
      </CUR.Grid>
    </>
  );
};

export default MapListItem;
