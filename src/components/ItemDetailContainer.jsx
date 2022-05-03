import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail';
import {firestoreFetchOne} from "../utils/firestoreFetch.js";



const ItemDetailContainer = () => {
    const [herramientas, setHerramientas] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setHerramientas(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail productos={herramientas} />
    )
}

export default ItemDetailContainer;