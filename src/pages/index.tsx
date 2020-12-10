import { GetServerSideProps } from 'next';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import SEO from '@/components/SEO';
import { client } from '@/lib/prismic';
import ProductItem from '@/components/ProductItem';
import ThemeSwitcher from '@/components/ThemeSwitcher';

interface HomeProps {
  allProducts: Document[];
}

const Home = ({ allProducts }: HomeProps) => {
  return (
    <>
      <SEO
        title="E-Commerce"
        shouldExcludeTitleSuffix
        image="thumb.jpeg"
      />

      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        p={4}
      >
        <ThemeSwitcher alignSelf="flex-end" />

        <Flex height={20} direction="column" align="center" justify="space-between">
          <Heading>E-Commerce</Heading>
          <Text>
            Application from Rocketseat's NextJS course (with Chakra-UI).
          </Text>
        </Flex>

        <Box marginY={8} >
          <Heading as="h3" size="md" textAlign="center">
            All Products
          </Heading>

          <Stack
            direction={["column", "row"]}
            spacing={8}
            marginY={6}
          >
            {allProducts.map(({ id, data, uid }) => (
              <ProductItem
                key={id}
                title={RichText.asText(data.title)}
                link={`/catalog/products/${uid}`}
                imageSrc={data.thumbnail.url}
                imageAlt={RichText.asText(data.title)}
              />
            ))}
          </Stack>
        </Box>
      </Flex>
    </>
  )
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const allProducts = await client().query([
    Prismic.Predicates.at('document.type', 'product')
  ]);

  return {
    props: {
      allProducts: allProducts.results,
    }
  }
}

export default Home;
