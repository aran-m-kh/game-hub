import { SkeletonCircle, SkeletonText } from '@/components/ui/skeleton'
import { Card } from '@chakra-ui/react'

function Skeleton() {
    return (
        <Card.Root>
            <SkeletonCircle height="200px" />
            <Card.Body>
                <SkeletonText />
            </Card.Body>
        </Card.Root>
    )
}

export default Skeleton
