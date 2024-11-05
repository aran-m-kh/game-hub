import { Card, Heading, Image } from '@chakra-ui/react'
import { Igame } from '@/Hooks/useGames'
import PlatformsIconsList from './PlatformsIconsList'

interface Props {
    game: Igame
}

function GameCart({ game }: Props) {
    return (
        <Card.Root width={'320px'} borderRadius={10} overflow={'hidden'}>
            <Image src={game.background_image}></Image>
            <Card.Body>
                <Heading fontSize={'xl'}>{game.name}</Heading>
                <PlatformsIconsList
                    platforms={game.parent_platforms.map((p) => p.platform)}
                />
            </Card.Body>
        </Card.Root>
    )
}

export default GameCart
