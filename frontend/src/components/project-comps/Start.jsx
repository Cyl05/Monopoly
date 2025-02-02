import React from "react";
import { Box, Icon, VStack, Heading } from "@chakra-ui/react";
import { MdStart } from "react-icons/md";

const Start = () => (
  <Box background="red">
    <VStack padding={"1vh 1vw"}>
      <Icon fontSize="4vh" textAlign={"center"}>
        <MdStart />
      </Icon>
      <Heading size="sm">GO</Heading>
    </VStack>
  </Box>
);

export default Start;
