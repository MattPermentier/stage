import "../style.css";

type ShowProductsProps = {
  data: any;
};

const ShowProducts = (props: ShowProductsProps) => {
  return (
    <div>
      <div className="showProducts">
        {props.data?.map((product: any) => (
          <div className="productCard" key={product.id}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowProducts;
