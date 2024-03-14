import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cartStore from '../../store/cart-store';
import { observer } from 'mobx-react-lite';
import DeleteIcon from '@mui/icons-material/Delete';
import { sixthSpace, thirdSpace, currency } from '../../utils';
import dataStore from '../../store/data-store';
import { Skeleton } from '@mui/material';

const callbacks = {
    addToCart: cartStore.addToCart,
    removeFromCart: cartStore.removeFromCart,
    isInCart: cartStore.isInCart,
    removeIdFromCart: cartStore.removeIdFromCart
}

function Product({ id, image, description, title, price } : ({ id: number, image: string | JSX.Element, description: string | JSX.Element, title: string | JSX.Element, price: number | JSX.Element})) {
    
    const addBtn = dataStore.isLoading ? <Skeleton width={'2rem'}/> : 'Add'
    
    return (
        <>
            <Card key={id} sx={{ maxWidth: 250 }}>
                {typeof image === 'string' 
                    ? <CardMedia
                    component="img"
                    height="140"
                    image={image}
                />
                : image
                }
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {typeof title === 'string' ? thirdSpace(title) : title}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary">
                        {typeof description === 'string' ? sixthSpace(description) : description}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
                    {!isNaN(+price) ? currency(price) : price}
                    </Typography>
                </CardContent>
                <CardActions>
                    {callbacks.isInCart(id) 
                        ? <>
                            <Button size="large" disabled={callbacks.isInCart(id)?.count === 10} onClick={() => callbacks.addToCart(id)}>+</Button>
                            <Typography variant="body1">{callbacks.isInCart(id)?.count}</Typography>
                            <Button size="large" onClick={() => callbacks.removeFromCart(id)}>—</Button>
                            <DeleteIcon onClick={() => callbacks.removeIdFromCart(id)} />
                        </>
                        : <Button size="medium" onClick={() => callbacks.addToCart(id)}>{addBtn}</Button>
                    }
                </CardActions>
            </Card>
        </>
    )
}
const ProductCard = observer(Product)
export default ProductCard