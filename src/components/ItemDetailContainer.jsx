import { useEffect, useState } from 'react'
import customFetch from "../utils/customFetch"
import ItemDetail from './ItemDetail';
const {data} = require('../utils/data');

const ItemDetailContainer = () => {
    const [herramientas, setHerramientas] = useState({});

    useEffect(() => {
        customFetch(2000, data[1])
        .then(result => setHerramientas(result))
        .catch(err => console.log(err))

    }, []);

    return (
        <ItemDetail productos={herramientas} />
    )
}

export default ItemDetailContainer;