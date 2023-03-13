import React,{useState,useEffect} from 'react';
import axios from 'axios';
export default function AxiosCreate(){
    const[postData,setPostData]=useState([]);
    // using axios 
        useEffect(()=>
        {
            axios.get("http://jsonplaceholder.typicode.com/users")
            .then((res)=>
            setPostData(res.data));
        })



 

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
           </div>
            
          
        </>)
}