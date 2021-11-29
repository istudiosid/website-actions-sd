import { Box, Stack, Image, Text, Avatar, Icon, Link } from "@chakra-ui/react";
import { Calendar as CalendarIcon } from "react-feather";

const CardBerita = ({
  gambar,
  kategori,
  isi,
  penulis,
  judul,
  waktu_publikasi,
}) => {
  return (
    <Stack mb="4.688rem" direction={{ base: "column", lg: "row" }} spacing={2}>
      <Box flex={1}>
        <Box
          position="absolute"
          right={{ xs: "5%", md: "60%" }}
          p={{ xs: ".8rem", md: ".5rem" }}
        >
          <Box
            w="54px"
            h="28px"
            bgColor="info.400"
            color="white"
            display="flex"
            borderRadius="0.625rem"
            justifyContent="center"
            alignItems="center"
            fontSize="0.875rem"
          >
            New
          </Box>
        </Box>
        <Image
          borderRadius="1.25rem"
          w={{ base: "100%", md: "300px" }}
          h={{ base: "auto", md: "194.59px" }}
          src={`https://actions-api-sd.sandboxindonesia.id/storage/${gambar}`}
          alt="berita"
        />
      </Box>

      <Stack flex={1.3} spacing={3} px="1rem" py=".2rem">
        <Text fontSize="1rem" color="info.500" fontWeight={400}>
          {kategori}
        </Text>

        <Text color="text.subtitle" fontSize="1.125rem" fontWeight={400}>
          {judul?.length <= 35 ? judul : `${judul?.slice(0, 35)} ...`}
        </Text>

        <Text color="text.description" fontSize="0.875rem">
          {isi?.length <= 90 ? isi : `${isi?.slice(0, 90)} ...`}
        </Text>

        <Link color="info.500" fontSize="sm">
          Baca Selengkapnya
        </Link>

        <Stack direction="row" alignItems="center" spacing={3}>
          <Avatar
            // src={user_image ?? user_image}
            name={penulis}
            alt="image-user"
          />

          <Stack spacing={1}>
            <Text color="text.subtitle" fontSize="0.875rem">
              {penulis}
            </Text>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Icon color="text.muted" as={CalendarIcon} />
              <Text color="text.muted" fontSize="0.875rem">
                {waktu_publikasi}
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CardBerita;
