
import React, { useEffect, useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const MarketOverView = () => {

    const [populationData, setPopulationData] = useState([]);

    const fetchData = async () => {
        try {
          const response = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
          const data = await response.json();
          console.log(data); // Use the fetched data here
          const formattedData = data.data.map((item) => ({
            year: item.Year, // Map "Year" to "year"
            population: item.Population, // Map "Population" to "population"
          }));
          setPopulationData(formattedData)
        } catch (error) {
          console.error("Error fetching data:", error); // Handle errors
        }
      };
    
    
   
      useEffect(()=>{
        fetchData();
      },[])
    console.log(populationData)
  return (
    <div >
        <div className='flex justify-between p-1'> 
            <h3>Market Overview</h3>
            <ul className='flex gap-2'>
                <li>NBST</li>
                <li>EFT</li>
                <li>WPCT</li>
                <li>RET</li>
                <li>WET</li>
            </ul>
        </div>
        <hr />
    <div className='w-full ml-2 mt-1 '>

      <LineChart width={450} height={230} data={populationData} margin={{ top: 5, right: 30, left: 27, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" /> {/* Year as the X-axis */}
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="linear" dataKey="population" stroke="#8884d8" /> {/* Population as the Y-axis */}
      </LineChart>
    </div>
    <hr />
    <div className='flex justify-between items-center mt-2 '>
        <p>Get in depth charts in Trade</p>
        <button className='bg-green-400 rounded px-2 py-1 '>Trade</button>
    </div>
    </div>
  )
}

export default MarketOverView
