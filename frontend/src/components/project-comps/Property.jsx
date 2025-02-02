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
          <Box
            background="#0e0238"
            color="white"
            width="5vw"
            border={"1px solid white"}
            borderRadius="1%"
          >
            <VStack padding={"1vh 1vw"}>
              <Heading size="sm" textAlign={"center"}>
                {props.name}
              </Heading>
              <Heading color="gray" size="sm">
                {props.price}$
              </Heading>
            </VStack>
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>
            <PropertyInfo />
          </PopoverBody>
        </PopoverContent>
      </PopoverRoot>
    </>
  );
};

export default Property;
