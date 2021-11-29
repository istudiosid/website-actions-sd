import React from "react";
import {
  Container,
  Box,
  Stack,
  Text,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useTab,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import CustomButton from "../../component/custom-button";

const Informasi = () => {
  const datas = [
    {
      id: 1,
      icon: "/assets/informasi/1.png",
      label: "Keunggulan SD Muhammadiyah Klaten Utara",
      listDetail: [
        { 
          id: 1,
          text: "Tahfidz Juz 30",
        },
        {
          id: 2,
          text: "Hafal hadist pilihan dan doa harian",
        },
        {
          id: 3,
          text: "Tahfidz Juz 30",
        },
        {
          id: 4,
          text: "Hafal hadist pilihan dan doa harian",
        },
        {
          id: 5,
          text: "Tahfidz Juz 30",
        },
        {
          id: 6,
          text: "Hafal hadist pilihan dan doa harian",
        },
        {
          id: 7,
          text: "Tahfidz Juz 30",
        },
        {
          id: 8,
          text: "Hafal hadist pilihan dan doa harian",
        },
      ],
    },
    {
      id: 2,
      icon: "/assets/informasi/2.png",
      label: "Syarat Pendaftaran",
      listDetail: [
        {
          id: 1,
          text: "Tahfidz Juz 30",
        },
      ],
    },
    {
      id: 3,
      icon: "/assets/informasi/3.png",
      label: "Waktu dan Tempat Pendaftaran",
      listDetail: [
        {
          id: 1,
          text: "Tahfidz Juz 30",
        },
        {
          id: 2,
          text: "Hafal hadist pilihan dan doa harian",
        },
        {
          id: 3,
          text: "Tahfidz Juz 30",
        },
      ],
    },
  ];

  return (
    <Box>
      <Container
        maxW="6xl"
        height="100%"
        py={{ xs: 10, md: 20 }}
        px={{ xs: 10, md: 0 }}
      >
        <Box
          borderRadius="15px"
          px={{ xs: "1rem", md: "10rem" }}
          py={15}
          color="white"
          bg="info.500"
        >
          <Text
            fontSize={{ xs: "18px", md: "32px" }}
            lineHeight={{ xs: "35px", md: "50px" }}
            textAlign="center"
          >
            Informasi Penerimaan Peserta Didik Baru 2022-2023 SD Muhammadiyah
            Klaten Utara Binaan SD Muh Sapen Yogyakarta
          </Text>
        </Box>
        <Stack direction={{ xs: "column", md: "row" }} pt={{ xs: 10, md: 20 }}>
          <Tabs orientation="vertical" variant="soft-rounded">
            <TabList>
              {datas.map((el) => (
                <Tab
                  as={Box}
                  _selected={{ color: "white", bg: "primary.600" }}
                  color="primary.600"
                  _hover={{
                    color: "white",
                    bg: "primary.600",
                    cursor: "pointer",
                  }}
                  _focus={{
                    color: "white",
                    bg: "primary.600",
                    cursor: "pointer",
                  }}
                  display="flex"
                  mb={5}
                  flexDir="row"
                  borderRadius="20px"
                  width="305px"
                  boxShadow="xl"
                  borderWidth="1px"
                  alignItems="center"
                  p={5}
                >
                  <Image src={el.icon} alt="icon" w="50" h="50" mr={5} />
                  <Text fontSize={{ xs: "14px", md: "20px" }} fontWeight="400">
                    {el.label}
                  </Text>
                </Tab>
              ))}
            </TabList>
            <TabPanels ml={20}>
              {datas.map((el) => (
                <TabPanel as={Box} key={el.id} display="flex" flexDir="column">
                  {el.listDetail.map((item) => (
                    <Box display="flex" flexDir="row" pb={{ xs: 2, md: 8 }}>
                      <Box
                        borderWidth={{ xs: "2px", md: "3px" }}
                        borderColor="info.500"
                        borderRadius="full"
                        px={1}
                        py={{ xs: 0, md: 1 }}
                      >
                        <CheckIcon
                          w={{ xs: 4, md: 6 }}
                          h={{ xs: 4, md: 6 }}
                          color="info.500"
                        />
                      </Box>

                      <Text
                        key={item.id}
                        ml={5}
                        color="primary.600"
                        fontSize={{ xs: "18px", md: "24px" }}
                        lineHeight={{ xs: "25px", md: "35px" }}
                      >
                        {item.text}
                      </Text>
                    </Box>
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Stack>
        <CustomButton
          text="DAFTAR SEKARANG"
          color="white"
          bg="primary.400"
          hoverBg="primary.500"
        />
      </Container>
    </Box>
  );
};

export default Informasi;
