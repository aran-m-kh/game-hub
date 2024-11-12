import { Grid, GridItem } from '@chakra-ui/react'
import Navbar from './component/Navbar'
import GameGrid from './component/GameGrid'
import GenresList from './component/GenresList'

function App() {
    return (
        <Grid
            templateAreas={{
                base: ` "nav" "main"`,
                lg: `   "nav nav" "aside main"`, //more than 1024px
            }}
        >
            <GridItem area="nav">
                <Navbar />
            </GridItem>

            <GridItem hideBelow={'lg'} area="aside" padding={5} width={'200px'}>
                <GenresList />
            </GridItem>

            <GridItem area="main">
                <GameGrid />
            </GridItem>
        </Grid>
    )
}

export default App
