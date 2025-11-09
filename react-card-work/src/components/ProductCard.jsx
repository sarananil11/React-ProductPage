import "./ProductCard.css";

function ProductCard({ name, price, type, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />
      <div className="card-content">
        <h3>{name}</h3>
        <p>{type}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
