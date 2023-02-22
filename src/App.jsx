/*import*/
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Home from './components/home/Home.jsx';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/catalogo" element={<ItemListContainer />} />
        <Route exact path="/carrito" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
};


/*export*/
export default App

