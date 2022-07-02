import React, { useState } from 'react'
import { Params, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
function Pview() {
    let params = useParams();
    const [view,setview]=useState([])
    useEffect(() => {
        let fetchdata = async () => {
          let a = await axios.get(`https://624bd7e644505084bc55fec9.mockapi.io/product/${params.id}`)
          setview(a.data)
        }
        fetchdata()
      }, [])

    

    return (
        
        <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='ml-10 mt-10'>
              <ul class="list-group">
                <li class="list-group-item active" aria-current="true">Product Details</li>
                <li class="list-group-item">{`Name:${view.pname}`}</li>
                <li class="list-group-item">{`Price:${view.price}`}</li>
                <li class="list-group-item">{`Description:${view.desc}`}</li>
                <li class="list-group-item">{`Image:`}<img  style={{width:"500px" , height: "400px"}} src={`${view.image}`}/></li>
                
              </ul>
  
  
  
            </div>
  
  
          </div>
        </div>
      </div>
    )
}

export default Pview