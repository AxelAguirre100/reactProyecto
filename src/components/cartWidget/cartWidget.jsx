import './cartWidget.css'
const CartWidget = () => {
    return (
        <ul className="navbar-nav me-auto">
            <li className="nav-link">
                <button className="btn btn-light">Carrito</button>
            </li>
            <p>0</p>
        </ul>
    );
}

export default CartWidget;
