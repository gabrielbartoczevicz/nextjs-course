import React from 'react';
import Link from 'next/link';
import { Box, Heading, Image } from '@chakra-ui/react';

interface ProductItemProps {
  title: string;
  link: string;
  imageSrc: string;
  imageAlt: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ title, link, imageSrc, imageAlt }) => (
  <Link href={link} >
    <Box
      as="button"
      maxW="xs"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
      />
      <Box 
        p={6}
        bgColor="Background"
      >
        <Heading as="h6" size="md">{title}</Heading>
      </Box>
    </Box>
  </Link>
);

export default ProductItem;
