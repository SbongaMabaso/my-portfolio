import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Completed Tasks</h1>
        <p className="pl-desc">
          The following project has been completed with JavaScript, HTML and CSS.
          I created this portfolio with Reat.js framework. The <a href="https://semo-solution.vercel.app/">Semo-Solution</a>  was created with Next.js,
          whereas <a href="https://researchboard.netlify.app/">Research-board</a> and <a href="https://sneaker-sa.netlify.app/">Sneaker-SA</a> was created with poor JavaScript.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
