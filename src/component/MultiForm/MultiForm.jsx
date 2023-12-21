import React, { useState } from 'react'
import Step from './Step'

const MultiForm = () => {
    const [step, setStep] = useState(1)
    const [nextBtnClicked, setNextBtnClicked] = useState(false)
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        link: '',
    })
    const {fullName, email, phone, link} = formData

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(emailRegex.test(email))
        setNextBtnClicked(true)
    }
    const onChangeHandler = e => {
        console.log(e.target.name)
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


    return (
        <div className='bg-lime-50 w-full min-h-screen flex items-center justify-center'>
            <div>
                <h1 className="mb-2 text-gray-900 text-[32px] font-black font-['Merriweather']">Join our Community of Developers</h1>
                <p className="mb-8 text-center text-gray-900 text-lg font-normal font-['Poppins']">To join our community and participate in frontend challenges.<br />Please fill out the following form.</p>
                <div className='bg-white rounded-2xl shadow p-6'>
                    <Step />

                    <h2 className=" text-gray-900 text-2xl mb-2 font-medium font-['Poppins'] text-left">Personal Information</h2>
                    <p className="mb-8  text-gray-500 text-sm text-left font-normal font-['Poppins']">Please provide your personal details so we can get to know you better.</p>

                    <form action="" onSubmit={e=>onSubmitHandler(e)} className='text-left grid-cols-2 grid gap-x-10 gap-y-5 pb-8 border-b-[1px] border-gray-200 mb-8'>

                        <div>
                            <label className="block mb-2 w-full text-gray-900 text-sm font-medium font-['Poppins']">Full Name</label>
                            <input placeholder='Full Name' name='fullName' type='text' className={`py-1 block w-full px-2 rounded-[10px] border border-gray-300 focus:border-red-400 outline-none ${fullName?'text-gray-900':'text-gray-400'} text-sm font-normal font-['Poppins']`} value={fullName} onChange={e=>onChangeHandler(e)} />
                            <p className={`${!fullName && nextBtnClicked?'block':'hidden'} w-full text-red-500 text-sm px-2 pt-1 font-['Poppins']`}>Please enter full name</p>

                        </div>
                        <div>
                            <label className="block mb-2 w-full  text-gray-900 text-sm font-medium font-['Poppins']">Email Address</label>
                            <input type='text' className={`py-1 block w-full px-2 rounded-[10px] border border-gray-300 focus:border-red-400 outline-none ${fullName?'text-gray-900':'text-gray-400'} text-sm font-normal font-['Poppins']`}placeholder='name@email.com' name='email' value={email} onChange={e=>onChangeHandler(e)} />
                            <p className={`${nextBtnClicked?'block':'hidden'} w-full text-red-500 text-sm px-2 pt-1 font-['Poppins']`}>Please enter {!emailRegex.test(email) && email && 'valid'} email address</p>
                        </div>

                        <div>
                            <label className="block mb-2 w-full  text-gray-900 text-sm font-medium font-['Poppins']">Phone Number</label>
                            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="block w-full py-1 px-2 rounded-[10px] border border-gray-300 focus:border-red-400 outline-none text-gray-400 focus:text-gray-900 text-sm font-normal font-['Poppins']" placeholder='045 242 566' />
                        </div>
                        <div>
                            <label className="block mb-2 w-full  text-gray-900 text-sm font-medium font-['Poppins']">Portfolio/GitHub Link</label>
                            <input type="url" name="url" id="url" pattern="https://.*" size="30" className="block w-full py-1 px-2 rounded-[10px] border border-gray-300 focus:border-red-400 outline-none text-gray-400 focus:text-gray-900 text-sm font-normal font-['Poppins']" placeholder='github.com/rishipurwar1' />
                        </div>
                    <button  className="w-[119px] cursor-pointer h-[41px] px-[26px] py-2.5 bg-red-400 rounded-[10px] ml-auto mr-0 block text-center text-white text-sm font-medium font-['Poppins']"    type='submit' >Next Step</button>

                    </form>
                    {/* pb-6 border-b-[1px] border-gray-200 */}
                </div>
            </div>
        </div>
    )
}

export default MultiForm