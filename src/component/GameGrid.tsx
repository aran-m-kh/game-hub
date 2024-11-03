import useGames from '@/Hooks/useGames'
import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCart from './GameCart'

function GameGrid() {
    const { games, errors } = useGames()

    return (
        <>
            {errors && <Text>{errors}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                gap={6}
                padding={10}
            >
                {games.map((game) => (
                    <GameCart key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid
