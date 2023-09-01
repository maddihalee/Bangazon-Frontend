import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { viewProductDetails } from '../../utils/data/productsData';

export default function ViewProduct() {
  const [productDetails, setProductDetails] = useState([]);
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    viewProductDetails(id).then(setProductDetails);
  }, [id]);

  console.warn('productDetails:', productDetails);

  return (
    <>
      <img src={productDetails.image} alt={productDetails.name} style={{ width: '300px' }} />
      <div className="mt-5 d-flex flex-wrap">
        <div className="text-white ms-5 details">
          <h5>
            {productDetails.name} <br />
            {productDetails.description}
          </h5>
          Price: {productDetails.price}
          <hr />
        </div>
      </div>
    </>
  );
}
