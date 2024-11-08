import { Badge } from '@chakra-ui/react'

interface Props {
    score: number
}

function CriticScore({ score }: Props) {
    return (
        <Badge
            bg={score > 85 ? 'green/50' : 'yellow/50'}
            width="fit-content"
            padding={2}
            fontSize={'14px'}
        >
            {score}
        </Badge>
    )
}

interface Props {
    score: number
}
export default CriticScore
