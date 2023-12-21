import React, { useState } from 'react'

const MultiForm = () => {
    const [step, setStep] = useState(1)
    return (
        <div className='bg-lime-50 w-full min-h-screen flex items-center justify-center'>
            <div>
                <h1 className="mb-2 text-gray-900 text-[32px] font-black font-['Merriweather']">Join our Community of Developers</h1>
                <p className="mb-8 text-center text-gray-900 text-lg font-normal font-['Poppins']">To join our community and participate in frontend challenges.<br />Please fill out the following form.</p>
                <div className='bg-white rounded-2xl shadow p-6'>
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

                    <h2 className=" text-gray-900 text-2xl mb-2 font-medium font-['Poppins'] text-left">Personal Information</h2>
                    <p className="mb-8  text-gray-500 text-sm text-left font-normal font-['Poppins']">Please provide your personal details so we can get to know you better.</p>

                    <form action="" className='text-left grid-cols-2 grid gap-x-10 gap-y-5 pb-8 border-b-[1px] border-gray-200 mb-8'>

                        <div>
                            <label className="Label block mb-2 w-full text-gray-900 text-sm font-medium font-['Poppins']">Full Name</label>
                            <input type='text' className="py-1 block w-full px-2 rounded-[10px] border border-gray-300 focus:border-red-400 outline-none text-gray-400 focus:text-gray-900 focus:text-gray-900 text-sm font-normal font-['Poppins']" value='Rishi Purwar' />
                        </div>
                        <div>
                            <label className="block mb-2 w-full  text-gray-900 text-sm font-medium font-['Poppins']">Email Address</label>
                            <input type='email' className="block w-full py-1 px-2 rounded-[10px] border border-gray-300 focus:border-red-400 outline-none text-gray-400 focus:text-gray-900 text-sm font-normal font-['Poppins']" placeholder='name@email.com' />
                        </div>

                        <div>
                            <label className="block mb-2 w-full  text-gray-900 text-sm font-medium font-['Poppins']">Phone Number</label>
                            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="block w-full py-1 px-2 rounded-[10px] border border-gray-300 focus:border-red-400 outline-none text-gray-400 focus:text-gray-900 text-sm font-normal font-['Poppins']" placeholder='045 242 566' />
                        </div>
                        <div>
                            <label className="block mb-2 w-full  text-gray-900 text-sm font-medium font-['Poppins']">Portfolio/GitHub Link</label>
                            <input type="url" name="url" id="url" pattern="https://.*" size="30" className="block w-full py-1 px-2 rounded-[10px] border border-gray-300 focus:border-red-400 outline-none text-gray-400 focus:text-gray-900 text-sm font-normal font-['Poppins']" placeholder='github.com/rishipurwar1' />
                        </div>
                    </form>
                    {/* pb-6 border-b-[1px] border-gray-200 */}
                    <button className="w-[119px] h-[41px] px-[26px] py-2.5 bg-red-400 rounded-[10px] ml-auto mr-0 block text-center text-white text-sm font-medium font-['Poppins']">Next Step</button>
                </div>
            </div>
        </div>
    )
}

export default MultiForm