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
        <Property
          key={1}
          name="New York City"
          price={400}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={2}
          name="Los Angeles"
          price={450}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={3}
          name="Chicago"
          price={420}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={4}
          name="Houston"
          price={410}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={5}
          name="Phoenix"
          price={430}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={6}
          name="Philadelphia"
          price={440}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={7}
          name="San Antonio"
          price={395}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={8}
          name="San Diego"
          price={460}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={9}
          name="Dallas"
          price={415}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={10}
          name="San Jose"
          price={470}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={11}
          name="Austin"
          price={400}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={12}
          name="Texas"
          price={400}
          rent={[10, 20, 30, 40, 50, 60]}
        />

        <GridItem
          colSpan={9}
          rowSpan={9}
          background="blue"
          borderRadius={"2%"}
          border={"2px solid black"}
        ></GridItem>
        <Property
          key={13}
          name="Fort Worth"
          price={405}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={14}
          name="Columbus"
          price={395}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={15}
          name="San Francisco"
          price={480}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={16}
          name="Charlotte"
          price={400}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={17}
          name="Indianapolis"
          price={390}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={18}
          name="Seattle"
          price={450}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={19}
          name="Denver"
          price={440}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={20}
          name="Washington D.C."
          price={470}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={21}
          name="Boston"
          price={460}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={22}
          name="El Paso"
          price={380}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={23}
          name="Nashville"
          price={410}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={24}
          name="Detroit"
          price={370}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={25}
          name="Oklahoma City"
          price={385}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={26}
          name="Portland"
          price={430}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={27}
          name="Las Vegas"
          price={420}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={28}
          name="Memphis"
          price={375}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={29}
          name="Louisville"
          price={380}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={30}
          name="Baltimore"
          price={400}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={31}
          name="Milwaukee"
          price={390}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={32}
          name="Albuquerque"
          price={370}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={33}
          name="Tucson"
          price={360}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={34}
          name="Fresno"
          price={365}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={35}
          name="Sacramento"
          price={410}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={36}
          name="Mesa"
          price={380}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={37}
          name="Kansas City"
          price={390}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={38}
          name="Atlanta"
          price={420}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={39}
          name="Colorado Springs"
          price={400}
          rent={[10, 20, 30, 40, 50, 60]}
        />
        <Property
          key={40}
          name="Miami"
          price={460}
          rent={[10, 20, 30, 40, 50, 60]}
        />
      </Grid>
    </Box>
  );
};

export default Board;
