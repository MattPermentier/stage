import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header>
      <Link to={"/"} className="link headerLink">
        <div className="leftHeaderSide">
          <img src={logo} className="headerLogo" />
          <h1 className="headerName">Kwekerij Annie</h1>
        </div>
      </Link>
    </header>
  );
};

export default Header;
