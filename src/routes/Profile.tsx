import * as CUR from "@chakra-ui/react";
import * as CUI from "@chakra-ui/icons";
import React, { useRef, useState } from "react";
import EditableInputControls from "../components/EditableInput/EditableInputControls";
import ProfileInformation from "../components/ProfileMenuList/ProfileInformation";
import AccountManagement from "./../components/ProfileMenuList/AccountManagement";
import PartnersServices from "./../components/ProfileMenuList/PartnersServices";
import PaymentsSubscriptions from "./../components/ProfileMenuList/PaymentsSubscriptions";

const Profile = () => {
  type UserProfile = {
    Image: string;
    FullName: string;
    Email: string;
    Phone: number;
  };
  const User: UserProfile = {
    Image: "",
    FullName: "",
    Email: "",
    Phone: 6783675727,
  };

  const [imageSRC, setImageSRC] = useState(User.Image);
  const [fullName, setFullName] = useState(User.FullName);
  const [email, setEmail] = useState(User.Email);
  const [phone, setPhone] = useState(User.Phone);

  const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFullName = event.target.value;
    setFullName(newFullName);
    User.FullName = newFullName;
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newImageSRC = event.target.value;
    setImageSRC(newImageSRC);
    User.Image = newImageSRC;
  };

  const currentRef = useRef();
  return (
    <>
      <CUR.Grid
        templateAreas={{
          base: `"sect1 sect2"`,
        }}
        h={`100%`}
      >
        <CUR.GridItem area={"sect1"} w={"20vw"} border={"2px"}>
          <CUR.TableContainer>
            <CUR.Table>
              <CUR.Thead>
                <CUR.Tr>
                  <CUR.Th>
                    <CUR.Center>Account Settings</CUR.Center>
                  </CUR.Th>
                </CUR.Tr>
              </CUR.Thead>
              <CUR.Tbody>
                <CUR.Tr>
                  <CUR.Td>
                    <CUR.Center>Communications & Notifications</CUR.Center>
                  </CUR.Td>
                </CUR.Tr>
                <CUR.Tr>
                  <CUR.Td>
                    <CUR.Center>Security Center</CUR.Center>
                  </CUR.Td>
                </CUR.Tr>
                <CUR.Tr>
                  <CUR.Td>
                    <CUR.Center>Help Platform</CUR.Center>
                  </CUR.Td>
                </CUR.Tr>
              </CUR.Tbody>
            </CUR.Table>
          </CUR.TableContainer>

          <CUR.Accordion>
            <ProfileInformation />

            <AccountManagement />
            <PartnersServices />
            <PaymentsSubscriptions />
          </CUR.Accordion>
        </CUR.GridItem>
        <CUR.GridItem area={"sect2"} w={"80vw"} border={"2px"}>
          <CUR.Box bg={"blue"} p={5}>
            <CUR.Center>
              <CUR.Heading>Profile</CUR.Heading>
            </CUR.Center>
          </CUR.Box>
          <CUR.Spacer h={25} />
          <CUR.Center>
            <CUR.VStack>
              <CUR.Avatar name={`${fullName}`} src={imageSRC} size={"2xl"} />
              <CUR.Center>
                <CUR.Heading>
                  <CUR.HStack>
                    <CUR.Editable textAlign="center" isPreviewFocusable={false}>
                      <CUR.EditablePreview />
                      <CUR.Input
                        as={CUR.EditableInput}
                        value={User.FullName}
                        onChange={handleFullNameChange}
                      />
                      <EditableInputControls />
                    </CUR.Editable>
                  </CUR.HStack>
                </CUR.Heading>
              </CUR.Center>
              <CUR.Box
                bgGradient={"linear(to-r,green.300,blue.300)"}
                borderRadius={"base"}
                ref={currentRef}
              ></CUR.Box>
            </CUR.VStack>
          </CUR.Center>
        </CUR.GridItem>
      </CUR.Grid>
    </>
  );
};

export default Profile;
