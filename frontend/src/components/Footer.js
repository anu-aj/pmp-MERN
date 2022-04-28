import { Box, Text } from "@chakra-ui/react";
function Footer() {
  return (
    <>
      <Box display="flex" justifyContent="center" mt="10">
        <Text pr="1.5" fontSize="1xl" color="ivory">
          Made with ❤️ by
        </Text>
        <Text color="lightgreen" fontSize="1xl">
          <a href="https://github.com/anu-aj" target="_blank">
            Team
          </a>
        </Text>
      </Box>
    </>
  );
}

export default Footer;
