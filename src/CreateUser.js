import { useFormik } from "formik"
import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function CreateUser() {
    let navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            Name: "",
            position: "",
            age: "",
            office: "", 
            startdate: "",
            salary: ""
        },
        validate: (values) => {
            let errors = {}

            if (!values.Name) {
                errors.Name = "please enter the name"
            } else if (values.Name.length < 5) {
                errors.Name = "length should be more than 5 chars "
            }
            return errors
        },


        onSubmit: (values) => {
            console.log(values);
            axios.post("https://624bd7e644505084bc55fec9.mockapi.io/table", values)
            navigate('/table')
        }
    });

    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit} autoComplete="off">
                <div className="row">
                    <div className="col-lg-8">
                        <label>Name:</label>
                        <input type="text" className="form-control" name="Name" onChange={formik.handleChange} value={formik.values.Name}></input>
                        {
                            formik.errors.Name ? <span>{formik.errors.Name}</span> : null
                        }
                    </div>
                    <div className="col-lg-8">
                        <label>Position:</label>
                        <input type="text" className="form-control" name="position" onChange={formik.handleChange} value={formik.values.position}></input>
                        {
                            formik.errors.position ? <span>{formik.errors.position}</span> : null
                        }
                    </div>
                    <div className="col-lg-8">
                        <label>Office:</label>
                        <input type="text" className="form-control" name="office" onChange={formik.handleChange} value={formik.values.office}></input>
                        {
                            formik.errors.office ? <span>{formik.errors.office}</span> : null
                        }
                    </div>
                    <div className="col-lg-8">
                        <label>Age:</label>
                        <input type="text" className="form-control" name="age" onChange={formik.handleChange} value={formik.values.age}></input>
                        {
                            formik.errors.age ? <span>{formik.errors.age}</span> : null
                        }
                    </div>
                    <div className="col-lg-8">
                        <label>Start-Date:</label>
                        <input type="date" className="form-control" name="startdate" onChange={formik.handleChange} value={formik.values.startdate}></input>
                        {
                            formik.errors.startdate ? <span>{formik.errors.startdate}</span> : null
                        }
                    </div>
                    <div className="col-lg-8">
                        <label>Salary:</label>
                        <input type="text" className="form-control" name="salary" onChange={formik.handleChange} value={formik.values.salary}></input>
                        {
                            formik.errors.salary ? <span>{formik.errors.salary}</span> : null
                        }
                    </div>
                    <div className="col-lg-12">
                        <input type="submit" value="Submit" className="btn btn-primary text-center mt-4" disabled={!formik.isValid}></input>
                    </div>
                </div>
            </form>
        </div>
    )
}