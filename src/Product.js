import React, { useEffect, useState } from 'react'
import Items from './Items'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import Lottie from 'react-lottie';
import animationData from "./lotties/97930-loading.json";
export default function Products() {
  const [loading, setloading] = useState(false)
  const [product, setproduct] = useState([])
  const deleteproduct = async (id) => {
    let ask = window.confirm("Do you want to delete!!")
    if (ask) {
      await axios.delete(`https://624bd7e644505084bc55fec9.mockapi.io/product/${id}`)
      fetchdata();
    }
  }
  useEffect(() => {

    fetchdata()
  }, [])
  let fetchdata = async () => {
    setloading(true)
    let a = await axios.get("https://624bd7e644505084bc55fec9.mockapi.io/product")
    setloading(false)
    setproduct(a.data);
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }}
  return (
    <div className='container'>
      <div className='row'>
        <h1 className='col-lg-10 text-center'>
          Products
        </h1>
        <Link to={"/products/addproduct"} className='btn btn-primary mb-4 col-lg-2'>Add product</Link>


      </div>
      {loading ? <Lottie
        options={defaultOptions}
        height={400}
        width={400} />: <div className='row'>

        {
          product.map((e) => <Items data={e} deleteproduct={deleteproduct}></Items>)
        }



      </div>}
    </div>
  )

} 
