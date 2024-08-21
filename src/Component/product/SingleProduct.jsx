import axios from 'axios'
// import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {useSelector } from 'react-redux';

const SingleProduct = () => {
  const selector = useSelector((state)=>state.counter.value)

  // const [singleData,setSingleData] = useState({ })
  const {id} = useParams()
  // const data=`selector${id}`
  console.log(selector[id-1])
  // const getData = async() =>{
    // const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
    // console.log(res.data)
    // setSingleData(res.data)
  // }
  // useEffect(()=>{
    // getData()
  // },[])
  
  return (
    <div>
      <h1>Category: {selector[id-1].category}</h1>
      <div className='container2'>
      <img src={selector[id-1].image} alt='img' />
        <h2>{selector[id-1].title}</h2>
        <p>Price: {selector[id-1].price}</p>
      </div>
        <h3>Description:{selector[id-1].description}</h3>
    </div>
  )
}

export default SingleProduct
