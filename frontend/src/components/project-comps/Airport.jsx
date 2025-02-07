import React from "react";
import { Heading, VStack, Flex } from "@chakra-ui/react";
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
          <Flex align="center">
            <Heading size="sm" textAlign="center" display="inline">
              {props.name}
            </Heading>
            <FaPlane style={{ marginLeft: "5px" }} />
          </Flex>
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
  );
};

export default Airport;
