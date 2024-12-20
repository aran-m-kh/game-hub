import { Iplatform } from '@/Hooks/useGames'
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { HStack, Image } from '@chakra-ui/react'
import { IconType } from 'react-icons'
interface Probs {
    platforms: Iplatform[]
}

function PlatformsIconsList({ platforms }: Probs) {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        android: FaAndroid,
        web: BsGlobe,
    }

    return (
        <HStack marginY={2}>
            {platforms.map((platform) => (
                <Image
                    key={platform.id}
                    as={iconMap[platform.slug]}
                    color={'gray.500'}
                />
            ))}
        </HStack>
    )
}

export default PlatformsIconsList
