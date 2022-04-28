import React from "react";
import { Text, Center, VStack } from "@chakra-ui/react";
function Brand() {
  return (
    <>
      <VStack>
        <Center color="white">
          <Text fontSize="7xl">PMP</Text>
          <Text px="1" color="lightblue">
          Project Management Platform
          </Text>
        </Center>
        <Center paddingBottom="5" color="white">
          <Text fontSize="lg">Your Friendly Project manager 📝</Text>
        </Center>
      </VStack>
    </>
  );
}

export default Brand;
