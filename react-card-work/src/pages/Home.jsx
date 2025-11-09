import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import "./Home.css";
import "./About.css"

function Home() {
    
  return (
    <div className="home">
      <h1 className="page-title">Our Products</h1>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
    
    
  );
}

export default Home;
