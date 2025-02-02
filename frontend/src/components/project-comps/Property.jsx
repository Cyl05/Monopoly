import React from "react";
import {
  Box,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { Avatar } from "../chakra-comps/avatar";
import PropertyInfo from "./PropertyInfo";
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger
} from "../chakra-comps/popover";

const Property = (props) => {
  return (
    <>
      <PopoverRoot>
        <PopoverTrigger asChild>
          <Box background="black" color="white" width="5vw" border={'1px solid white'}>
            <VStack padding={"2vh 2vw"}>
              <Avatar size="xs" name={props.name} src={props.imgURL} />
              <Heading size="xs" textAlign="center">
                {props.name}
              </Heading>
              <Heading paddingTop="5%" color="gray" size="sm">
                {props.price}
              </Heading>
            </VStack>
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>
            {/* <PopoverTitle fontWeight="medium">Naruto Form</PopoverTitle> */}
            <PropertyInfo />
          </PopoverBody>
        </PopoverContent>
      </PopoverRoot>

    </>
  );
};

export default Property;
