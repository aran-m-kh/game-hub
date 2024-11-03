import useGames from '@/Hooks/useGames'

import { Text } from '@chakra-ui/react'

function GameGrid() {
    const { games, errors } = useGames()

    return (
        <>
            {errors && <Text>{errors}</Text>}
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </>
    )
}

export default GameGrid
