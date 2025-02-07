import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Property from "./Property";
import Vacation from "./Vacation";
import GoToJail from "./GoToJail";
import Start from "./Start";
import Jail from "./Jail";
import Airport from "./Airport";
import Utility from "./Utilties";
import Tax from "./Tax.jsx";
import Treasure from "./Treasure";
import Surprise from "./Surprise";
import { generateBoard } from "../../board.js";

const Board = () => {
  const [properties, setProperties] = React.useState();

  async function getProperties() {
    const response = await generateBoard();
    setProperties(response);
  }

  const nonProps = { 2: "treasure", 7: "surprise", 18: "surprise", 24: "treasure", 25: "treasure", 38: "surprise", 4: "income", 14: "luxury", 12: "center", 0: "Start", 10: "Jail", 30: "Gotojail", 40: "Vacation" };

  React.useEffect(() => {
    getProperties();
  }, []);

  return (
    properties &&
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
              if (property.flag == "airport") {
                return <Airport
                  key={i}
                  name={property.city}
                  price={property.cost}
                  rent={property.rent}
                />
              } else if (property.flag == "utility") {
                return <Utility
                  key={i}
                  name={property.city}
                  price={property.cost}
                  rent={property.rent}
                />
              }
              return <Property
                key={i}
                name={property.city}
                price={property.cost}
                rent={property.rent}
                color={property.color}
                buildingPrice={property.buildingPrice}
              />
            } else {
              switch (otherItem) {
                case "treasure":
                  return <Treasure key={i} />
                case "surprise":
                  return <Surprise key={i} />
                case "income":
                  return <Tax type="%10" key={i} />
                case "luxury":
                  return <Tax type="$75" key={i} />
                case "Start":
                  return <Start key={i} />
                case "Jail":
                  return <Jail key={i} />
                case "Gotojail":
                  return <GoToJail key={i} />
                case "Vacation":
                  return <Vacation key={i} />
                case "center":
                  return <GridItem 
                    key={i}
                    colSpan={9}
                    rowSpan={9}
                    background="blue"
                    borderRadius={"2%"}
                    border={"2px solid black"}
                  ></GridItem>
              }
            }
          })
        }
      </Grid>
    </Box>
  );
};

export default Board;
