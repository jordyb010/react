import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact-pagina">Contactpage</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </> 
  );
};

export default Navbar;
