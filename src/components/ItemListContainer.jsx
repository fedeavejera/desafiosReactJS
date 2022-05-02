import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../utils/firestoreFetch';


const ItemListContainer = () => {

    const [herramientas, setHerramientas] = useState([]);
    const { idCategory } = useParams();

// component did update

useEffect(() => {
    firestoreFetch(idCategory)
        .then(result => setHerramientas(result))
        .catch(err => console.log(err));
}, [idCategory]);


// component will unmount

useEffect(()=> {
    return (()=> {
          setHerramientas([]);
    })
}, []);
    

    return (
        <>
        <ItemList productos={herramientas} />
        </>
        
    )
}

export default ItemListContainer;