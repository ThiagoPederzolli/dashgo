import { Box, useBreakpointValue, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton,DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { useSideBarDrawer } from "../../context/SideBarDrawerContext";
import { SideBarNav } from "./SideBarNav";


export function SideBar() {
  const { isOpen, onClose } = useSideBarDrawer();
  
  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
        <DrawerOverlay>
          <DrawerContent bg="gray.800" padding="4">
            <DrawerCloseButton marginTop="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  return (
    <Box as="aside" width="64" marginRight="8">
      <SideBarNav />
    </Box>
  )
}