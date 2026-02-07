// import { Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// export default function PropertyCard({ property }) {
//   return (
//     <Card className="mb-4">
//       <Card.Img
//         variant="top"
//         src="https://images.unsplash.com/featured/?apartment"
//       />
//       <Card.Body>
//         <Card.Title>{property.title}</Card.Title>
//         <Card.Text>{property.price}</Card.Text>
//         <Button as={Link} to={`/property/${property.id}`} variant="success">
//           View Details
//         </Button>
//       </Card.Body>
//     </Card>
//   );
function PropertyCard({ title, price, location }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src="https://via.placeholder.com/400x250"
        className="card-img-top"
        alt="property"
      />

      <div className="card-body">
        <h6 className="fw-bold">{title}</h6>
        <p className="text-success fw-bold mb-1">{price}</p>
        <small className="text-muted">{location}</small>
      </div>
    </div>
  );
}

export default PropertyCard;
