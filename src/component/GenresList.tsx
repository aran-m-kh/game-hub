import UseGendres from '@/Hooks/UseGendres'
import getCropedImage from '@/sevices/getCropedImage'
import {
    Text,
    HStack,
    ListItem,
    Image,
    ListRoot,
    Spinner,
} from '@chakra-ui/react'

function GenresList() {
    const { data, isLoading, errors } = UseGendres()

    if (isLoading) return <Spinner />

    if (errors) return null

    return (
        <ListRoot>
            {data.map((genre) => (
                <ListItem listStyle={'none'} paddingY="8px" key={genre.id}>
                    <HStack>
                        <Image
                            boxSize="52px"
                            borderRadius={8}
                            src={getCropedImage(genre.image_background)}
                        />
                        <Text fontSize="lg">{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </ListRoot>
    )
}

export default GenresList
