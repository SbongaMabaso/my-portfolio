import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Completed Tasks</h1>
        <p className="pl-desc">
          Check out my recent completed projects. feel free to contact to for any question or more information on the project.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} /> //link={item.link}
        ))}
      </div>
    </div>
  );
};

export default ProductList;
