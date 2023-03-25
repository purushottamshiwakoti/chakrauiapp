import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box
      as="section"
      bg="#5e3dba"
      h="50vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="white"
    >
      <Heading>Simple pricing for your business</Heading>
      <Text fontSize="20px">
        Plans that are carefully crafted to suit your business
      </Text>
    </Box>
  );
};

export default Header;
