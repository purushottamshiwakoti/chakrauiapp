import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { SiAdguard } from "react-icons/si";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { SiNextbilliondotai } from "react-icons/si";

const Guarentee = () => {
  return (
    <Box ml="25%" mt="4%">
      <Flex>
        <Box display="flex" maxW="30vh">
          <SiAdguard size={70} color="#5e3dba" style={{ marginTop: "-10px" }} />
          <Text ml="15px" fontWeight="bold">
            30 days money back Guarantee
          </Text>
        </Box>
        <Box display="flex" maxW="30vh" ml={10}>
          <MdOutlineFreeCancellation
            size={70}
            color="#5e3dba"
            style={{ marginTop: "-10px" }}
          />
          <Text ml="15px" fontWeight="bold">
            No Setup fees 100% hassle-free
          </Text>
        </Box>
        <Box display="flex" maxW="35vh" ml={10}>
          <SiNextbilliondotai
            size={70}
            color="#5e3dba"
            style={{ marginTop: "-10px" }}
          />
          <Text ml="15px" fontWeight="bold">
            No monthly subscription Pay once and for all
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Guarentee;
