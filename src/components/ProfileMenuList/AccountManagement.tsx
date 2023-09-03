import * as CUR from "@chakra-ui/react";
import React, { useRef } from "react";

interface Props {}

const AccountManagement = ({}: Props) => {
  const ManagementRef = React.useRef();
  return (
    <>
      <CUR.AccordionItem ref={ManagementRef}>
        <h2>
          <CUR.AccordionButton>
            <CUR.Box as="span" flex="1" textAlign="left">
              <CUR.Center>Account Management</CUR.Center>
            </CUR.Box>
            <CUR.AccordionIcon />
          </CUR.AccordionButton>
        </h2>
        <CUR.Portal containerRef={ManagementRef}>
          <CUR.AccordionPanel pb={4}>Account Management</CUR.AccordionPanel>
        </CUR.Portal>
      </CUR.AccordionItem>
    </>
  );
};

export default AccountManagement;
