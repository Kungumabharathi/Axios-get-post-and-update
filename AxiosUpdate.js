import React,{useState,useEffect} from 'react';
import axios from 'axios';
export default function AxiosPost(){
    const[postData,setPostData]=useState([]);
    const[name,setName]=useState('');
    
    // using axios 
        useEffect(()=>
        {
            axios.get("http://jsonplaceholder.typicode.com/users/1")
            .then((res)=>
            setPostData(res.data));
        })

        const UpdateUserData=()=>{
            axios.put(`http://jsonplaceholder.typicode.com/users/${1}`,{name:name})
            .then((res)=> console.log(res.data))
        }

         
        return(<>
            {postData.name}
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={UpdateUserData}>Update</button>
      
          
        </>)
} 