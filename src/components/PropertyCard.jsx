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
