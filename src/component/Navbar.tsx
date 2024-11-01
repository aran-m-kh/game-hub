import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.png'
function Navbar() {
    return (
        <HStack>
            <Image src={logo} alt="logo" boxSize={'80px'} />
            <Text>NavBar</Text>
        </HStack>
    )
}

export default Navbar
