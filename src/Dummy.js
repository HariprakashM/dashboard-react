import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
function Dummy() {
  const [view, setview] = useState([])
  let params = useParams();
  useEffect(() => {
    let fetchdata = async () => {
      let a = await axios.get(`https://624bd7e644505084bc55fec9.mockapi.io/table/${params.id}`)
      setview(a.data)
    }
    fetchdata()
  }, [])


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-5'>
          <div className='ml-10 mt-10'>
            <ul class="list-group">
              <li class="list-group-item active" aria-current="true">User Details</li>
              <li class="list-group-item">{`Name:${view.Name}`}</li>
              <li class="list-group-item">{`Position:${view.position}`}</li>
              <li class="list-group-item">{`Office:${view.office}`}</li>
              <li class="list-group-item">{`Age:${view.age}`}</li>
              <li class="list-group-item">{`Startdate:${view.startdate}`}</li>
              <li class="list-group-item">{`Salary:${view.salary}`}</li>
            </ul>



          </div>


        </div>
      </div>
    </div>

  )
}
function Dview({ data }) {
  return (
    <div>
      <div >Name:{data.Name}</div>
      <div >Position:{data.position}</div>
      <div >Office:{data.office}</div>
      <div >Age:{data.age}</div>
      <div >Start-Date:{data.startdate}</div>
      <div >Salary:{data.salary}</div>
    </div>
  )
}

export default Dummy