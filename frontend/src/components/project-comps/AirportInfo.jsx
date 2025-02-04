import React from "react";
import { HStack, VStack, Heading, Text } from "@chakra-ui/react";
import AirportIcon from "./AirportIcon";

const AirportInfo = (props) => {
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
          <AirportIcon />
          <Text>{props.rent[0]}</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <HStack>
            <AirportIcon />
            <AirportIcon />
          </HStack>
          <Text>{props.rent[1]}</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <HStack>
            <AirportIcon />
            <AirportIcon />
            <AirportIcon />
          </HStack>
          <Text>{props.rent[2]}</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <HStack>
            <AirportIcon />
            <AirportIcon />
            <AirportIcon />
            <AirportIcon />
          </HStack>
          <Text>{props.rent[3]}</Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default AirportInfo;
