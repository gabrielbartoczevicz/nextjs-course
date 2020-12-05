import { GetServerSideProps } from 'next';
import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}

const Home = ({ recommendedProducts }: HomeProps) => {
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
