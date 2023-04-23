import Header from "../components/Header";

type ProductDetailsProps = {
  product: any;
};

const ProductDetails = (props: ProductDetailsProps) => {
  console.log(props.product);

  return (
    <div className="productDetail">
      <Header />
      <div className="mainInformation">
        <img src={props.product.photoUrl} className="detailsImage" alt="" />
        <div className="detailsInfo">
          <p className="detailsName">{props.product.name}</p>
          <p className="detailsDescription">{props.product.description}</p>
          <p className="detailsPrice">€ {props.product.price},-</p>
        </div>
      </div>
      <div className="extraInformation">
        <table className="detailsTable">
          <tr className="unevenRow">
            <td>Diameter</td>
            <td>{props.product.diameter}</td>
          </tr>
          <tr>
            <td>Hoogte</td>
            <td>{props.product.height}</td>
          </tr>
          <tr className="unevenRow">
            <td>Standplaats</td>
            <td>{props.product.standingPlace}</td>
          </tr>
          <tr>
            <td>Water</td>
            <td>{props.product.wateringNeeds}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
