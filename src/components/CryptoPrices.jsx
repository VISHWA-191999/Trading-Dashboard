import React, { useState, useEffect } from 'react';
import { IoIosInformationCircle } from "react-icons/io";

const CryptoPrices = () => {
  const [data, setData] = useState([
    
  ]);

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      const data = await response.json();
    //  console.log(data.bpi)
    const pricesArray = Object.entries(data.bpi).map(([key, value]) => ({
        code: key,
        rate: value.rate,
        description: value.description,
        rate_float:value.rate_float,

      }));

      setData(pricesArray);
   
    };

    fetchCryptoPrices();
  }, []);
  console.log(data)
  data.map((e)=>{
    console.log(e)

  })
  return (

//     "code": "USD",
// "symbol": "&#36;",
// "rate": "103,570.55",
// "description": "United States Dollar",
// "rate_float": 103570.5502
    <div className="flex justify-center gap-6 p-1">

        {
            data.map((ele)=>(
                <div className="bg-gray-900 shadow-lg rounded-lg p-2 ">
                <h3 className="text-base font-semibold text-center ">Bitcoin ({ele.code})</h3>
                <p className='text-sm text-gray-700'>{ele.description}</p>
                
                <div className='flex gap-3 justify-between'>
                    <div>
                <p>rate :</p>
                <p className="text-sm font-bold text-green-600 text-center">&#36; {ele.rate} </p>
                    </div>
                    <div>
                <p>rate_float</p>
                <p className="text-sm font-bold text-green-600 text-center">&#36; {ele.rate_float} </p>
                    </div>
                </div>
        
                <div className='flex justify-between mt-1 items-center'>
                <IoIosInformationCircle/>
                <button className='bg-green-600 py-1 px-2 rounded'>Trade</button>
                </div>
                
              </div>
             
            ))
        }

      {/* <div className="bg-white shadow-lg rounded-lg p-6 w-60">
        <h3 className="text-xl font-semibold text-center text-gray-700">Bitcoin (GBP)</h3>
        <p className="text-2xl font-bold text-green-600 text-center">£{prices.GBP.toLocaleString()}</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 w-60">
        <h3 className="text-xl font-semibold text-center text-gray-700">Bitcoin (EUR)</h3>
        <p className="text-2xl font-bold text-green-600 text-center">€{prices.EUR.toLocaleString()}</p>
      </div> */}
    </div>
  );
};

export default CryptoPrices;
