import { Card, Heading, Image } from '@chakra-ui/react'
import { Igame } from '@/Hooks/useGames'

interface Props {
    game: Igame
}

function GameCart({ game }: Props) {
    return (
        <Card.Root
            width={'320px'}
            borderRadius={10}
            overflow={'hidden'}
            justifyContent={'space-between'}
        >
            <Image src={game.background_image}></Image>
            <Card.Body>
                <Heading fontSize={'xl'}>{game.name}</Heading>
            </Card.Body>
        </Card.Root>
    )
}

export default GameCart
