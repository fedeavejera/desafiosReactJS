import { Button } from '@mui/material';
import { useEffect, useState } from "react";


const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);


    const increment = () => {
        if (count < stock ){
            setCount(count + 1);
           }
        }
        
    const decrement = () => {
        if (count > initial){
            setCount(count - 1);
        }

    }
    return ( 
      <div className="divCount">
          <Button variant="contained" onClick={increment}>+</Button>
          <p className='pCount'>{count}</p>
          <Button variant="contained" onClick={decrement}>-</Button>
          {
                stock
                ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Add to Cart</Button>
                : <Button variant="contained" disabled>Add to Cart</Button>
            }
      </div>
    )
}

export default ItemCount;