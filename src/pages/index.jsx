// import { Main } from 'next/document'
// import { MainUI } from "../components/mainUI"
import Link from 'next/link'
import { Text, Heading, Container, VStack, Box, HStack, Button, Flex, Spacer, Image } from '@chakra-ui/react'
import Navbar from '../components/navbar'

const Home = () => {
  
  // return <MainUI />

  return <>
  
{/* <div style={background: '#36393e'}> */}

<Flex alignItems='center' position='absolute' maxW='full' w='full' h='100vh' bg='gray.800'>
  <Container maxW='900px' color='white'>
  <VStack align='stretch'>
      <Flex alignItems='center'>
      <Box>
        <Text color='gray.300'>Created by Jakub Harcarik</Text>
      </Box>
      <Spacer />
      <Link href='/dashboard'>
        <Button colorScheme='green' variant='solid'>
          Go into dashboard →
        </Button>
      </Link>
    </Flex>

    <Container bg='green.400' maxW='full' padding='12' rounded='2xl'>
      <Heading as='h1' size='2xl' align='left'>Project pot 🪴⚡️<br/> for your plant and beyond.</Heading>
      <Box mt='6' color='green.900' maxW='3xl'>
        There are many benefits to a joint design and development system. Not only
        does it bring benefits to the design team, but it also brings benefits to
        engineering teams. It makes sure that our experiences have a consistent look
        and feel, not just in our design specs, but in production.
      </Box>
    </Container>


    <Flex gap={2}>
      <Box
        display='flex'
        alignItems='end'
        justifyContent='start'
        bgImage="url('https://m.media-amazon.com/images/M/MV5BODM1MDgyNDU4M15BMl5BanBnXkFtZTgwNjY5Njg3MjE@._V1_.jpg')"
        bgPosition='center'
        bgRepeat='no-repeat'
        boxSize='300'
        minW='300'
        rounded='2xl'
        p='6'
      >
        <Text fontSize='4xl' fontWeight='bold'>Pot 3.0</Text>
      </Box>
      {/* <Image boxSize='300px' rounded='2xl' src='https://m.media-amazon.com/images/M/MV5BODM1MDgyNDU4M15BMl5BanBnXkFtZTgwNjY5Njg3MjE@._V1_.jpg' alt='Dan Abramov' /> */}
      <Box w='full' bg='green.200' rounded='2xl'>
        {/* <Text>Text here</Text> */}
      </Box>
    </Flex>

  </VStack>

  </Container>
{/* </div>   */}

</Flex>

  </>



}

export default Home
