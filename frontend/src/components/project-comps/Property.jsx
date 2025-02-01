import React from "react";
import { Box, Heading, Center, VStack } from "@chakra-ui/react";
import { Avatar } from "../chakra-comps/avatar";

const Property = () => {
  return (
    <Box
      background="black"
      padding="4"
      color="white"
      borderWidth="2px"
      borderColor="white"
    >
      <Center>
        <VStack>
          <Avatar
            size="xl"
            name="New York"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/255px-Flag_of_the_United_States_%28Pantone%29.svg.png"
          />
          <Heading>New York</Heading>
          <Heading paddingTop="5%" color="gray">
            400 $
          </Heading>
        </VStack>
      </Center>
    </Box>
  );
};

export default Property;
