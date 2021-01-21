import Nav from "./Nav";

const Header = () => (
  <div>
    <div className="bar">
      <a href="">Sick Fits</a>
      <Nav />
    </div>
    <div className="sub-bar">
      <a href="">Search</a>
    </div>
    <div>Cart</div>
  </div>
)
 
export default Header;