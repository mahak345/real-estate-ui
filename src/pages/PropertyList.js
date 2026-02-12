import { Link } from "react-router-dom";
import properties from "../data/properties";

function PropertyList() {
  return (
    <div className="container">
      <h2>Search Results</h2>

      <div className="grid">
        {properties.map((property) => (
          <div key={property.id} className="card">
            <Link to={`/property/${property.id}`}>
              <img
                src={property.images[0]}
                alt={property.title}
                className="card-img"
              />
            </Link>

            <div className="card-body">
              <h3>{property.title}</h3>
              <p>{property.price}</p>
              <p>{property.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyList;
