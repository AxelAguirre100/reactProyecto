import CartWidget from "../cartWidget/cartWidget";
import { Link } from "react-router-dom";
import Categorias from "../categorias/categorias";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className='botonPrincipalNavBar'><Link className='brandName' to={"/"}>T&T</Link></button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                </button>
                <Categorias/>
                <CartWidget/>
            </div>
        </nav>
    );
}

export default Navbar;
