import React from "react";
import { HStack, VStack, Heading, Text } from "@chakra-ui/react";
import HotelIcon from "./HotelIcon";
import HouseIcon from "./HouseIcon";

const PropertyInfo = (props) => {
  return (
    <VStack align="stretch">
      <Heading textAlign={"center"} paddingBottom={"1vw"}>
        New York
      </Heading>
      <VStack align="stretch" textStyle="xs" gap="2vh">
        <HStack justifyContent="space-between" textStyle="sm" color="#7af0c7">
          <Text as="u">With</Text>
          <Text as="u">Get</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text fontSize="2vh">Rent</Text>
          <Text>10$</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <HouseIcon />
          <Text>20$</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <HStack>
            <HouseIcon />
            <HouseIcon />
          </HStack>
          <Text>30$</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <HStack>
            <HouseIcon />
            <HouseIcon />
            <HouseIcon />
          </HStack>
          <Text>40$</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <HStack>
            <HouseIcon />
            <HouseIcon />
            <HouseIcon />
            <HouseIcon />
          </HStack>
          <Text>50$</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <HotelIcon />
          <Text>100$</Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default PropertyInfo;
