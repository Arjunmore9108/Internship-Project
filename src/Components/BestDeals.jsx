import ProductCard from "./ProductCard";
import TopDealsProducts from "../data/TopDealsProducts";  
import "./BestDeals.css";

function BestDeals() {
  return (
    <div className="best-deals">
      <h2>BEST DEALS</h2>
      <div className="deals-container">
        {TopDealsProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default BestDeals;
