import logo from "../images/logo.png";

const Header = () => {
  return (
    <header>
      <div className="leftHeaderSide">
        <img src={logo} className="headerLogo" />
        <h1>Kwekerij Annie</h1>
      </div>
    </header>
  );
};

export default Header;
