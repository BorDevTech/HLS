import * as CUR from "@chakra-ui/react";
import { useRef, useState } from "react";

interface Props {}

const ProfileInformation = ({}: Props) => {
  const [UserProfile, setUserProfile] = useState({
    Image: "",
    FirstName: "D",
    LastName: "R",
    Email: "",
    Phone: 0,
  });

  //@ts-ignore
  const handleUserProfileChange = (e) => {
    setUserProfile({ ...UserProfile, [e.target.name]: e.target.value });
  };
  const AccountRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <CUR.Input onChange={handleUserProfileChange} name="FirstName" />
      <CUR.Input onChange={handleUserProfileChange} name="LastName" />
      <CUR.Input onChange={handleUserProfileChange} name="Email" />
      <CUR.Input onChange={handleUserProfileChange} name="Image" />
      <CUR.Avatar
        name={`${UserProfile.FirstName} ${UserProfile.LastName}`}
        src={UserProfile.Image}
        size={"2xl"}
      />
      <CUR.AccordionItem ref={AccountRef}>
        <h2>
          <CUR.AccordionButton>
            <CUR.Box as="span" flex="1" textAlign="left">
              <CUR.Center>Profile</CUR.Center>
            </CUR.Box>
            <CUR.AccordionIcon />
          </CUR.AccordionButton>
        </h2>
        <CUR.Portal containerRef={AccountRef}>
          <CUR.AccordionPanel pb={4}>Profile</CUR.AccordionPanel>
        </CUR.Portal>
      </CUR.AccordionItem>
    </>
  );
};

export default ProfileInformation;
