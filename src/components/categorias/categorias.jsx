import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
const Categorias = () => {
    const {DarkMode} = useDarkModeContext();
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-link">
                <button className={`btn ${DarkMode ? 'btn-secondary' :'btn-dark'}`}><Link className="nav-link" to={"/category/1"}>Remeras</Link></button>
            </li>
            <li className="nav-link">
                <button className={`btn ${DarkMode ? 'btn-secondary' :'btn-dark'}`}><Link className="nav-link" to={"/category/2"}>Pantalones</Link></button>
            </li>
            <li className="nav-link">
                <button className={`btn ${DarkMode ? 'btn-secondary' :'btn-dark'}`}><Link className="nav-link" to={"/category/3"}>Zapatillas</Link></button>
            </li>
        </ul>
    );
}

export default Categorias;