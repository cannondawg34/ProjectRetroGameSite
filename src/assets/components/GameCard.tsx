import type { Game } from "../../types/Game";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={3}>
      <Image src={game.image} alt={game.title} />
      <Heading fontSize="lg" mt={3}>
        {game.title}
      </Heading>
      <Text>{game.price}</Text>
      <Text>{game.platform}</Text>
    </Box>
  );
};

export default GameCard;