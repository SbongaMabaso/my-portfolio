import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Completed Tasks</h1>
        <p className="pl-desc">
          The following project has been completed with python programming language.
          Most popular AI frameworks that I have worked with are TensorFlow, Pytorch, Keras, and OpenCV.
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
