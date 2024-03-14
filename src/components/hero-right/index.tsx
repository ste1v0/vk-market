import cartStore from '../../store/cart-store'
import dataStore from '../../store/data-store';
import { observer } from 'mobx-react-lite'
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import { currency } from '../../utils';
import { Skeleton } from '@mui/material';

function HeroRightCart() {

    const emptyCart = dataStore.isLoading ? <Skeleton width={'10rem'}/> : 'Корзина пуста'

    return (
        <>
            <Box component="div" flexGrow={1} textAlign={'center'}>
                {cartStore.countTotal() > 0 
                    ? <Box component="div">
                        <Typography variant="h6">
                            Итого: {currency(Number(cartStore.sum()))}
                        </Typography>
                        <Button variant="contained" sx={{ mt: 2 }} onClick={() => alert('Увы, это лишь пример корзины. Купить ничего нельзя :(')}>
                            Оформить    
                        </Button>
                    </Box>
                    : <Box component="div" sx={{ p: 2 }}>
                        <Typography variant="h6" width={'55%'} margin={'0 auto'}>
                            {emptyCart}
                        </Typography>
                    </Box>
                }
            </Box>
        </>
    )
}

const HeroRight = observer(HeroRightCart)
export default HeroRight