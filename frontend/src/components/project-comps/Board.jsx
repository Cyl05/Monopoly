import { Box, Button, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import Property from './Property';

const Board = () => {
    return (
        <Box h={'100vh'} w={'60vw'}>
            <Grid
                templateColumns="repeat(11, 1fr)"
                templateRows="repeat(11, 1fr)"
                height={'100vh'}
            >
                <Property
                    key={10}
                    name="START"
                    price=""
                    imgURL={'https://image.similarpng.com/file/similarpng/very-thumbnail/2021/04/Green-arrow-icon-isolated-on-transparent-background-PNG.png'}
                />
                <Property
                    key={4}
                    name="New York"
                    price={400}
                    imgURL={
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/255px-Flag_of_the_United_States_%28Pantone%29.svg.png"
                    }
                />
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <Property key={5} name="Passing by" price="" imgURL="https://i.postimg.cc/BQG6xJXX/image.png" />

                {/* both columns alternating */}
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem> {/* left column */}
                <GridItem colSpan={9} rowSpan={9} background="green" borderRadius={'2%'} border={'2px solid black'}></GridItem> {/*central box*/}
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem> {/* right column */}
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
            </Grid>
        </Box>
    );
}

export default Board;