import useGames from '@/Hooks/useGames'
import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCart from './GameCart'
import GameSkeleton from './GameSkeleton'

function GameGrid() {
    const { games, errors, isLoading } = useGames()
    const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <>
            {errors && <Text>{errors}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                gap={6}
                padding={10}
            >
                {isLoading &&
                    Skeletons.map((skeleton) => (
                        <GameSkeleton key={skeleton} />
                    ))}
                {games.map((game) => (
                    <GameCart key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid
