import * as CUR from "@chakra-ui/react";
import * as CUI from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { Children } from "react";

const Profile = () => {
  const userProfile = [
    {
      userImage: "",
      userInitials: "",
      userFirstname: "Devell",
      userLastname: "Robinson",
      userEmail: "",
      userPhone: "",
    },
  ];

  return (
    <>
      <CUR.Box bg={"blue"} p={5}>
        <CUR.Center>
          <CUR.Heading>Profile</CUR.Heading>
        </CUR.Center>
      </CUR.Box>
      <CUR.Spacer h={25} />
      <CUR.Center>
        <CUR.VStack>
          {userProfile.map((user) => (
            <>
              <CUR.Avatar
                name={`${user.userFirstname} ${user.userLastname}`}
                src=""
                size={"2xl"}
              />
              <CUR.Heading>
                {user.userFirstname} {user.userLastname}
              </CUR.Heading>
            </>
          ))}
        </CUR.VStack>
      </CUR.Center>
    </>
  );
};

export default Profile;
