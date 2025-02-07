import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import UtilitiesInfo from "./UtilitiesInfo";
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "../chakra-comps/popover";
import BulbIcon from "./BulbIcon";
import WaterWorksIcon from "./WaterWorksIcon";

const Utility = (props) => {
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
            <UtilitiesInfo {...props} />
          </PopoverBody>
        </PopoverContent>
      </PopoverRoot>
    </>
  );
};

export default Utility;
