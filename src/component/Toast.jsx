import React, {  useEffect, useState } from 'react'
import Notification from './Notification'

const Toast = () => {

    // Toast component with different types and there respective colors
    // Notification component 

    const [toast, setToast] = useState(['success', 'info', 'warning', 'error'])
    const [notArr, setNotArr] = useState([])



    useEffect(()=> {
        console.log(notArr)
    }, [notArr])

    const onClickHandler = t => {
        setNotArr([...notArr, t])
    }


    return (
        <div className="bg-slate-100 flex flex-col items-center pl-20 pr-8 pt-7 pb-12 max-md:px-5">
            {notArr.length > 0 && <Notification allNots={notArr}  />}

            <div className="shadow-sm bg-white gap-y-9 flex w-[512px] max-w-full flex-col items-stretch mt-16 mb-40 px-9 py-12 rounded-lg max-md:my-10 max-md:px-5">

                {toast.length > 0 && toast.map((t, i) => {
                    let csName = ''
                    switch (t) {
                        case 'error':
                            csName = 'bg-red-500'
                            break;

                        case 'info':
                            csName = 'bg-blue-500'
                            break;

                        case 'warning':
                            csName = 'bg-orange-500'
                            break;

                        default:
                            csName = 'bg-green-500'
                            break;
                    }
                    return (
                        <div key={i} className={`text-white capitalize cursor-pointer  text-3xl font-semibold whitespace-nowrap shadow-sm  justify-center items-center px-16 py-7 rounded-lg max-md:max-w-full max-md:px-5 ${csName}`} onClick={() => onClickHandler(t)}>
                            {t}
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default Toast