import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {
    return (
        <Grid
            templateAreas={{
                base: ` "nav" "main"`,
                lg: ` "nav nav" "aside main"`, //more than 1024px
            }}
        >
            <GridItem area="nav" bg={'red.300'}>
                nav
            </GridItem>

            <GridItem hideBelow={'lg'} area="aside" bg={'blue.300'}>
                aside
            </GridItem>

            <GridItem area="main" bg={'green.300'}>
                main
            </GridItem>
        </Grid>
    )
}

export default App
