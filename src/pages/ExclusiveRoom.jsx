import "../styles/ExclusiveRoom.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import properties from "../data/properties";
import Exclusive from "../components/Exclusive";

export default function ExclusiveRoom() {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = properties.find(
    (item) => String(item.id) === String(id)
  );

  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (property) {
      setMainImage(property.images?.[0] || "");
    }
  }, [id]);

  if (!property) return <h2>Property Not Found</h2>;

  return (
    <div className="property-page">
      <button onClick={() => navigate(-1)}>← Back</button>

      <Exclusive
        property={property}
        mainImage={mainImage}
        setMainImage={setMainImage}
      />
    </div>
  );
}
