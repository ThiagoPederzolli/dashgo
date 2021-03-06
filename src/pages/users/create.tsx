import { Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button, Link } from '@chakra-ui/react';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { api } from '../../services/api';

import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';
import { queryClient } from '../../services/queryClient';
import { useRouter } from 'next/router';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas devem ser a mesma')
})

export default function CreateUser() {
  const router = useRouter()
  const createUser = useMutation( async (user: CreateUserFormData) => {
    const response = await api.post('/users', {
      user: {
        ...user,
        created_at: new Date()
      }
    })

    return response.data.user
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await createUser.mutateAsync(values)

    router.push('/users')
  }

  const { errors } = formState
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
            as="form"
            flex="1"
            borderRadius={8}
            bg="gray.800"
            padding={["6", "8"]}
            onSubmit={handleSubmit(handleCreateUser)}
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
                <Input name="name" label="Nome Completo" error={errors.name} {...register('name')} />
                <Input name="email" label="Email" type="email" error={errors.email} {...register('email')} />
              </SimpleGrid>
              <SimpleGrid
                minChildWidth="240px"
                spacing={["6", "8"]}
                width="100%"
              >
                <Input name="password" label="Senha" type="password" error={errors.password} {...register('password')} />
                <Input
                  name="password_confirmation"
                  label="Confirmação de Senha"
                  error={errors.password_confirmation}
                  {...register('password_confirmation')}
                  type="password"
                />
              </SimpleGrid>
            </VStack>
            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button as="a" colorScheme="whiteAlpha" >Cancelar</Button>
                </Link>
                <Button colorScheme="pink" type="submit" isLoading={formState.isSubmitting}  >Salvar</Button>

              </HStack>
            </Flex>
          </Box>
        </Flex>
    </Box>
  )
}