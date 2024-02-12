import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Box, Heading, Text, Image, Input } from "@chakra-ui/react";
import React from "react";
import { baseUrl, apiKey } from "./important";
const App = () => {
  const [input, setInput] = React.useState("");
  const [temperature, setTemperature] = React.useState(0);

  const fetchData = async () => {
    const response = await fetch(
      `${baseUrl}q=${input}&appid=${apiKey}&&units=metric`,
    )
      .then((response) => response.json())
      .then((response) => response)
      .catch((error) => console.log(error));
    console.log(response.main.temp);
    setTemperature(response.main.temp);
  };

  return (
    <Flex
      height="100vh"
      backgroundColor="blue.50"
      justify="center"
      align="center"
      id="app-component"
    >
      <Box
        p={8}
        maxW="md"
        borderRadius="3xl"
        boxShadow="2xl"
        bg="white"
        height="500px"
        backgroundColor={"yellow.50"}
        width="300px"
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/512/3731/3731894.png"
          top="10px"
          left="10px"
          height="100px"
        />
        <Flex top={"200px"} flexDirection={"column"}>
          <Heading as="h1" fontSize="2xl" mb={4}>
            Hello, Beautiful World!
          </Heading>
          <Text color="gray.600">Search for any city</Text>
          <Flex flexDirection={"row"} gap={4}>
            <Input
              placeholder="Enter something"
              mt={4}
              size="md"
              rounded={"2xl"}
              boxShadow={"sm"}
              onChange={(e) => setInput(e.target.value)}
            />
            <SearchIcon
              id="search-icon"
              mt={4}
              height={"40px"}
              color="blue.500"
              width={"40px"}
              padding="5px"
              rounded={"2xl"}
              backgroundColor={"blue.50"}
              cursor="pointer"
              boxShadow={"sm"}
              onClick={() => fetchData()}
            />
          </Flex>
          <Text
            fontSize="5xl"
            color="blue.300"
            fontFamily="sans-serif"
            fontWeight="bold"
            mt={8}
          >
            {temperature} °C
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};
export default App;
