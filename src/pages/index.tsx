import { GetServerSideProps } from 'next';
import { useCallback } from 'react';

import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}

const Home = ({ recommendedProducts }: HomeProps) => {

  const handleSum = useCallback(async () => {
    const { sum, randomBetween } = await import('../lib/math');

    alert(sum([randomBetween(), randomBetween()]));
  }, [])

  return (
    <>
      <Title>Henlo World</Title>

      <section>
        <Title>Products</Title>

        <ul>
          {recommendedProducts.map(product => (
            <li key={product.id} >
              {product.title}
            </li>
          ))}
        </ul>
      </section>

      <button onClick={handleSum}>Sum</button>
    </>
  )
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('http://localhost:3333/recommended');

  const recommendedProducts = await response.json()

  return {
    props: {
      recommendedProducts,
    }
  }
}

export default Home;
