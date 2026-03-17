import React from 'react'
import type { Game } from "../../types/Game"
import { Card, Heading, Image } from '@chakra-ui/react'

interface Props {
  game: Game
}

const GameC = ({ game }: Props) => {
  return (
    <>
    <Card.Root>
        <Image src = {game.image}> </Image>
        <Card.Body>
            <Heading fontSize="2xl">{game.title}</Heading>
        </Card.Body>
    </Card.Root>
    </>
  )
}

export default GameC