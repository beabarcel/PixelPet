import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
