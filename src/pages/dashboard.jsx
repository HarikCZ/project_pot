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
  const { data: session } = useSession({ required: true })

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [flowers, setFlowers] = useState([])
  const [flowerIndex, setFlowerIndex] = useState(0)
  const [refreshToken, setRefreshToken] = useState(Math.random())

  useEffect(() => {
    if (!props.fsdata)
      return;

    for (let i = 0; i < props.fsdata.length; i++) {
      props.fsdata[i].id = Math.random();
    }

    setFlowers(props.fsdata)
    setFlowerIndex(Math.min(props.fsdata.length, flowerIndex))
  }, [props.fsdata])

  useEffect(() => {
    fetch('/api/update').then(async (res) => {
      const data = await res.json()

      for (let i = 0; i < data.length; i++) {
        data[i].id = Math.random();
      }

      setFlowers(data)

      setTimeout(() => setRefreshToken(Math.random), 5000)
      
      console.log('refresh')
    })
  }, [refreshToken])

  /* <div style={background: '#36393e'}> */
  return <>
    <Navbar />
    <Container>
      <Flex gap={4} direction='column'>
        <Text fontSize='3xl' color='green.300'>Dashboard</Text>
        
        <FlowerList callback={(i) => setFlowerIndex(i)} data={flowers}></FlowerList>

        <Box gap={2} display='flex' rounded='2xl' w='100%' bg='gray.700'>
              <Image w='30%' roundedBottomLeft='2xl' roundedTopLeft='2xl' src='https://www.picclickimg.com/gtkAAOSw5YVkZQpo/Bill-and-Ben-Flower-Pot-men-Weed-Figure.webp' alt='Dan Abramov' />
              <Box w='full'>
                {flowerIndex < flowers.length &&
                  <>
                    <h1>{flowers[flowerIndex].name}</h1>
                    <p>Teplota vzduchu: {flowers[flowerIndex].airtemp}°C</p>
                    <p>Vlhkost vzduchu: {flowers[flowerIndex].airhum}%</p>
                    <p>Světlo v místnosti: {flowers[flowerIndex].light} Lux</p>
                    <p>Vlhkost půdy: {flowers[flowerIndex].potmoist}</p>
                  </>
                }
              </Box>
        </Box>
      </Flex>
    </Container>
  </>
}

export default Home;
