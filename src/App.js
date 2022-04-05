
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

 
const App = () => {
  return (
    <>
    <Navbar />   
    <ItemListContainer greeting="Desafio Coder" />
    <ItemCount/>
    </>
  );
}

export default App;
