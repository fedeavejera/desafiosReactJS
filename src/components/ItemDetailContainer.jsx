import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import customFetch from "../utils/customFetch"
import ItemDetail from './ItemDetail';
import db from '../utils/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [herramientas, setHerramientas] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        const firestoreFetchOne = async (idItem) => {
            const docRef = doc(db, "products", idItem);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
              return {
                  id: idItem,
                  ...docSnap.data()
              }
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
        }
        firestoreFetchOne(idItem)
            .then(result => setHerramientas(result))
            .catch(err => console.log(err))

    }, []);

    return (
        <ItemDetail productos={herramientas} />
    )
}

export default ItemDetailContainer;