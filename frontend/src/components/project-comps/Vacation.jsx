import React from "react";
import { Box, Icon, VStack, Heading } from "@chakra-ui/react";
import { FaTreeCity } from "react-icons/fa6";

const Vacation = () => (
  <Box background="#993d08">
    <VStack padding={"1vh 1vw"}>
      <Icon fontSize="4vh" textAlign={"center"}>
        <FaTreeCity />
      </Icon>
      <Heading size="sm">100$</Heading>
    </VStack>
  </Box>
);

export default Vacation;
