import React from 'react'
import Notification from './Notification'

const Toast = () => {

    // Toast component with different types and there respective colors
    // Notification component 

    return (
        <div className="bg-slate-100 flex flex-col items-center pl-20 pr-8 pt-7 pb-12 max-md:px-5">
            <Notification />
            <div className="shadow-sm bg-white flex w-[512px] max-w-full flex-col items-stretch mt-16 mb-40 px-9 py-12 rounded-lg max-md:my-10 max-md:px-5">
                <div className="text-white text-3xl font-semibold whitespace-nowrap shadow-sm bg-green-500 justify-center items-center px-16 py-7 rounded-lg max-md:max-w-full max-md:px-5">
                    Success
                </div>
                <div className="text-white text-3xl font-semibold whitespace-nowrap shadow-sm bg-blue-500 justify-center items-center mt-9 px-16 py-7 rounded-lg max-md:max-w-full max-md:px-5">
                    Info
                </div>
                <div className="text-white text-3xl font-semibold whitespace-nowrap shadow-sm bg-orange-500 justify-center items-center mt-9 px-16 py-6 rounded-lg max-md:max-w-full max-md:px-5">
                    Warning
                </div>
                <div className="text-white text-3xl font-semibold whitespace-nowrap shadow-sm bg-red-500 justify-center items-center mt-9 px-16 py-7 rounded-lg max-md:max-w-full max-md:px-5">
                    Error
                </div>
            </div>
        </div>
    )
}

export default Toast