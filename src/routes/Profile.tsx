import * as CUR from "@chakra-ui/react";
import * as CUI from "@chakra-ui/icons";
import {
  // React,
  useRef,
  useState,
} from "react";
// import EditableInputControls from "../components/EditableInput/EditableInputControls";
import ProfileInformation from "../components/ProfileMenuList/ProfileInformation";
import AccountManagement from "./../components/ProfileMenuList/AccountManagement";
import PartnersServices from "./../components/ProfileMenuList/PartnersServices";
import PaymentsSubscriptions from "./../components/ProfileMenuList/PaymentsSubscriptions";
import CommunicationNotifications from "./../components/ProfileMenuList/CommunicationNotifications";
import SecurityCenter from "./../components/ProfileMenuList/SecurityCenter";
import HelpPlatform from "./../components/ProfileMenuList/HelpPlatform";

const Profile = () => {
  const portalRef = useRef<HTMLDivElement | null>(null);
  //@ts-ignore
  const [displayPanel, setDisplayPanel] = useState([
    {
      section: 0,
      title: "Profile Information",
      element: <ProfileInformation />,
    },
    { section: 1, title: "Account Management", element: <AccountManagement /> },
    { section: 2, title: "Partners Services", element: <PartnersServices /> },
    {
      section: 3,
      title: "Payments Subscriptions",
      element: <PaymentsSubscriptions />,
    },
    {
      section: 4,
      title: "Communication Notifications",
      element: <CommunicationNotifications />,
    },
    { section: 5, title: "Security Center", element: <SecurityCenter /> },
    { section: 6, title: "Help Platform", element: <HelpPlatform /> },
  ]);

  // const currentRef = useRef();

  return (
    <>
      <CUR.Grid
        templateAreas={{
          base: `"sect1 sect2"`,
        }}
        templateColumns={`repeat(6,1fr)`}
        templateRows={`repeat(1,1fr)`}
        h={`100%`}
        w={`100%`}
      >
        <CUR.GridItem area={"sect1"} colSpan={1}>
          <CUR.Accordion>
            {displayPanel.map(({ section, title, element }) => (
              <CUR.AccordionItem key={section} as={CUR.Card} borderRadius={0}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <CUR.AccordionButton
                        borderRight={isExpanded ? 0 : "1px"}
                        borderColor={isExpanded ? "" : "whiteAlpha.300"}
                      >
                        <CUR.Box as="span" flex="1" textAlign="left">
                          {title}
                        </CUR.Box>
                        {isExpanded ? null : <CUI.ChevronRightIcon />}
                      </CUR.AccordionButton>
                    </h2>
                    <CUR.Portal containerRef={portalRef}>
                      <CUR.AccordionPanel
                        p={0}
                        h={portalRef.current?.clientHeight}
                      >
                        <CUR.Card
                          h={"100%"}
                          borderRadius={0}
                          borderTop={"1px"}
                          borderRight={"1px"}
                          borderBottom={"1px"}
                          borderTopRightRadius={10}
                          borderBottomLeftRadius={10}
                          borderBottomRightRadius={10}
                          borderColor={"whiteAlpha.300"}
                        >
                          {element}
                        </CUR.Card>
                      </CUR.AccordionPanel>
                    </CUR.Portal>
                  </>
                )}
              </CUR.AccordionItem>
            ))}
          </CUR.Accordion>
        </CUR.GridItem>
        <CUR.GridItem area={"sect2"} colSpan={5} ref={portalRef}></CUR.GridItem>
      </CUR.Grid>
    </>
  );
};

export default Profile;
