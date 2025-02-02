import React from "react";
import {
  Box,
  Heading,
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
  VStack,
} from "@chakra-ui/react";
import { Avatar } from "../chakra-comps/avatar";
import PropertyInfo from "./PropertyInfo";

const Property = (props) => {
  return (
    <HoverCardRoot usePortal={true}>
      <HoverCardTrigger>
        <Box background="black" padding="4" color="white" width="5vw">
          <VStack borderWidth="2px" borderColor="white" padding={"2vh 2vw"}>
            <Avatar size="md" name={props.name} src={props.imgURL} />
            <Heading size="md" textAlign="center">
              {props.name}
            </Heading>
            <Heading paddingTop="5%" color="gray" size="sm">
              {props.price}
            </Heading>
          </VStack>
        </Box>
      </HoverCardTrigger>
      <HoverCardContent width="12.5vw">
        <HoverCardArrow />
        <PropertyInfo />
      </HoverCardContent>
    </HoverCardRoot>
  );
};

export default Property;
