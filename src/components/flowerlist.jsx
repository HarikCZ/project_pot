import { Box, Flex, Text, Button } from "@chakra-ui/react"
import { useState, useEffect } from 'react'
import Link from 'next/link';

function FlowerItem({name, onClick}) {
    return (
        <Button minW='120px' onClick={onClick} maxW='120px' minH='120px' maxH='120px' rounded='2xl' bg='gray.700' color='gray.600' _hover={{bg: 'gray.600', color: 'gray.500'}} display='flex' alignItems='center' justifyContent='center'>
            <Text fontSize='4xl'>{name}</Text>
        </Button>
    )
}

export function FlowerList({data, callback}) {
    return (
        <Flex padding={2} gap={2} overflowX={'scroll'}>
            {data && data.map((flower, i) => {
                return <FlowerItem onClick={() => callback(i)} key={flower.id} name={flower.name}/>
            })}
            <Link href='pot-configuration'>
                <Box minW='120px' maxW='120px' minH='120px' maxH='120px' rounded='2xl' bg='gray.700' color='gray.600' _hover={{bg: 'gray.600', color: 'gray.500'}} display='flex' alignItems='center' justifyContent='center'>
                        <Text fontSize='4xl'>+</Text>
                </Box>
            </Link>
        </Flex>
    )
}