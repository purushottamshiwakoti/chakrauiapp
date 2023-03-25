import { Flex, Box, Text, Heading, Button } from "@chakra-ui/react";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const Price = () => {
  return (
    <Box
      bg="white"
      h="30vh"
      w="60%"
      marginLeft="20%"
      marginTop="-8%"
      borderRadius="10px"
      boxShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
    >
      <Flex>
        <Box
          bg="#ede6f9"
          h="30vh"
          w="30%"
          borderBottomLeftRadius="10px"
          borderTopLeftRadius="10px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontWeight="bold" fontSize="20px" ml="10px">
            Premium PRO
          </Text>
          <Heading mt="-20px" fontSize="50px">
            $399
          </Heading>
          <Text fontWeight="medium" ml="20px" mt="-10px" fontSize="18px">
            billed yearly
          </Text>
          <Button w="50%" color="white" bg="#5e3dba" _hover="">
            Get Started
          </Button>
        </Box>
        <Box ml="30px" n mt="20px" fontWeight="medium">
          <Text noOfLines="2">
            Access these features when you get this pricing package
            <br /> for your business
          </Text>
          <Box display="flex" mt="-5px">
            <AiFillCheckCircle color="#5e3dba" size={20} />
            <Text ml="6px" fontSize="15px">
              Inernational calling and messaging API
            </Text>
          </Box>
          <Box display="flex" mt="-5px">
            <AiFillCheckCircle color="#5e3dba" size={20} />
            <Text ml="6px" fontSize="15px">
              Additional phone numbers
            </Text>
          </Box>
          <Box display="flex" mt="-5px">
            <AiFillCheckCircle color="#5e3dba" size={20} />
            <Text ml="6px" fontSize="15px">
              Automated messages via Zapier
            </Text>
          </Box>
          <Box display="flex" mt="-5px">
            <AiFillCheckCircle color="#5e3dba" size={20} />
            <Text ml="6px" fontSize="15px">
              24/7 support and consulting
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Price;
