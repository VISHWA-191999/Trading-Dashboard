import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { FaBars, FaChartBar, FaHome, FaWallet } from 'react-icons/fa';
import { HiOutlineDotsVertical } from "react-icons/hi";
import logo from './../assets/logo.avif'
import { SiTradingview } from "react-icons/si";
import { MdHistory, MdOutlineSettings, MdSupportAgent } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
const Sidebar = () => {
   

    return (
      <div id='sidebar' className="max-w-56  ">
        {/* Sidebar */}
        <div
          className={`bg-gray-900 text-white h-screen p-4 transition-all duration-300 `}
        >
         
            <FaBars className='ml-auto'/>
           {/* <div className='relative'>
           <input type="text" className='' />
           <BiSearch className='absolute text-black top-2 '/>

            </div>  */}
            <div className="relative w-full mt-2">
  <input 
    type="text" 
    className="w-full py-1 pl-8 pr-4 border rounded-lg focus:outline-none focus:ring-2 hover:ring-blue-500 cursor-pointer" 
    placeholder="Search..."
  />
  <BiSearch 
    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
  />
</div>

      
          
          <ul>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg">
              <FaHome />
             <span>Home</span>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg">
              <FaWallet />
               <span>Organization</span>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg">
              <FaChartBar />
             <span>Assets</span>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg">
              <SiTradingview />
               <span>Trade</span>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg">
              <MdHistory />
               <span>History</span>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg">
              <CiWallet />
               <span>Wallet</span>
            </li>
           
          
           
          </ul>


            
              <ul  className='mt-16'>
              <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg">
              <IoIosNotifications />
             <span>Notifications</span>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg">
              <MdSupportAgent/>
               <span>Support</span>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg">
              <MdOutlineSettings/>
             <span>Settings</span>
            </li>
              </ul>

            
            <div className='flex gap-1 mt-1 bg-gray-700 w-full text-center justify-center p-1 rounded '>
                <div className='relative
                w-10 h-10 rounded-full bg-red-200'>

             <img src={logo} alt="logo" className=' rounded-full w-full h-full' />
           
             <div
    className="absolute top-0 right-0 w-2 h-2 rounded-full bg-green-600 border-2 "
  ></div>
                </div>
             <div className='flex flex-col text-xs'>
                <h6>Brooklyn Simmons</h6>
                <p>brooklyn@simmons.com</p>
             </div>
                <HiOutlineDotsVertical size={26}/>
            </div>

        </div>
  
       
      </div>
    );
  };


export default Sidebar
