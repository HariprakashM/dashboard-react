import React from 'react'

function Progress({data}) {
   
    return (
        <div><h4 class="small font-weight-bold">{data.name} <span
            class="float-right">{data.value}%</span></h4>
            <div class="progress mb-4">
                <div class={`progress-bar ${data.color} role="progressbar"`} style={{width: `${data.value}%`}}
                    {...`aria-valuenow="${data.value}%" aria-valuemin="0" aria-valuemax="100"`}></div>
                    
            </div>
            </div>
    )
}
export default Progress