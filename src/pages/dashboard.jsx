// eyy don't forget to follow https://github.com/Zexyp

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import {
  getFirestore,
  collection,
  getDocs
} from 'firebase/firestore'
import 'firebase/firestore'

// import {getServerSession} from 'next-auth/next'
// import {authOptions} from './…/api/auth/[…nextauth]/route'

import { Text, Heading, Container, VStack, Box, HStack, Button, Flex, Spacer, Image, Avatar } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import Navbar from '../components/navbar'
import { FlowerList } from '../components/flowerlist'

import '../../firebase.config'

export async function getServerSideProps() {
  let db = getFirestore()

  let colRef = collection(db, 'jake')

  let snapshot = await getDocs(colRef)

  let fsdata = []

  snapshot.forEach(d => {
    fsdata.push(d.data())
  })
  
  return {
    props: {
      fsdata
    }
  }
}

const Home = (props) => {
  console.log(props.fsdata)
  const { data: session } = useSession({ required: true })

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [flowers, setFlowers] = useState()
  const [refreshToken, setRefreshToken] = useState(Math.random())

  /* <div style={background: '#36393e'}> */
  return <>
    <Navbar />
    <Container>
      <Flex gap={4} direction='column'>
        <Text fontSize='3xl' color='green.300'>Dashboard</Text>
        
        <FlowerList></FlowerList>

        <Box gap={2} display='flex' rounded='2xl' w='100%' bg='gray.700'>
              <Image w='30%' roundedBottomLeft='2xl' roundedTopLeft='2xl' src='https://www.picclickimg.com/gtkAAOSw5YVkZQpo/Bill-and-Ben-Flower-Pot-men-Weed-Figure.webp' alt='Dan Abramov' />
              <Box w='full'>
                <p>Teplota vzduchu: {props.fsdata[0].airtemp}°C</p>
                <p>Vlhkost vzduchu: {props.fsdata[0].airhum}%</p>
                <p>Světlo v místnosti: {props.fsdata[0].light} Lux</p>
              </Box>
        </Box>
      </Flex>
    </Container>
  </>
}

export default Home;
