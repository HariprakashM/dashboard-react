import Card from './Card';
import Chart from './Chart';
import Project from './Project';
import Progress from './ProgressBar';
export default function Dashborad() {
    const cont=[
        {
            name:"EARNINGS (MONTHLY)",
            price:"$40,000",
            color:"primary",
            icon:"calendar",
            bar:""
        },
        {
            name:"EARNINGS (ANNUAL)",
            price:"$218,000",
            color:"success",
            icon:"dollar-sign",
            bar:""
        },
        {
            name:"TASKS",
            price:"50%",
            color:"info",
            icon:"clipboard-list",
            bar:<Progress />
        },
        {
            name:"PENDING REQUESTS",
            price:18,
            color:"warning",
            icon:"comments",
            bar:""
        },
    ]
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div class="row">
                {
                    cont.map((e)=><Card data={e}></Card>)
                }
            </div>
            <Chart></Chart>
            <Project></Project>
        </>
    )
}