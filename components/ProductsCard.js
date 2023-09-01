import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

function ProductsCard({ prodObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={prodObj.image} alt={prodObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{prodObj.name}</Card.Title>
        <Link href={`/products/${prodObj.id}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/products/${prodObj.id}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        {/* <Button variant="danger" onClick={deleteThisBook} className="m-2"> */}
        {/* DELETE
        </Button> */}
      </Card.Body>
    </Card>
  );
}

ProductsCard.propTypes = {
  prodObj: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default ProductsCard;
