import { Box, Flex, Text } from "@chakra-ui/react"

function FlowerItem() {
    return (
        <Box minW='120px' maxW='120px' minH='120px' maxH='120px' rounded='2xl' bg='gray.700' color='gray.600' _hover={{bg: 'gray.600'}}>
            sex
        </Box>
    )
}

export function FlowerList() {
    return (
        <Flex padding={2} gap={2} overflowX={'scroll'}>
            <FlowerItem/>
            <FlowerItem/>
            <FlowerItem/>
            <FlowerItem/>
            <FlowerItem/>
            <Box minW='120px' maxW='120px' minH='120px' maxH='120px' rounded='2xl' bg='gray.700' color='gray.600' _hover={{bg: 'gray.600', color: 'gray.500'}} display='flex' alignItems='center' justifyContent='center'>
                <Text fontSize='4xl'>+</Text>
            </Box>
        </Flex>
    )
}