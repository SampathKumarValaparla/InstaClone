import React,{useState, useEffect} from "react";
import axios from 'axios'
// import data from '../../mock-data/data.json'
import Card from "../card/card";
import ldata from "../../mock-data/data.json"


const LandingPage = () => {
    const [data, setData] = useState([]);
    // console.log(ldata.user.length)
    const [localdata, setlocalData] = useState([]);


    useEffect( () => {
        axios.get("http://localhost:5000/api/v1/posts").then((res)=>{
            //console.log(res.data.post);
            setData(res.data.post)
            setlocalData(ldata.user)
            
            
        })
        
    }, [])
    
    
    return (
        <div className="post-container">
          
            {
                /*
                 localdata.map((post, index) => {
                    return (
                        <Card post={post} key={index} />
                    )
                })
                */
            }
            {
                data.map((post, index) => {
                    return (
                        <Card post={post} key={index} />
                    )
                })
            }
        </div>
    )
}

export default LandingPage;