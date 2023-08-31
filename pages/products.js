import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import ProductsCard from '../components/ProductsCard';
import { getProducts } from '../utils/data/productsData';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();

  const getAllTheProducts = () => {
    getProducts(user.uid).then(setProducts);
  };

  useEffect(() => {
    getAllTheProducts();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/book/new" passHref>
        <Button>Add A Product</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {products.map((product) => (
          <ProductsCard key={product.id} prodObj={product} onUpdate={getAllTheProducts} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
