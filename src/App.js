
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'


 
const App = () => {
  return (
    <>
    <Navbar />   
    { /* <ItemListContainer greeting="Desafio Coder" />  */}
    <ItemDetailContainer />

    </>
  );
}

export default App;
