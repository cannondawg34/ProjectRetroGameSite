import { Box, Button, Container, Heading, HStack, VStack, Text, Image } from '@chakra-ui/react'
import React from 'react'

const HeroSection = () => {
  return (
    <Box bg = "gray.400" color = "white" py = {20} minH = "50vh" w = "100%">
        <HStack gap ={4} align = 'center' justify="center">
            <VStack align="center" gap={6} textAlign="center">
              <Heading fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.1">
                Level Up Your Collection
              </Heading>
                <Text fontSize = {{base: "md", md: 'xl' }} color = 'gray.300' maxW = "600px">
                Shop for all of your classic consoles, retro games, and other accessories
                </Text>
                <Button size = 'lg'
                bg = "purple.400"
                color = "white"
                _hover = {{bg: "purple.300"}}
                borderRadius = "md"> Shop Now
                </Button>
            </VStack>
            <Image/>
        </HStack>
    </Box>
  )
}

export default HeroSection