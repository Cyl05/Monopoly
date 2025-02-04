import React from "react";
import { Box, Heading, VStack, Icon } from "@chakra-ui/react";
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "../chakra-comps/popover";
import AirportInfo from "./AirportInfo";

const Airport = (props) => {
  return (
    <>
      <PopoverRoot>
        <PopoverTrigger asChild>
          <VStack padding={"1vh 1vw"}>
            <Heading size="sm" textAlign={"center"}>
              {props.name}
            </Heading>
            <Heading color="gray" size="sm">
              {props.price}$
            </Heading>
          </VStack>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>
            <AirportInfo {...props} />
          </PopoverBody>
        </PopoverContent>
      </PopoverRoot>
    </>
  );
};

export default Airport;
