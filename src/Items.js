import React from 'react'
import { Link } from 'react-router-dom'
function Items(props) {
  return (
    <div className='col-lg-4 mb-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.data.image} style={{ height: "10rem" }} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.data.pname}</h5>
                        <h6>{props.data.price}</h6>
                        <p className="card-text">{props.data.desc}</p>
                        <Link  to={`/products/view/${props.data.id}`}className="btn btn-sm btn-primary mr-2">View</Link>
                        <Link  to={`/products/edit/${props.data.id}`}className="btn btn-sm btn-primary mr-2">Edit</Link>
                        <button className='btn btn-primary  btn-sm' onClick={()=>props.deleteproduct(props.data.id)}>Delete</button>
                    </div>
            </div>

        </div >
  )
}

export default Items