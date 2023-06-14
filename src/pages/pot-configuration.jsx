// import { Main } from 'next/document'
// import { MainUI } from "../components/mainUI"
import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Text, Heading, Container, VStack, Box, HStack, Button, Flex, Spacer, Image, Avatar } from '@chakra-ui/react'

const Home = () => {

  const {stage, setStage} = useState(1)

  const scan = () => {
    navigator.bluetooth.requestDevice({  filters: [{
      namePrefix: "Kry"
    }]})
  }

  return <>

<Flex alignItems='center' position='absolute' maxW='full' w='full' h='100vh' bg='gray.800'>

  <Container maxW='900px' color='white'>
  <VStack align='stretch'>
      {/* <Flex alignItems='center' gap='3'>
        <Box>
          <Text fontSize='3xl' color='green.300'>Pot Configuration</Text>
        </Box>
      </Flex> */}

    <Container bg='gray.700' maxW='full' padding='12' rounded='2xl'>
      <Heading as='h1' size='xl' align='left'>🔌 Pot Configuration</Heading>
      <Flex gap={2} mt={12}>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='start'
        justifyContent='start'
        boxSize='300'
        minW='300'
        rounded='2xl'
        p='6'
        gap='4'
        bg='green.400'
        color='green.900'
      >
        <Text fontSize='xl' fontWeight='medium'>1. Connect Pot via Bluetooth</Text>
        <Text fontWeight='medium'>Click on Connect and select "SmartPot" in bluetooth menu.</Text>
      </Box>
      {/* <Image boxSize='300px' rounded='2xl' src='https://m.media-amazon.com/images/M/MV5BODM1MDgyNDU4M15BMl5BanBnXkFtZTgwNjY5Njg3MjE@._V1_.jpg' alt='Dan Abramov' /> */}
      <Box w='full' bg='white' rounded='2xl' display='flex' alignItems='center' justifyContent='center'>
      <Button onClick={() => scan()} colorScheme='blue' leftIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bluetooth" viewBox="0 0 16 16"><path fill-rule="evenodd" d="m8.543 3.948 1.316 1.316L8.543 6.58V3.948Zm0 8.104 1.316-1.316L8.543 9.42v2.632Zm-1.41-4.043L4.275 5.133l.827-.827L7.377 6.58V1.128l4.137 4.136L8.787 8.01l2.745 2.745-4.136 4.137V9.42l-2.294 2.274-.827-.827L7.133 8.01ZM7.903 16c3.498 0 5.904-1.655 5.904-8.01 0-6.335-2.406-7.99-5.903-7.99C4.407 0 2 1.655 2 8.01 2 14.344 4.407 16 7.904 16Z"/></svg>}>
        Connect
      </Button>
      </Box>
    </Flex>

    </Container>


  </VStack>

  </Container>
</Flex>
  </>
}

export default Home
