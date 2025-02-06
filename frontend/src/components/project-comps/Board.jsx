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
import { generateBoard } from "../../board.js";

const Board = () => {
  const [properties, setProperties] = React.useState();

  async function getProperties() {
    const response = await generateBoard();
    console.log(response);
    setProperties(response);
  }
  
  const nonProps = {2: "treasure", 7: "surprise", 18: "surprise", 24: "treasure", 25: "treasure", 38: "surprise", 4: "income", 14: "luxury", 12: "center"};



  React.useEffect(() => {
    getProperties();
  }, []);

  return (
    <Box h={"100vh"} w={"60vw"}>
      <Grid
        templateColumns="repeat(11, 1fr)"
        templateRows="repeat(11, 1fr)"
        height={"100vh"}
      >
        {
          Array.from({ length: 41 }, (_, i) => {
            const property = properties.find((property) => property.id == i);
            const otherItem = nonProps[i];

            if (property) {
              return <Property 
                key={i}
                name={property.name}
                price={property.price}
                rent={property.rent}
              />
            } else {
              switch (otherItem) {
                case "treasure":
                  return <Treasure />
                case "surprise":
                  return <Surprise />
                case "income":
                  return <Tax type="%10" />
                case "luxury":
                  return <Tax type="$75" />
              }
            }
          })
        }
      </Grid>
    </Box>
  );
};

export default Board;
