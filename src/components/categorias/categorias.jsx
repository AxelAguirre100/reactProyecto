const Categorias = () => {
    return (
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><button className="dropdown-item" href="./pages/Graficas.html">Graficas</button></li>
            <li><button className="dropdown-item" href="./pages/Procesadores.html">Procesadores</button></li>
            <li><button className="dropdown-item" href="#">Ver todo</button></li>
        </ul>
    );
}

export default Categorias;
