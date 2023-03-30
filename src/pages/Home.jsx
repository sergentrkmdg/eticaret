import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard';
import { productsAction } from '../redux/actions/products';

function Home() {
  const dispatch = useDispatch();
  const {products} = useSelector(state=>state.products);
  
  useEffect(()=>{
    dispatch(productsAction())

  },[dispatch])
 
  console.log("products", products)
  return (
    <div className='flex flex-wrap justify-center'>
      {
        products && products.map((prd,i)=>(
          <ProductCard key={i} prd={prd} />
        ))
      }

    </div>
  )
}

export default Home