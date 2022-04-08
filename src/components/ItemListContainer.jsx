import { useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import customFetch from "../utils/customFetch"
import ItemList from './ItemList';
const {data} = require('../utils/data');
const ItemListContainer = ({greeting}) => {

    const [herramientas, setHerramientas] = useState([]);

   useEffect(() => {
       customFetch(2000, data)
       .then(result => setHerramientas(result))
       .catch(err => console.log(err))
   }, []);
    

    return (
        <><h3>{greeting}</h3>
        <ItemList productos={herramientas} />
        <ItemCount></ItemCount></>
        
    )
}

export default ItemListContainer;