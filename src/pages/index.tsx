import { useEffect, useState } from 'react';
import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

const Home = () => {
  const [recommendedProducts, setRecommendedProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/recommended').then(response => {
      response.json().then(data => setRecommendedProducts(data))
    });
  }, []);

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

export default Home;
