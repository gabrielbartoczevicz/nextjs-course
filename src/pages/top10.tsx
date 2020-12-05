import { GetStaticProps } from 'next';

import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface Top10Props {
  products: IProduct[];
}

const Top10 = ({ products }: Top10Props) => {
  return (
    <>

      <section>
        <Title>Products - Top 10</Title>

        <ul>
          {products.map(product => (
            <li key={product.id} >
              {product.title}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
};

export const getStaticProps: GetStaticProps<Top10Props> = async () => {
  const response = await fetch('http://localhost:3333/products');

  const products = await response.json()

  return {
    props: {
      products,
    },
    revalidate: 5,
  }
}

export default Top10;
