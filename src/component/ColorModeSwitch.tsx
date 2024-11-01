import { useColorMode } from '@/components/ui/color-mode'
import { HStack, Text } from '@chakra-ui/react'
import { Switch } from '@/components/ui/switch'
function ColorModeSwitch() {
    const { toggleColorMode, colorMode } = useColorMode()
    return (
        <HStack>
            <Switch
                colorPalette={'green'}
                WebkitAppearance={colorMode === 'dark' ? 'light' : 'dark'}
                onCheckedChange={toggleColorMode}
            ></Switch>
            <Text>Light Mode</Text>
        </HStack>
    )
}

export default ColorModeSwitch
