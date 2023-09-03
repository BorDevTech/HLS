import * as CUR from "@chakra-ui/react";
import { useRef } from "react";

interface Props {}

const PaymentsSubscriptions = ({}: Props) => {
  const PaymentsSubscriptionsRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <CUR.AccordionItem>
        <h2>
          <CUR.AccordionButton>
            <CUR.Box as="span" flex="1" textAlign="left">
              <CUR.Center>Payments & Subscriptions</CUR.Center>
            </CUR.Box>
            <CUR.AccordionIcon />
          </CUR.AccordionButton>
        </h2>
        <CUR.Portal containerRef={PaymentsSubscriptionsRef}>
          <CUR.AccordionPanel pb={4}>
            Connected Partners & Services
          </CUR.AccordionPanel>
        </CUR.Portal>
      </CUR.AccordionItem>
    </>
  );
};

export default PaymentsSubscriptions;
