import React, { useEffect, useState } from 'react'

const Step = ({ step }) => {
    const [content, setContent] = useState([])
    useEffect(() => {
        let arr = []
        for (let i = 0; i < 4; i++) {
            arr.push(
                <div key={i} className='flex items-center justify-start gap-x-3'>
                    <p className={`Ellipse1 w-[34px] h-[34px]  ${step < i+1? 'bg-gray-200':'bg-red-400'}  rounded-full flex items-center justify-center text-white text-sm font-medium font-['Poppins']`} >
                        {i + 1}
                    </p>
                    {i < 3 &&
                        <span className={`Rectangle1 w-[100px] h-1.5 ${step <= i+1? 'bg-gray-200':'bg-red-400'} rounded-[50px]`} />}
                </div>
            )
        }
        setContent(arr)
    }, [step])

    return (
        <div className='flex items-center justify-between pt-2 pb-8 border-b-[1px] border-gray-200 mb-8'>
            {content && content}
        </div>
    )
}

export default Step