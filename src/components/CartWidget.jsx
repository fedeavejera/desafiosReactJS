import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@material-ui/icons';

const CartWidget = () => {

return (


<Badge badgeContent={5} color="secondary">
            <ShoppingCartOutlined />
        </Badge>
 
);

};

export default CartWidget;