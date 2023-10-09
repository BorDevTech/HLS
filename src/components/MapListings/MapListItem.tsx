import * as CUR from "@chakra-ui/react";
import * as RI from "react-icons/ai";
import { useEffect, useState } from "react";

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

// fetch(
//   "https://api.mapbox.com/datasets/v1/devell-robinson-bordevtech/clmiw30ie132z2ls582drlh62?access_token=pk.eyJ1IjoiZGV2ZWxsLXJvYmluc29uLWJvcmRldnRlY2giLCJhIjoiY2xtaWhlcGt1MnBmbjNqcGM1dTgzazZ3MyJ9.kSsVLwyNQksqPT9-b0UYOQ"
// ).then((res) => {
//   !res.ok ? console.log(`ERROR`) : console.log(`SUCCESSFUL:DataSet fetch`);
//   res.json().then((data) => {
//     console.log(data);
//     console.log(data.features);
//     // console.log(data.features);
//   });
// });

// fetch(
//   "https://api.mapbox.com/datasets/v1/devell-robinson-bordevtech/clmiw30ie132z2ls582drlh62/features?access_token=pk.eyJ1IjoiZGV2ZWxsLXJvYmluc29uLWJvcmRldnRlY2giLCJhIjoiY2xtaWhlcGt1MnBmbjNqcGM1dTgzazZ3MyJ9.kSsVLwyNQksqPT9-b0UYOQ"
// ).then((res) => {
//   !res.ok ? console.log(`ERROR`) : console.log(`SUCCESSFUL:Features fetch`);
//   res.json().then((data) => {
//     console.log(data);
//     console.log(
//       data.features.map((index: string[]) => index?.properties?.place_name)
//     );
//     // console.log(data.features);
//   });
// });

const MapListItem = () => {
  const [localPropertySave, setLocalPropertySave] = useState<Property[]>([]);

  function fetchProperties(propertiesFile: string) {
    fetch(propertiesFile).then((res) => {
      !res.ok
        ? console.error(`ERROR: ${res.status}`)
        : console.log(`SUCCESS: PropertiesJSON fetched`);
      res.json().then((data) => {
        setLocalPropertySave(data as Property[]);
        console.log(`LOGGED: ${data.length}`);
      });
    });
  }
  useEffect(() => {
    fetchProperties("src/components/MapListings/properties.json");
  }, []);
  return (
    <>
      <CUR.Grid gap={1}>
        <CUR.GridItem>
          {localPropertySave.map(
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
            }) => (
              <CUR.Card border={"2px"} borderColor={"black"}>
                <CUR.Skeleton h={"100%"} w={"100%"} />
                <CUR.Center>
                  <CUR.Heading size={"md"}>
                    {status} {price.sign}
                    {price.amount}
                  </CUR.Heading>
                  <CUR.Spacer />
                </CUR.Center>
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
              </CUR.Card>
            )
          )}
        </CUR.GridItem>
      </CUR.Grid>
    </>
  );
};

export default MapListItem;
