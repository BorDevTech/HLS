import * as CUR from "@chakra-ui/react";

interface Props {}

const AccountManagement = ({}: Props) => {
  return (
    <>
      <form action="">
        <CUR.VStack>
          <ul>
            <li>Change Username</li>
            <li>Export Account Data</li>
            <li>Delete Account</li>
            <li>Beta Program</li>
          </ul>
        </CUR.VStack>
      </form>
    </>
  );
};

export default AccountManagement;
