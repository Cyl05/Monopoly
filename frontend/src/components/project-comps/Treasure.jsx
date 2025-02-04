import React from "react";
import { Box, Icon, VStack, Heading } from "@chakra-ui/react";
import { PiTreasureChestDuotone } from "react-icons/pi";

const Treasure = () => (
  <Box background="#993d08">
    <VStack padding={"1vh 1vw"}>
      <Icon fontSize="4vh" textAlign={"center"}>
        <PiTreasureChestDuotone />
      </Icon>
      <Heading size="sm">Treasure</Heading>
    </VStack>
  </Box>
);

export default Treasure;
