import Categorias from "../categorias/categorias";
import './dropdown.css'
const Dropdown = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                    <button className="nav-link dropdown-toggle btn btn-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Categorias
                    </button>
                    <Categorias/>
                </li>
            </ul>
        </div>
    );
}

export default Dropdown;