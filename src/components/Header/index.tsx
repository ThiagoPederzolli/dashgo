import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSideBarDrawer } from '../../context/SideBarDrawerContext'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
  const { onOpen } = useSideBarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      align="center"
    >
      { !isWideVersion && (
       <IconButton
        icon={<Icon as={RiMenuLine} />}
        fontSize="24"
        variant="unstyled"
        onClick={onOpen}
        aria-label="Abre a navegação"
        marginRight="2"        
      >

       </IconButton>
     )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex
        align="center"
        marginLeft="auto"        
      >
       <NotificationsNav />
       <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
