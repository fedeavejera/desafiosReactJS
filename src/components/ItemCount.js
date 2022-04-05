import { Button } from '@mui/material';
import { useState } from "react";


const ItemCount = () => {
    const [count, setCount] = useState(1);
    const increment = () => {
        if (count < 5 ){
            setCount(count + 1);
           }
        }
        
    const decrement = () => {
        if (count > 1){
            setCount(count - 1);
        }

    }
    return ( 
      <div>
          <Button variant="contained" onClick={increment}>+</Button>
          <p>{count}</p>
          <Button variant="contained" onClick={decrement}>-</Button>
      </div>
    )
}

export default ItemCount;