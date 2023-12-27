import React, { useEffect, useRef, useState } from 'react'

const Notification = ({ n, closeFunc }) => {

    const [cs, setCs] = useState(' duration-0')
    const [csName, setCsname] = useState('')
    const [svg, setSvg] = useState()
    const ref = useRef(null)

    useEffect(() => {
        // console.log(notArr)

        switch (n.value) {
            case 'error':
                setCsname('red')
                setSvg(<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className="fill-red-500 aspect-square object-contain object-center w-[25px] fill-black fill-opacity-0 overflow-hidden shrink-0 max-w-full">
                    <g clip-path="url(#clip0_7_12)">
                        <path d="M12.5 0.390625C5.81055 0.390625 0.390625 5.81055 0.390625 12.5C0.390625 19.1895 5.81055 24.6094 12.5 24.6094C19.1895 24.6094 24.6094 19.1895 24.6094 12.5C24.6094 5.81055 19.1895 0.390625 12.5 0.390625ZM18.4375 15.6787C18.667 15.9082 18.667 16.2793 18.4375 16.5088L16.5039 18.4375C16.2744 18.667 15.9033 18.667 15.6738 18.4375L12.5 15.2344L9.32129 18.4375C9.0918 18.667 8.7207 18.667 8.49121 18.4375L6.5625 16.5039C6.33301 16.2744 6.33301 15.9033 6.5625 15.6738L9.76562 12.5L6.5625 9.32129C6.33301 9.0918 6.33301 8.7207 6.5625 8.49121L8.49609 6.55762C8.72559 6.32812 9.09668 6.32812 9.32617 6.55762L12.5 9.76562L15.6787 6.5625C15.9082 6.33301 16.2793 6.33301 16.5088 6.5625L18.4424 8.49609C18.6719 8.72559 18.6719 9.09668 18.4424 9.32617L15.2344 12.5L18.4375 15.6787Z" fill="#EF4444" />
                    </g>
                    <defs>
                        <clipPath id="clip0_7_12">
                            <rect width="25" height="25" fill="white" />
                        </clipPath>
                    </defs>
                </svg>)
                break;

            case 'info':
                setCsname('blue')
                setSvg(<svg className='fill-blue-500' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>)
                break;

            case 'warning':
                setCsname('orange')
                setSvg(
                    <svg className='fill-orange-500' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z" /></svg>
                )
                break;

            default:
                setCsname('green')
                setSvg(<svg className='fill-green-500' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <g clip-path="url(#clip0_4_19)">
                        <path d="M24.6094 12.5C24.6094 19.1878 19.1878 24.6094 12.5 24.6094C5.81216 24.6094 0.390625 19.1878 0.390625 12.5C0.390625 5.81216 5.81216 0.390625 12.5 0.390625C19.1878 0.390625 24.6094 5.81216 24.6094 12.5ZM11.0993 18.9118L20.0837 9.92744C20.3888 9.62236 20.3888 9.12769 20.0837 8.82261L18.9789 7.71777C18.6738 7.41265 18.1791 7.41265 17.874 7.71777L10.5469 15.0448L7.12603 11.624C6.82095 11.3189 6.32627 11.3189 6.02114 11.624L4.91631 12.7288C4.61123 13.0339 4.61123 13.5286 4.91631 13.8336L9.99443 18.9118C10.2996 19.2169 10.7942 19.2169 11.0993 18.9118Z" fill="#22C55E" />
                    </g>
                    <defs>
                        <clipPath id="clip0_4_19">
                            <rect width="25" height="25" fill="white" />
                        </clipPath>
                    </defs>
                </svg>)
                break;
        }

        const timer = setTimeout(() => {
            ref.current.click()
        }, 10000)

        
        const dTimer = setTimeout(() => {
            setCs('duration-[10000ms] w-0')
        }, 100)

        return (() => {
            clearTimeout(timer)
            clearTimeout(dTimer)
        })
    }, [])


    return (
        <div className='self-end' >
            <div className={`border-b-${csName}-500 shadow-lg relative bg-white flex w-[439px] max-w-full items-stretch justify-between gap-5 px-4 py-7 rounded-lg  self-end max-md:flex-wrap`}>
                <span className={`absolute bottom-0 bg-${csName}-500  transition-width w-full ${cs}  left-0 h-1 rounded-md`}></span>
                <div className="flex items-stretch justify-between gap-5">
                    {svg}
                    <div className="text-gray-900 text-xl font-medium self-center grow shrink basis-auto my-auto">
                        <span className='capitalize'>{n.value}</span> toast notification
                    </div>
                </div>
                <a ref={ref} onClick={(e) => closeFunc(e, n.id)} href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className="cursor-pointer aspect-square object-contain object-center w-[15px] fill-indigo-300 overflow-hidden self-center shrink-0 max-w-full my-auto">
                        <path d="M8.82658 7.50016L14.7251 1.60135C15.0916 1.23517 15.0916 0.641039 14.7251 0.274865C14.3587 -0.0916217 13.7652 -0.0916217 13.3987 0.274865L7.50016 6.17367L1.60128 0.274865C1.23481 -0.0916217 0.641325 -0.0916217 0.274854 0.274865C-0.0916179 0.641039 -0.0916179 1.23517 0.274854 1.60135L6.17373 7.50016L0.274854 13.399C-0.0916179 13.7651 -0.0916179 14.3593 0.274854 14.7254C0.458089 14.9084 0.698234 15 0.938067 15C1.1779 15 1.41804 14.9084 1.60128 14.7251L7.50016 8.82633L13.3987 14.7251C13.582 14.9084 13.8221 15 14.0619 15C14.3018 15 14.5419 14.9084 14.7251 14.7251C15.0916 14.359 15.0916 13.7648 14.7251 13.3987L8.82658 7.50016Z" fill="#AEB0D7" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default Notification