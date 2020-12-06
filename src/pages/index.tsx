import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';

import SEO from '@/components/SEO';
import { client } from '@/lib/prismic';
import { Title } from '@/styles/pages/Home';

interface HomeProps {
  recommendedProducts: Document[];
}

const Home = ({ recommendedProducts }: HomeProps) => {
  return (
    <>
      <SEO
        title="Potat"
        shouldExcludeTitleSuffix
        image="thumb.jpeg"
      />

      <Title>Henlo World</Title>

      <section>
        <Title>Products</Title>

        <ul>
          {recommendedProducts.map(product => (
            <li key={product.id} >
              <Link href={`/catalog/products/${product.uid}`}>
                <a>
                  {RichText.asText(product.data.title)}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const recommendedProducts = await client().query([
    Prismic.Predicates.at('document.type', 'product')
  ]);

  return {
    props: {
      recommendedProducts: recommendedProducts.results,
    }
  }
}

export default Home;
