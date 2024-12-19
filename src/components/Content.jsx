import React from 'react'
import MarketOverView from './MarketOverView'
import WhiteBalance from './WhiteBalance'
import RecentPost from './RecentPost'



const Content = () => {
  return (
    <div className='flex p-2 gap-2 shrink-0'>

        <div className='w-1/2 bg-gray-900 p-2 rounded-lg'>
        <MarketOverView/>
        </div>
      <div className='w-[20%] bg-gray-900 rounded-lg'>
        <WhiteBalance/>
      </div>
      <div className='w-[30%]'>
        <RecentPost/>
      </div>
    </div>
  )
}

export default Content
