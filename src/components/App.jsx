import './App.css';
import Navbar from './navbar/navbar';
import ItemListContainer from "./itemListContainer/itemListContainer";
const App = () => {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={"Hola"}/>
    </>
  );
}

export default App;