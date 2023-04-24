import { Link } from "react-router-dom";
import "../style.css";
import TopFilter from "./TopFilter";

type ShowProductsProps = {
  data: any;
  filterItems: Function;
  clickHandler: Function;
};

const ShowProducts = (props: ShowProductsProps) => {
  return (
    <div>
      <TopFilter data={props.data} filterItems={props.filterItems} />
      <div className="showProducts">
        {props.data?.map((product: any) => (
          <div
            className="productCard"
            key={product.id}
            onClick={() => props.clickHandler(product.id)}
          >
            <Link to={`/product`} className="link">
              <img className="productImage" src={product.photoUrl} alt="foto" />
              <div className="productInfo">
                <div className="productNameContainer">
                  <p className="productName">{product.name}</p>
                </div>
                <div className="productDetails">
                  <div className="productSize">
                    <p className="productDiameter">
                      Diameter {product.diameter} cm
                    </p>
                    <p className="productHeight">Hoogte {product.height} cm</p>
                  </div>
                  <div className="productPricing">
                    <p className="productPrice">€ {product.price},-</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowProducts;
