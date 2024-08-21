import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleUser = () => {
  
    const [singleData,setSingleData] = useState({})
    const {id} = useParams()
    const getData = async() =>{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log(res.data)
        setSingleData(res.data)
      }
      useEffect(()=>{
       getData()
      },[])
  return (
    <div>
      <h1>
        {singleData.id}){singleData.name}
      </h1>
      <h2>
         {singleData.email}
      </h2>
    </div>
  )
}

export default SingleUser
