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
                {/* First row */}
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>
                {/* <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}> */}
                    
                {/* </GridItem> */}
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
                <GridItem background="green" border={'2px solid black'} borderRadius={'10%'}></GridItem>

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