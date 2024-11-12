import { Box } from '@chakra-ui/react'
import React from 'react'

interface probs {
    children: React.ReactNode
}

function GameContainer({ children }: probs) {
    return (
        <Box borderRadius={10} overflow={'hidden'}>
            {children}
        </Box>
    )
}

export default GameContainer
