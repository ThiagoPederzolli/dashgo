import { useState } from "react";
import { Box, Flex, Checkbox, Heading, Button, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue, Spinner, Link } from "@chakra-ui/react";
import NextLink from 'next/link';
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";
import { useUsers } from '../../services/hooks/useUsers';
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";

export default function UserList() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading, isFetching, error } = useUsers(currentPage)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  async function handlePrefetchUser(id: string) {
    await queryClient.prefetchQuery(['user', id], async () => {
      const response = await api.get(`/users/${id}`)

      return response.data
    }, {
      staleTime: 1000 * 60 * 10, //10minutos
    })
  }

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
              { !isLoading && isFetching && (
                <Spinner
                  color="gray.500"
                  size="sm"
                  marginLeft="4"
                />
              )}
            </Heading>

            <NextLink href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="small"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar Novo
              </Button>
            </NextLink>
          </Flex>
          
          { isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Fala ao obter os dados dos usuários</Text>
            </Flex>
          ) : (
            <>
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
                  {data.users.map((user) => {
                    return (
                      <Tr key={user.id}>
                        <Td px={["4","4","6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                              <Text fontWeight="bold">{user.name}</Text>
                            </Link>
                            <Text fontSize="small" color="gray.300">{user.email}</Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.created_at}</Td>}
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
                    )
                  })}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}