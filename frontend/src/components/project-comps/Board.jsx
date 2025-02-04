import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Property from "./Property";
import Vacation from "./Vacation";
import GoToJail from "./GoToJail";
import Start from "./Start";
import Jail from "./Jail";
import Airport from "./Airport";
import Utility from "./Utilties";
import Treasure from "./Treasure";
import Surprise from "./Surprise";

const Board = () => {
  return (
    <Box h={"100vh"} w={"60vw"}>
      <Grid
        templateColumns="repeat(11, 1fr)"
        templateRows="repeat(11, 1fr)"
        height={"100vh"}
      >
        <Start />
        <Property
          key={4}
          name="New York City"
          price={400}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Airport
          key={1}
          name="Kempe Gowda"
          price={40}
          rent={[10, 20, 30, 40]}
        />
        <Utility
          key={1}
          name="Electric Company"
          price={150}
          rent={["4 Times Dice Roll", "10 Times Dice Roll"]}
        />
        <Utility
          key={2}
          name="Water Works"
          price={150}
          rent={["4 Times Dice Roll", "10 Times Dice Roll"]}
        />
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <Surprise />
        <Treasure />
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <Jail />
        {/* both columns alternating */}
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        {/* left column */}
        <GridItem //Center
          colSpan={9}
          rowSpan={9}
          background="blue"
          borderRadius={"2%"}
          border={"2px solid black"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>{" "}
        {/* right column */}
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GoToJail></GoToJail>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <GridItem
          background="green"
          border={"2px solid black"}
          borderRadius={"10%"}
        ></GridItem>
        <Vacation></Vacation>
      </Grid>
    </Box>
  );
};

export default Board;
