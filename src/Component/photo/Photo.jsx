import axios from 'axios'
import React, {useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { storeData1 } from '../../storeData/storeSlice/SliceStore';
import { useNavigate } from 'react-router-dom';

const Photo = () => {
  const dispatch = useDispatch()
const selector = useSelector((state)=>state.counter.value1)
const navigate = useNavigate()
  const getData = async() =>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
    // console.log(res.data)
    dispatch(storeData1(res.data))
  }
  console.log(selector[0])
  useEffect(()=>{
   getData()
  },[])
  const singleData =(value)=>{
    console.log(value)
    navigate(`/photo/${value.id}`)
}
  return (
    <div>
       <h1>Photo</h1>
       <div className='photo_cont'>
       {selector.map((e,i)=>{
          return(
            <div className='Wrapper' key={i}>
            <div className='container1'>
              <img src={e.url} alt='img' />
              <h1>{e.id}</h1>
              <button onClick={()=>singleData(e)}>more..</button>
            </div>
       </div>
          )
        })}
       </div>
        
    </div>
  )
}

export default Photo
