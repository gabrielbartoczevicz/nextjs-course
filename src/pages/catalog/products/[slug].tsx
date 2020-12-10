import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { RichText } from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';

import { client } from '@/lib/prismic';
import SEO from '@/components/SEO';

interface ProductProps {
  product: Document;
}

const Product = ({ product }: ProductProps) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Loading</p>
  }

  return (
    <>
      <SEO
        title={RichText.asText(product.data.title)}
        shouldExcludeTitleSuffix
        image={product.data.thumbnail.url}
      />

      <div>
        <h1>
          {RichText.asText(product.data.title)}
        </h1>

        <img src={product.data.thumbnail.url} width="300" alt="a" />

        <div dangerouslySetInnerHTML={{ __html: RichText.asHtml(product.data.description) }} />

        <p>Price: R$ {product.data.price}</p>
      </div>
    </>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<ProductProps> = async (context) => {
  const { slug } = context.params;

  const product = await client().getByUID('product', String(slug), {});

  return {
    props: {
      product,
    },
    revalidate: 10,
  }
}

export default Product;
