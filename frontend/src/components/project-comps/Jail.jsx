import React from "react";
import { Box, Icon, VStack, Heading } from "@chakra-ui/react";
import { GiWindowBars } from "react-icons/gi";

const Jail = () => {
  return (
    <Box background={"black"}>
      <VStack padding={"1vh 1vw"}>
        <Icon fontSize="4vh" textAlign={"center"}>
          <GiWindowBars />
        </Icon>
        <Heading size="sm">Visiting</Heading>
      </VStack>
    </Box>
  );
};

export default Jail;
