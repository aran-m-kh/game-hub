import APIProvide from '@/sevices/API-provide'
import { Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

interface Igame {
    id: number
    name: string
}

interface IfetchGameResponse {
    results: Igame[]
    count: number
}
function GameGrid() {
    const [games, setGames] = useState<Igame[]>([])
    const [errors, setErrors] = useState<string>('')

    useEffect(() => {
        APIProvide.get<IfetchGameResponse>('/games')
            .then((response) => {
                setGames(response.data.results)
            })
            .catch((error) => {
                setErrors(error.message)
            })
    }, [])

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
