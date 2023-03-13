import React, { memo, useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import "./Diagram.css"

export default memo (function Diagram() {
  const api = 'https://api.covidtracking.com/v1/states/la/daily.json';
  const [data, setData] = useState()

  useEffect(() => {
    fetch(api).then(response => response.json()).then(result => {
      setData(result)
    })
  }, [])
 
    return (
      <AreaChart
      width={1500}
      height={500}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="state" />
      <YAxis />
      <Tooltip />
      <Area type="monotone"  dataKey="death" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
    );
  })



