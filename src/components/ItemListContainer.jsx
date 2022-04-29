import { useEffect, useState } from 'react';
import customFetch from "../utils/customFetch"
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import db from '../utils/firebaseConfig';



const ItemListContainer = () => {

    const [herramientas, setHerramientas] = useState([]);
    const { idCategory } = useParams();

// component did update

   useEffect(() => {
   const fetchFromFirestore = async () => {    
    const querySnapshot = await getDocs(collection(db, "products"));
    const dataFromFirestore = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    return dataFromFirestore;
   }
   fetchFromFirestore()
       .then(result => setHerramientas(result))
       .catch(err => console.log(err));
   }, [herramientas]);

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