import React from 'react'

const WhiteBalance = () => {
  return (
    <div className=" rounded-xl p-1 w-full">
    <h2 className="text-white mb-1">Wallet Balance</h2>
    <hr className='mt-3' />
    <div className="relative w-20 h-20 mx-auto mb-2 mt-2">
        <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#22C55E"
                strokeWidth="10"
                strokeDasharray="283"
                strokeDashoffset="70"
            />
        </svg>
    </div>

    <div className="space-y-2">
        <BalanceItem token="USDT" amount="300.58" color="#22C55E" />
        <BalanceItem token="NBST" amount="270.72" color="#22C55E" />
        <BalanceItem token="EFT" amount="203.04" color="#22C55E" />
        <BalanceItem token="WET" amount="328.76" color="#22C55E" />
    </div>
    <hr className='mt-4' />
    <button className=" px-2 block mx-auto bg-[#22C55E] py-1 rounded-lg text-white mt-2">
        Manage Wallet
    </button>
</div>

  )
}

export default WhiteBalance

const BalanceItem = ({ token, amount, color }) => (
    <div className="flex justify-between items-center">
        <span className="text-gray-400">{token}</span>
        <span className="text-white">${amount}</span>
    </div>
);