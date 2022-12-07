import { Link } from 'react-router-dom';
const CartWidget = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-link">
                <button className="btn btn-light"><Link to={"/carrito"}>🛒</Link></button>
            </li>
            <p className='numero'>0</p>
        </ul>
    );
}

export default CartWidget;
