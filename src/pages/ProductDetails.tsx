import Header from "../components/Header";

type ProductDetailsProps = {
  product: any;
};

const ProductDetails = (props: ProductDetailsProps) => {
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
          <tbody>
            <tr className="unevenRow">
              <td>Diameter</td>
              <td>{props.product.diameter} cm</td>
            </tr>
            <tr>
              <td>Hoogte</td>
              <td>{props.product.height} cm</td>
            </tr>
            <tr className="unevenRow">
              <td>Standplaats</td>
              <td>
                {(() => {
                  switch (props.product.standingPlace) {
                    case "Sun":
                      return "Zon";
                    case "Partial":
                      return "Halfschaduw";
                    case "Shadow":
                      return "Schaduw";
                    default:
                  }
                })()}
              </td>
            </tr>
            <tr>
              <td>Water</td>
              <td>
                {(() => {
                  switch (props.product.wateringNeeds) {
                    case "High":
                      return "Veel";
                    case "Medium":
                      return "Gemiddeld";
                    case "Low":
                      return "Weinig";
                    default:
                  }
                })()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
