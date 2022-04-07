import { useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import { getData } from '../Data';
import ItemList from './ItemList';
const ItemListContainer = ({greeting}) => {

    const [herramientas, setHerramientas] = useState([]);

    useEffect(()=>{
       async function requestData(){
            let uncomingData = await getData();
            setHerramientas(uncomingData)
        }
        requestData();
    }, [])

    

    return (
        <><h3>{greeting}</h3>
        <ItemList productos={herramientas} />
        <ItemCount></ItemCount></>
        
    )
}

export default ItemListContainer;