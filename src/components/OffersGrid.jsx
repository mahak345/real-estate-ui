import properties from "../data/properties";

function OffersGrid({ searchTerm = "", onOfferClick }) {
  const filteredProperties = properties.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="offers-section">

      <div className="results-header">
        <h4>{filteredProperties.length} results found</h4>

        <div className="sort-dropdown">
          <select>
            <option>Sort by</option>
            <option>Price (Low to High)</option>
            <option>Price (High to Low)</option>
          </select>
        </div>
      </div>

      <div className="offers-grid">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="property-card"
            onClick={() => onOfferClick?.(property)}
          >
            <img
              src={property.images[0]}
              alt={property.title}
            />

            <div className="card-body">
              <h4>{property.title}</h4>
              <div className="location">{property.location}</div>
              <div className="price">{property.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="show-more">
        <button>Show more</button>
      </div>

    </div>
  );
}

export default OffersGrid;