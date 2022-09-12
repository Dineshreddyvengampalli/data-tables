import './App.css';
import DisplayData from './Components/DisplayData';
import axios from 'axios';
import {useState,useEffect} from 'react'
import 'jquery/dist/jquery.min.js';
 

 

function App() {
  const [res,setRes] = useState([])
  let getData = async()=>{
    let res = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    let data = await res.data
    setRes(data) 
  }
  useEffect(()=>{
    let isMounted = false
    axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then((res)=>{
        if(!isMounted){
          setRes(res.data)
        }
      })

    if(!isMounted){
      getData()
    }
    isMounted = true
  },[])
  
  return (
      <DisplayData item = {res}></DisplayData>
  );
}

export default App;
