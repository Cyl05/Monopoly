import React from "react";
import { HStack, VStack, Heading, Text } from "@chakra-ui/react";
import BulbIcon from "./BulbIcon";
import WaterWorksIcon from "./WaterWorksIcon";

const UtilitiesInfo = (props) => {
  return (
    <VStack align="stretch">
      <Heading textAlign={"center"} paddingBottom={"1vw"}>
        {props.name}
      </Heading>
      <VStack align="stretch" textStyle="xs" gap="2vh">
        <HStack justifyContent="space-between" textStyle="sm" color="#7af0c7">
          <Text as="u">With</Text>
          <Text as="u">Get</Text>
        </HStack>

        <HStack justifyContent="space-between">
          <BulbIcon />
          <Text>${props.rent[0]} * Dice Roll</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <WaterWorksIcon />
          <Text>${props.rent[0]} * Dice Roll</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <HStack>
            <BulbIcon />
            <WaterWorksIcon />
          </HStack>
          <Text>${props.rent[1]} * Dice Roll</Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default UtilitiesInfo;
