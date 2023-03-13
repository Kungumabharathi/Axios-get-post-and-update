import React,{useState,useEffect} from 'react';
import axios from 'axios';
export default function AxiosPost(){
    const[postData,setPostData]=useState([]);
    const[name,setName]=useState('');
    const[trigger,setTrigger]=useState(false);
    // using axios 
        useEffect(()=>
        {
            axios.get("http://jsonplaceholder.typicode.com/users")
            .then((res)=>
            setPostData(res.data));
        })

        const postUserData=()=>{
            axios.post("http://jsonplaceholder.typicode.com/users",{name:name})
            .then((res)=>console.log(res.data))
        }

         

 

        return(<>
           <div>
           {
              postData.map(post=>
                {
                return(
                    <div key={post.id}>
                    <p>{post.name}</p>
                    </div>
                
                )
                })
            }
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={postUserData}>Post</button>
           </div>
            
          
        </>)
} 