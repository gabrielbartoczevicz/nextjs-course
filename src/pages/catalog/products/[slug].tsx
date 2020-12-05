import { useRouter } from 'next/router';

const Product = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>{query.slug}</h1>
      <strong>/catalog/products/{query.slug}</strong>
    </div>
  )
}

export default Product;
