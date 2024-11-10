import { Card, Heading, HStack, Image } from '@chakra-ui/react'
import { Igame } from '@/Hooks/useGames'
import PlatformsIconsList from './PlatformsIconsList'
import CriticScore from './CriticScore'
import getCropedImage from '@/sevices/getCropedImage'
interface Props {
    game: Igame
}

function GameCart({ game }: Props) {
    return (
        <Card.Root>
            <Image
                src={getCropedImage(game.background_image)}
                alt={game.background_image}
            ></Image>
            <Card.Body>
                <Heading fontSize={'xl'}>{game.name}</Heading>
                <HStack justifyContent={'space-between'} marginTop={2}>
                    <PlatformsIconsList
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    />
                    <CriticScore score={game.metacritic}></CriticScore>
                </HStack>
            </Card.Body>
        </Card.Root>
    )
}

export default GameCart
