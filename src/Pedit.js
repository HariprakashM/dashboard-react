import React from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';

function Pedit() {
    let params=useParams()
    let navigate=useNavigate()
    let formik=useFormik({
        initialValues:{
            pname:"",
            price:"",
            desc:"",
            image:""
        },
        validate:(values)=>{
            let errors={}
            if(!values.pname){
                errors.pname="please enter the product name"
            }
            if(!values.price){
                errors.price="please enter the product price"
            }
             if(!values.desc){
                errors.desc="please enter the product description "
            }
             if(!values.image){
                errors.image="please enter the product image"
            }
            return errors;
        },
        onSubmit:(values)=>{
            console.log(values);
            axios.put(`https://624bd7e644505084bc55fec9.mockapi.io/product/${params.id}`,values)
            navigate("/products")
        }
      
    });
    useEffect(() => {
      let fetchdata = async () => {
          let a = await axios.get(`https://624bd7e644505084bc55fec9.mockapi.io/product/${params.id}`)
          formik.setValues(a.data)
      }
      fetchdata()
  }, [])
    return (
        <div className='container'>
            <form onSubmit={formik.handleSubmit} autoComplete="off">
                <div className='row'>
                    <h1>Create product</h1>
                    <div className='col-lg-10'>
                        <label>Product name:</label>
                        <input type="text" className={`form-control ${formik.errors.pname ?"op":"pp"}` }name="pname" onChange={formik.handleChange} value={formik.values.pname}></input>
                    </div>
                    {
                        formik.errors.pname ? <span>{formik.errors.pname}</span> : null
                    }
                    <div className='col-lg-10'>
                        <label>Product price:</label>
                        <input type="text" className={`form-control ${formik.errors.price ?"op":"pp"}` } name="price" onChange={formik.handleChange} value={formik.values.price}></input>
                    </div>
                    {
                        formik.errors.price ? <span>{formik.errors.price}</span> : null
                    }
                    <div className='col-lg-10'>
                        <label>Product description:</label>
                        <textarea cols="30" rows="5" className={`form-control ${formik.errors.desc ?"op":"pp"}` } name="desc"onChange={formik.handleChange} value={formik.values.desc} ></textarea>
                    </div>
                    {
                        formik.errors.desc ? <span>{formik.errors.desc}</span> : null
                    }
                    <div className='col-lg-10'>
                        <label>Product image link:</label>
                        <input type="text" className={`form-control ${formik.errors.image ?"op":"pp"}` } name="image" onChange={formik.handleChange} value={formik.values.image}></input>
                    </div>
                    {
                        formik.errors.image ? <span>{formik.errors.image}</span> : null
                    }
                    <div className='col-lg-10'>
                        <input type="submit" value="submit" className='btn btn-primary mt-2' disabled={!formik.isValid}></input>
                    </div>
                </div>
            </form>
        </div>
    )
}
  


export default Pedit