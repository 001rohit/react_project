import axios from 'axios'
import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { storeData } from '../../storeData/storeSlice/SliceStore';

const Product = () => {
const dispatch = useDispatch()
const selector = useSelector((state)=>state.counter.value)
  const navigate = useNavigate()
  const getData = async() =>{
    const res = await axios.get('https://fakestoreapi.com/products')
    dispatch(storeData(res.data))
  }
  console.log(selector)
  useEffect(()=>{
   getData()
  },[])
  const singleData =(value)=>{
      console.log(value)
      navigate(`/Product/${value.id}`)
  }
  return (
    <div className='photo_cont'>
          {selector.map((e,i)=>{
            return(
              <div className='Wrapper'>
              <div key={i} className='container1'>
              <img src={e.image} alt='img1' />
              <h1>{e.category}</h1>
              <button onClick={()=>singleData(e)}>more..</button>
              </div>
              </div>
            )
          })}
    </div>
  )
}

export default Product
