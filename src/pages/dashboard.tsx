import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
// import Chart from 'react-apexcharts';
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-08-20T00:00:00.000Z',
      '2021-08-21T00:00:00.000Z',
      '2021-08-22T00:00:00.000Z',
      '2021-08-23T00:00:00.000Z',
      '2021-08-24T00:00:00.000Z',
      '2021-08-25T00:00:00.000Z',
      '2021-08-26T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [
  {
    name: 'series1', data: [32, 123, 43, 10, 53, 36, 87]
  }
]

export default function Dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      
      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX="6"
      >
        <SideBar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          align="flex-start"
        >
          <Box
            padding="8"
            bg="gray.800"
            borderRadius={8}
            paddingBottom="4"
          >
            <Text fontSize="lg" marginBottom="4">
              Inscritos da Semana
            </Text>
            <Chart
              type="area"
              height={160}
              options={options}
              series={series}
            />
          </Box>

          <Box
            padding="8"
            bg="gray.800"
            borderRadius={8}
            paddingBottom="4"
          >
            <Text fontSize="lg" marginBottom="4">
              Taxa de Abertura
            </Text>
          </Box>

        </SimpleGrid>

      </Flex>
    </Flex>
  )
}