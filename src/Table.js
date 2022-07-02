import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Lottie from 'react-lottie';
import animationData from "./lotties/9844-loading-40-paperplane.json";
export default function Table() {
    const [user,setuser]=useState([])
    const [loading,setloading]=useState(false)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }}
    useEffect(()=>{
       
        fetchdata()
    },[])
    let fetchdata=async()=>{
        setloading(true)
        let a= await axios.get("https://624bd7e644505084bc55fec9.mockapi.io/table")
        setloading(false)
         setuser(a.data)
     }
    let hdelete=async(id)=>{
        let ask= window.confirm("Do you want to delete!!")
        if(ask){
        await axios.delete(`https://624bd7e644505084bc55fec9.mockapi.io/table/${id}`)
        fetchdata()}
    }
    
    return (

        <>

            <h1 class="h3 mb-2 text-gray-800">Tables</h1>
            <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                For more information about DataTables, please visit the <a target="_blank"
                    href="https://datatables.net">official DataTables documentation</a>.</p>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <Link to="/table/createuser" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> create user</Link>
            </div>
{
    loading?<Lottie 
    options={defaultOptions}
    height={400}
    width={400}
  />:


            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map((e) =>
                                        <tr>
                                            <td>{e.Name}</td>
                                            <td>{e.position}</td>
                                            <td>{e.office}</td>
                                            <td>{e.age}</td>
                                            <td>{e.startdate}</td>
                                            <td>${e.salary}</td>
                                            <td>
                                                <Link  to={`/table/view/${e.id}`}className="btn btn-sm btn-primary mr-2">View</Link>
                                                <Link  to={`/table/edit/${e.id}`}className="btn btn-sm btn-primary mr-2">Edit</Link>
                                                <button onClick={()=>hdelete(e.id)} className="btn btn-sm btn-primary">Delete</button>
                                            </td>
                                        </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
}
        </>
    )
}