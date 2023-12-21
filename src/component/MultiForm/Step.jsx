import React from 'react'

const Step = () => {
    return (
        <div className='flex items-center justify-between pt-2 pb-8 border-b-[1px] border-gray-200 mb-8'>
            <p className="Ellipse1 w-[34px] h-[34px] bg-red-400 rounded-full flex items-center justify-center text-white text-sm font-medium font-['Poppins']" >
                1
            </p>
            <div className="Rectangle1 w-[100px] h-1.5 bg-gray-200 rounded-[50px]" />
            <p className="Ellipse1 w-[34px] h-[34px] bg-gray-200 rounded-full flex items-center justify-center text-gray-900 text-sm font-medium font-['Poppins']" >
                2
            </p>

            <div className="Rectangle1 w-[100px] h-1.5 bg-gray-200 rounded-[50px]" />
            <p className="Ellipse1 w-[34px] h-[34px] bg-gray-200 rounded-full flex items-center justify-center text-gray-900 text-sm font-medium font-['Poppins']" >
                3
            </p>

            <div className="Rectangle1 w-[100px] h-1.5 bg-gray-200 rounded-[50px]" />
            <p className="Ellipse1 w-[34px] h-[34px] bg-gray-200 rounded-full flex items-center justify-center text-gray-900 text-sm font-medium font-['Poppins']" >
                4
            </p>
        </div>
    )
}

export default Step