import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "../chakra-comps/popover";
import AirportInfo from "./AirportInfo";
import { FaPlane } from "react-icons/fa";

const Airport = (props) => {
  return (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <VStack padding={"1vh 1vw"}>
          <Heading size="sm"
            textAlign="center"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            maxWidth="70%">
            {props.name}
          </Heading>
          <Heading color="gray" size="sm">
            {props.price}$
          </Heading>
          <FaPlane />
        </VStack>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <AirportInfo {...props} />
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  );
};

export default Airport;
