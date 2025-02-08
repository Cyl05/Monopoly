import { Box } from "@chakra-ui/react";
import React from "react";

const Player = () => {
  return (
    <Box
      w="1vw"
      h="0.95vh"
      background="yellow"
      // position="absolute"
      // top="5%"
      // left="60%"
      // transform="translate(-50%, -50%)"
      zIndex={999}
    />
  );
};

export default Player;
