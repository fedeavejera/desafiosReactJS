import { useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import customFetch from "../utils/customFetch"
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
const {data} = require('../utils/data');
const ItemListContainer = () => {

    const [herramientas, setHerramientas] = useState([]);
    const { idCategory } = useParams();

   useEffect(() => {
    if (idCategory == undefined) {  
       customFetch(2000, data)
       .then(result => setHerramientas(result))
       .catch(err => console.log(err))
    } else {
        customFetch(2000, data.filter(item => item.category === idCategory))
       .then(result => setHerramientas(result))
       .catch(err => console.log(err))
    }
   }, [idCategory]);
    

    return (
        <>
        <ItemList productos={herramientas} />
        </>
        
    )
}

export default ItemListContainer;