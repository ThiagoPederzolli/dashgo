import { Box, Flex, Checkbox, Heading, Button, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box>
      <Header />
      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX="6"
      >
        <SideBar />
        
        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          padding="8"
        >
          <Flex
            marginBottom="8"
            justify="space-between"
            align="center"
          >
            <Heading
              size="lg"
              fontWeight="normal"
            >
              Listagem de Usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="small"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} />}
            >
              Criar Novo
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4","4","6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4","4","6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Thiago Pederzolli</Text>
                    <Text fontSize="small" color="gray.300">thiagopederzolli@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril de 2021</Td>}
                <Td>
                <Button
                  as="a"
                  size="sm"
                  fontSize="small"
                  colorScheme="purple"
                  leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                >
                  Editar
                </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4","4","6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Thiago Pederzolli</Text>
                    <Text fontSize="small" color="gray.300">thiagopederzolli@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril de 2021</Td>}
                <Td>
                <Button
                  as="a"
                  size="sm"
                  fontSize="small"
                  colorScheme="purple"
                  leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                >
                  Editar
                </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4","4","6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Thiago Pederzolli</Text>
                    <Text fontSize="small" color="gray.300">thiagopederzolli@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril de 2021</Td>}
                <Td>
                <Button
                  as="a"
                  size="sm"
                  fontSize="small"
                  colorScheme="purple"
                  leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                >
                  Editar
                </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

        <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}