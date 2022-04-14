import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import customFetch from "../utils/customFetch"
import ItemDetail from './ItemDetail';
const {data} = require('../utils/data');

const ItemDetailContainer = () => {
    const [herramientas, setHerramientas] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, data.find(item => item.id === parseInt(idItem)))
        .then(result => setHerramientas(result))
        .catch(err => console.log(err))

    }, []);

    return (
        <ItemDetail productos={herramientas} />
    )
}

export default ItemDetailContainer;