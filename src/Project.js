import React from 'react'
import Box from './Box'
import Last from './Last'

import Progress from './Progress'
function Project() {
    const prodatas = [
        {
            name: "Server Migration",
            value: 20,
            color: "bg-danger"
        },
        {
            name: "Sales Tracking",
            value: 40,
            color: "bg-warning"
        },
        {
            name: "Customer Database",
            value: 60,
            color: ""
        },
        {
            name: "Payout Details",
            value: 80,
            color: "bg-info"
        },
        {
            name: "Account Setup",
            value: 100,
            color: "bg-success"
        }
    ]
    const bdatas = [
        {
            name: "primary",
            color: "#4e73df",
            shadow:"white"
        },
        {
            name: "success",
            color: "#1cc88a",
            shadow:"white"
        },
        {
            name: "info",
            color: "#36b9cc",
            shadow:"white"
        },
        {
            name: "warning",
            color: "#f6c23e",
            shadow:"white"
        },
        {
            name: "danger",
            color: "#e74a3b",
            shadow:"white"
        },
        {
            name: "secondary",
            color: "#858796",
            shadow:"white"
        },
        {
            name: "light",
            color: "#f8f9fc",
            shadow:"dark"
        },
        {
            name: "dark",
            color: "#5a5c69",
            shadow:"white"
        },
    ]
    return (
        <div class="row">


            <div class="col-lg-6 mb-4">


                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
                    </div>
                    <div class="card-body">
                        {
                            prodatas.map((e)=><Progress data={e}></Progress>)
                        }

                    </div>
                </div>


                <div class="row">
                    {
                        bdatas.map((e)=><Box data={e}></Box>)
                    }
                </div>

            </div>
            <div className="col-lg-6 mb-4">
                <Last></Last>
           
            
            </div>

           
        </div>
    )
}

export default Project