import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box marginRight="4" textAlign="right">
        <Text>Thiago Pederzolli</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >thiagopederzolli@gmail.com</Text>

      </Box>

      <Avatar
        size="md"
        name="Thiago Pederzolli"
        src="https://github.com/ThiagoPederzolli.png"
      />
    </Flex>
  )
}