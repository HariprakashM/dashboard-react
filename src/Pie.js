import React from 'react';

import { PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


function Graphs() {
    let data = [
        {
            month: 'Jan',
            Earnings: 0,
        },
        {
            month: 'Feb',
            Earnings: 10000,
        },
        {
            month: 'Mar',
            Earnings: 5000,
        },
        {
            month: 'Apr',
            Earnings: 15000,
        },
        {
            month: 'May',
            Earnings: 10000,
        },
        {
            month: 'Jun',
            Earnings: 20000,
        },
        {
            month: 'Jul',
            Earnings: 15000,
        },
        {
            month: 'Aug',
            Earnings: 25000,
        },
        {
            month: 'Sep',
            Earnings: 20000,
        },
        {
            month: 'Oct',
            Earnings: 30000,
        },
        {
            month: 'Nov',
            Earnings: 25000,
        },
        {
            month: 'Dec',
            Earnings: 35000,
        }

    ];

    const pieData = [
        { name: "Direct", value: 55 },
        { name: "Referral", value: 15 },
        { name: "Social", value: 30 }
    ];
    const COLORS = ["#4e73df", "#36b9cc", "#1cc88a"];
    
    function CustomTooltip({ payload, label, active }) {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${label}`}</p>
                    <p className="desc">{`Earnings: $${payload[0].value} `}</p>
                </div>
            );
        }

        return null;
    }


    return (
        <>
            <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                    </div>
                    <div className="card-body">
                        <div className="chart-area" style={{ width: "100%", height: 350 }}>
                            <ResponsiveContainer >
                                <AreaChart
                                    data={data}
                                    margin={{
                                        top: 10,
                                        right: 0,
                                        left: 0,
                                        bottom: 0
                                    }}
                                >
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Area type="monotone" dataKey="Earnings" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} fill="#f6f8fd" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-5">
                <div className="card shadow mb-4">

                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                    </div>

                    <div className="card-body" style={{ width: "100%" }}>

                        <ResponsiveContainer height={307}>
                            <PieChart >
                                <Pie
                                    data={pieData}
                                    cx={"50%"}
                                    cy={"50%"}
                                    innerRadius={100}
                                    outerRadius={120}
                                    fill="#8884d8"
                                    paddingAngle={1}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="mt-4 text-center small">
                            <span className="mr-2">
                                <i className="fas fa-circle text-primary"></i> Direct
                            </span>
                            <span className="mr-2">
                                <i className="fas fa-circle text-success"></i> Social
                            </span>
                            <span className="mr-2">
                                <i className="fas fa-circle text-info"></i> Referral
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Graphs
