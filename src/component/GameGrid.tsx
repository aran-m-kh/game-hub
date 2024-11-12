import useGames from '@/Hooks/useGames'
import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCart from './GameCart'
import GameSkeleton from './GameSkeleton'
import GameContainer from './GameContainer'

function GameGrid() {
    const { data, errors, isLoading } = useGames()
    const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <>
            {errors && <Text>{errors}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                gap={4}
                padding={10}
            >
                {isLoading &&
                    Skeletons.map((skeleton) => (
                        <GameContainer>
                            <GameSkeleton key={skeleton} />
                        </GameContainer>
                    ))}
                {data.map((game) => (
                    <GameContainer>
                        <GameCart key={game.id} game={game} />
                    </GameContainer>
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid
