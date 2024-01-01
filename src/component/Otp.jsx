import React, { useEffect, useRef, useState } from 'react'

function Otp() {

    const CODE = [1, 2, 3, 4]

    const [inputs, setInputs] = useState(new Array(4).fill(''))
    const refs = useRef([])
    const [alert, setAlert] = useState()
    const [colors, setColors] = useState(new Array(4).fill(''))
    const [modal, setModal]  = useState('')

    const onChangeHandler = (e, i) => {
        // console.log(isNaN(e.target.value))
        const temp = [...inputs]
        if (e.target.value === ' ')
            temp[i] = '0'
        else
            temp[i] = e.target.value

        let c = [...colors]
        console.log(isNaN(temp[i]))
        if (isNaN(temp[i])) {
            c[i] = 'red'
        }
        else {
            c[i] = 'green'
        }

        setColors(c)
        setInputs(temp)

        if (e.target.value && refs.current.length > i + 1) {
            refs.current[i + 1].focus()
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(inputs)
        const match = CODE.every((e, i) => e == inputs[i])
        if(match) {
            setModal('Thank you for verification.')
        }
        else {
            setModal('Invalid OTP.')

        }
    }

    const handlePaste = (event) => {
        event.preventDefault();
        const pasteData = event.clipboardData.getData('text/plain').trim().slice(0, 4);
        if (isNaN(pasteData)) {
            setAlert('Please paste number')
            return
        }

        const otpArray = [...pasteData.split('').map(Number), ...new Array(4 - pasteData.length).fill('')];
        console.log(otpArray)
        setInputs(otpArray);
    };


    return (
        <>
          
          {modal &&
                    <div className='fixed w-full h-full top-0  flex items-center justify-center bg-gray-800'>
                        <h2 className='bg-white p-10 flex items-center justify-center border rounded-2xl text-3xl'>{modal}</h2>
                    </div>
                  }
            <div className="bg-gray-800 flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
                <div className="shadow-lg bg-slate-800 flex w-full max-w-[996px] flex-col justify-center items-center mt-20 mb-32 px-16 py-12 rounded-3xl max-md:max-w-full max-md:my-10 max-md:px-5">
                   
                    <div className="flex w-[788px] max-w-full flex-col mt-24 max-md:mt-10">
                        <p className="text-indigo-300 text-2xl font-bold self-center whitespace-nowrap">
                            Verify your email address
                        </p>
                        <p className="text-slate-400 text-center text-sm max-w-[491px] self-center mt-5 max-md:max-w-full">
                            A four-digit code has been sent to your email
                            name@frontendpro.dev.Please enter the code below to verify your
                            email address.
                        </p>
                        <form onSubmit={(e) => handleSubmit(e)} className="self-stretch mt-12 max-md:max-w-full max-md:mt-10">
                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                {inputs.length > 0 && inputs.map((input, i) => {
                                    return (
                                        <input onPaste={e => handlePaste(e)} ref={e => refs.current[i] = e} key={i} className={`text-indigo-300  text-center text-9xl w-3/12 max-md:w-full max-md:ml-0 font-bold whitespace-nowrap border shadow-lg  ${input ? `border-${colors[i]}-500` : 'border-slate-700'} bg-gray-800 justify-center items-stretch  pt-16 pb-14 px-14 rounded-xl border-solid  max-md:text-4xl max-md:mt-8 max-md:px-5`} value={input} placeholder='0' name={`input${i + 1}`} type='text' maxLength='1' onChange={e => onChangeHandler(e, i)} />
                                    )
                                }
                                )}
                                {/* <input className=" text-center  text-9xl font-bold whitespace-nowrap border shadow-lg bg-gray-800 justify-center w-3/12 max-md:w-full pt-16 pb-14 px-16 rounded-xl border-solid  items-start max-md:text-4xl max-md:mt-8 max-md:pl-6 max-md:pr-5" value='1' /> */}

                            </div>

                            {alert && <p className='text-red-500 text-sm font-medium mt-4'>{alert}</p>}

                            <button className="text-white text-lg font-medium whitespace-nowrap justify-center items-center shadow-sm bg-gray-800 self-center w-[442px] max-w-full mt-14 px-16 py-4 rounded-lg max-md:mt-10 max-md:px-5">
                                Verify OTP
                            </button>
                        </form>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Otp