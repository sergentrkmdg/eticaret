import React from 'react'
import {AiOutlineClose} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { removeCard } from '../redux/actions/card';
const Card = () => {
    const dispatch=useDispatch()
    const {cardItems}=useSelector(state=>state.card);
    const deleteCard=(id)=>{
      dispatch(removeCard(id))
    }

    console.log(cardItems, "cardItems");
  return (
    <div className='w-1/3 h-full border fixed top-0 right-0 z-50 bg-white p-3'>
        <div className='flex items-center h-20 justify-between'>
            <h1 className='text-2xl'>SEPETİM:</h1>
            <AiOutlineClose onClick={()=>dispatch({type:"DRAWER", payload:false})} size={25} className="cursor-pointer"/>
        </div>
  {
    cardItems.map((card,i)=>(
    <div key={i} className='h-28 flex items-center justify-between border-b py-4 mt-5'>
          <img className='h-24' src={card?.image} alt="" />
          <div className='w-44'>
              <div className='font-bold text-sm '>{card?.title} ({card?.qty}) </div>
              <div className='opacity-70 text-xs'>{(card?.description).substring(0,45)}... </div>
          </div>
          <div className='font-bold text-lg mr-2'>{card?.price}TL</div>
          <div onClick={()=>deleteCard(card.id)} className='bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer' >SİL</div>
        </div>
    ))
  }
        
    </div>
  )
}

export default Card