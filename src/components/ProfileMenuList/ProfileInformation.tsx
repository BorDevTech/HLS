import * as CUR from "@chakra-ui/react";
import { useState } from "react";
import EditableInputControls from "../EditableInput/EditableInputControls";
import { Link } from "react-router-dom";

interface Props {}

interface UserProfile {
  Avatar: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: {
    sect1: string;
    sect2: string;
    sect3: string;
  };
}

const ProfileInformation = ({}: Props) => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    Avatar: "",
    FirstName: "John/Jane",
    LastName: "Doe",
    Email: "John/Jane.Doe@email.com",
    Phone: { sect1: "123", sect2: "456", sect3: "7890" },
  });

  // @ts-ignore
  const handleUserProfileChange = (e) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
  };
  const { Avatar, FirstName, LastName, Email, Phone } = userProfile;

  return (
    <>
      <form action="">
        <CUR.VStack>
          {FirstName !== "John/Jane" ? (
            <CUR.Avatar
              name={`${FirstName} ${LastName}`}
              src={Avatar}
              size={"2xl"}
            />
          ) : (
            <CUR.Avatar size={"2xl"} />
          )}

          {FirstName === "John/Jane" && LastName === "Doe" ? (
            <CUR.Box>
              Want to save progress? <Link to={"/login"}>Login </Link>or
              <Link to={"/register"}> Register</Link>
            </CUR.Box>
          ) : (
            <CUR.Box>{`${FirstName} ${LastName}`}</CUR.Box>
          )}
          <CUR.FormControl as="fieldset">
            <CUR.FormLabel as="legend" textAlign="center">
              Avatar
            </CUR.FormLabel>
            <CUR.Input
              onChange={handleUserProfileChange}
              name="Image"
              placeholder="Image"
            />
            <CUR.Editable textAlign="center" isPreviewFocusable={false}>
              <CUR.EditablePreview />
              <CUR.Input
                as={CUR.EditableInput}
                value={Avatar}
                name="Image"
                onChange={handleUserProfileChange}
              />
              <EditableInputControls />
            </CUR.Editable>
          </CUR.FormControl>
        </CUR.VStack>
      </form>
      <CUR.HStack>
        <CUR.FormControl as="fieldset">
          <CUR.FormLabel as="legend" textAlign="center">
            Firstname
          </CUR.FormLabel>
          <CUR.Input
            onChange={handleUserProfileChange}
            name="FirstName"
            placeholder={FirstName}
          />
          <CUR.Editable textAlign="center" isPreviewFocusable={false}>
            <CUR.EditablePreview />
            <CUR.Input
              as={CUR.EditableInput}
              value={FirstName}
              name="FirstName"
              onChange={handleUserProfileChange}
            />
            <EditableInputControls />
          </CUR.Editable>
        </CUR.FormControl>
        <CUR.FormControl as="fieldset">
          <CUR.FormLabel as="legend" textAlign="center">
            Lastname
          </CUR.FormLabel>
          <CUR.Input
            onChange={handleUserProfileChange}
            name="LastName"
            placeholder={LastName}
          />
          <CUR.Editable textAlign="center" isPreviewFocusable={false}>
            <CUR.EditablePreview />
            <CUR.Input
              as={CUR.EditableInput}
              value={LastName}
              name="LastName"
              onChange={handleUserProfileChange}
              type="text"
            />
            <EditableInputControls />
          </CUR.Editable>
        </CUR.FormControl>
      </CUR.HStack>
      <CUR.HStack>
        <CUR.FormControl as="fieldset">
          <CUR.FormLabel as="legend" textAlign="center">
            Email
          </CUR.FormLabel>
          <CUR.Input
            onChange={handleUserProfileChange}
            name="Email"
            placeholder={Email}
            type="email"
          />
          <CUR.Editable textAlign="center" isPreviewFocusable={false}>
            <CUR.EditablePreview />
            <CUR.Input
              as={CUR.EditableInput}
              value={Email}
              name="Email"
              onChange={handleUserProfileChange}
            />
            <EditableInputControls />
          </CUR.Editable>
        </CUR.FormControl>
      </CUR.HStack>
      <CUR.FormControl as="fieldset">
        <CUR.FormLabel as="legend" textAlign="center">
          Phone
        </CUR.FormLabel>
        <CUR.Input
          onChange={handleUserProfileChange}
          name="Phone"
          placeholder={`(${Phone.sect1}) ${Phone.sect2}-${Phone.sect3}`}
          type="tel"
        />
        <CUR.Editable textAlign="center" isPreviewFocusable={false}>
          <CUR.EditablePreview />
          <CUR.Input
            as={CUR.EditableInput}
            value={Phone.sect1}
            name="Phone"
            onChange={handleUserProfileChange}
          />
          <EditableInputControls />
        </CUR.Editable>
      </CUR.FormControl>{" "}
    </>
  );
};

export default ProfileInformation;
