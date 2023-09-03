import * as CUR from "@chakra-ui/react";
import React, { useRef, useState } from "react";

interface Props {}

const ProfileInformation = ({}: Props) => {
  const AccountRef = useRef();

  return (
    <>
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
