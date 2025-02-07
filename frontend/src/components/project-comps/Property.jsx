import React from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";
import PropertyInfo from "./PropertyInfo";
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "../chakra-comps/popover";

const Property = (props) => {
  return (
    <>
      <PopoverRoot>
        <PopoverTrigger asChild>
          <VStack padding={"1vh 1vw"} background={props.color}>
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
            <PropertyInfo {...props} />
          </PopoverBody>
        </PopoverContent>
      </PopoverRoot>
    </>
  );
};

export default Property;
