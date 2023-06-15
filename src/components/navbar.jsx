import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useSession, signIn, signOut } from 'next-auth/react'

import { useRouter } from 'next/router'

const Links = [
  {
    name: 'Dashboard',
    path: '/dashboard'
  },
  {
    name: 'About',
    path: '/about'
  }
];

const NavLink = ({ selected, link }) => (
  <Link
    color='gray.700'
    px={2}
    py={1}
    bg={selected ? 'gray.200' : null}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.200',
    }}
    href={link.path}>
    {link.name}
  </Link>
);

const Navbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data: session } = useSession()

  const { pathname } = useRouter()

  return (
    <>
      <Box bg={"green.300"} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><Link href="/">PP🪴</Link></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.path} selected={link.path == pathname} link={link}></NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {session &&
              <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    session.user.image
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>{session.user.name}</MenuItem>
                <MenuDivider />
                <MenuItem onClick={signOut}>Sign Out</MenuItem>
              </MenuList>
            </Menu>
            }
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;