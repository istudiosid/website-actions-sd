import { Stack, Image, Text } from "@chakra-ui/react";

const CardPrestasi = ({ image, title }) => {
  return (
    <Stack alignItems="center" spacing={10}>
      <Image
        borderRadius="1.875rem"
        w="300px"
        h="300px"
        objectFit="cover"
        src={image}
        alt={title}
      />

      <Text
        textAlign="center"
        fontSize="1.25rem"
        fontWeight={400}
        color="primary.600"
      >
        {title}
      </Text>
    </Stack>
  );
};

export default CardPrestasi;
