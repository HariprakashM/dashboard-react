import React from 'react'

function Box({data}) {
    
    return (
        <><div class="col-lg-6 mb-4">
            <div class={`card bg-${data.name} text-${data.shadow} shadow`}>
                <div class="card-body">
                    {data.name}
                    <div class={`text-${data.shadow}-50 small`}>{data.color}</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Box;