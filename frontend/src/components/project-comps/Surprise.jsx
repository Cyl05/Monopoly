import React from "react";
import { Box, Icon, VStack, Heading } from "@chakra-ui/react";
import { FaQuestion } from "react-icons/fa";

const Surprise = () => (
  <Box background="#993d08">
    <VStack padding={"1vh 1vw"}>
      <Icon fontSize="3vh" textAlign={"center"}>
        <FaQuestion />
      </Icon>
      <Heading size="sm">Surprise</Heading>
    </VStack>
  </Box>
);

export default Surprise;
