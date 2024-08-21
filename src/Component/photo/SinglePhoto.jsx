import axios from 'axios'
// import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {useSelector } from 'react-redux';

const SingleProduct = () => {
  const selector = useSelector((state)=>state.counter.value1)

  const {id} = useParams()
  console.log(selector[id-1])
 
  
  return (
    <div>
      <h1>id: {selector[id-1].id}</h1>
      <div className='container2'>
      <img src={selector[id-1].url} alt='img' />
        <h2>{selector[id-1].title}</h2>
      </div>
    </div>
  )
}

export default SingleProduct
