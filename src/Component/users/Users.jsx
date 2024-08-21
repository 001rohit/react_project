import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Users = () => {
  const [data,setData] = useState([])
  const navigate = useNavigate()
  const getData = async() =>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res.data)
    setData(res.data)
  }
  useEffect(()=>{
   getData()
  },[])
  const singleData =(value)=>{
      console.log(value)
      navigate(`/Users/${value.id}`)
  }
  return (
    <div className='photo_cont'>
      {data.map((e,i)=>{
        return(
          <div className='Wrapper'>
           <div key={i} className='container1'>
             <h1>Name:{e.name}</h1>
             <h1>Email.id:{e.email}</h1>
             <button onClick={()=>singleData(e)}>more...</button>
          </div>
          </div>
          
        )
      })}
    </div>
  )
}

export default Users
