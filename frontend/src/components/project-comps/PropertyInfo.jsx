import React from "react";
import { HStack, VStack, Heading, Text } from "@chakra-ui/react";
import HotelIcon from "./HotelIcon";
import HouseIcon from "./HouseIcon";

const PropertyInfo = (props) => {
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
          <Text fontSize="2vh">Rent</Text>
          <Text>{props.rent[0]}</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <HouseIcon />
          <Text>{props.rent[1]}</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <HStack>
            <HouseIcon />
            <HouseIcon />
          </HStack>
          <Text>{props.rent[2]}</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <HStack>
            <HouseIcon />
            <HouseIcon />
            <HouseIcon />
          </HStack>
          <Text>{props.rent[3]}</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <HStack>
            <HouseIcon />
            <HouseIcon />
            <HouseIcon />
            <HouseIcon />
          </HStack>
          <Text>{props.rent[4]}</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <HotelIcon />
          <Text>{props.rent[5]}</Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default PropertyInfo;
