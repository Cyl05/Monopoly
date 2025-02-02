import React from "react";
import { Box, Icon, VStack, Heading } from "@chakra-ui/react";
import { GiArrest } from "react-icons/gi";

const GoToJail = () => (
  <Box background="maroon">
    <VStack padding={"1vh 1vw"}>
      <Icon fontSize="4vh" textAlign={"center"}>
        <GiArrest />
      </Icon>
      <Heading size="sm">Go To Jail</Heading>
    </VStack>
  </Box>
);

export default GoToJail;
