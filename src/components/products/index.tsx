import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import dataStore from '../../store/data-store';
import ProductCard from '../product-card';
import { Skeleton } from '@mui/material'
import { Box } from '@mui/system';

function ProductsData() {

    useEffect(() => {
        dataStore.fetchData()
    }, [])

    return (
        <>
            <Box component={'div'} width={'75%'} padding={'2vh 1vw'} display={'flex'} gap={3} flexWrap={'wrap'}>
                {dataStore.data.length === 0 
                    ? <Box display={'flex'} gap={5} flexWrap={'wrap'}>
                        <ProductCard key={1} id={1} image={<Skeleton width={250} height={140}/>} description={<Skeleton />} title={<Skeleton />} price={<Skeleton width={'3rem'}/>}/>
                        <ProductCard key={2} id={2} image={<Skeleton width={250} height={140}/>} description={<Skeleton />} title={<Skeleton />} price={<Skeleton width={'3rem'}/>}/>
                        <ProductCard key={3} id={3} image={<Skeleton width={250} height={140}/>} description={<Skeleton />} title={<Skeleton />} price={<Skeleton width={'3rem'}/>}/>
                        <ProductCard key={4} id={4} image={<Skeleton width={250} height={140}/>} description={<Skeleton />} title={<Skeleton />} price={<Skeleton width={'3rem'}/>}/>
                        <ProductCard key={5} id={5} image={<Skeleton width={250} height={140}/>} description={<Skeleton />} title={<Skeleton />} price={<Skeleton width={'3rem'}/>}/>
                        <ProductCard key={6} id={6} image={<Skeleton width={250} height={140}/>} description={<Skeleton />} title={<Skeleton />} price={<Skeleton width={'3rem'}/>}/>
                        <ProductCard key={7} id={7} image={<Skeleton width={250} height={140}/>} description={<Skeleton />} title={<Skeleton />} price={<Skeleton width={'3rem'}/>}/>
                        <ProductCard key={8} id={8} image={<Skeleton width={250} height={140}/>} description={<Skeleton />} title={<Skeleton />} price={<Skeleton width={'3rem'}/>}/>
                    </Box>
                    :  dataStore.data.map(e => {
                    return (
                        <ProductCard key={e.id} id={e.id} image={e.image} description={e.description} title={e.title} price={e.price} />
                    )
                })}
            </Box>
        </>
    )
}

const Products = observer(ProductsData)

export default Products