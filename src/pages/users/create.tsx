import { Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button, Link } from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';

import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';

export default function CreateUser() {
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
            padding={["6", "8"]}
          >
            <Heading size="lg" fontWeight="normal">
              Criar Usuário
            </Heading>

            <Divider marginY="6" borderColor="gray.700" />

            <VStack spacing="8">
              <SimpleGrid
                minChildWidth="240px"
                spacing={["6", "8"]}
                width="100%"
              >
                <Input name="name" label="Nome Completo" />
                <Input name="email" label="Email" type="email" />
              </SimpleGrid>
              <SimpleGrid
                minChildWidth="240px"
                spacing={["6", "8"]}
                width="100%"
              >
                <Input name="password" label="Senha" type="password" />
                <Input name="password_confirmation" label="Confirmação de Senha" type="password" />
              </SimpleGrid>
            </VStack>
            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button as="a" colorScheme="whiteAlpha" >Cancelar</Button>
                </Link>
                <Button colorScheme="pink" type="submit"  >Salvar</Button>

              </HStack>
            </Flex>
          </Box>
        </Flex>
    </Box>
  )
}