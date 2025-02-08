import React from "react";
import { Box, Icon, VStack, Heading } from "@chakra-ui/react";
import { BiMoneyWithdraw } from "react-icons/bi";

const Tax = (props) => (
  <Box background="gray">
    <VStack padding={"1vh 1vw"}>
      <Icon fontSize="3.75vh" textAlign={"center"}>
        <BiMoneyWithdraw />
      </Icon>
      <Heading size="sm">{props.type}</Heading>
    </VStack>
  </Box>
);

export default Tax;
