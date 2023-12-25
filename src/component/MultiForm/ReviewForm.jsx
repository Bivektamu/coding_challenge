const ReviewForm = ({ formData, onSubmitHandler, setStep, step }) => {

    return (
        <>
            <h2 className=" text-gray-900 text-2xl mb-2 font-medium font-['Poppins'] text-left">Review and Confirm</h2>
            <p className="mb-8  text-gray-500 text-sm text-left font-normal font-['Poppins']">Please review your information to make sure everything is accurate.</p>

            <form id="skill_level_form" action="" onSubmit={e => onSubmitHandler(e)} className='text-left grid-cols-3 grid gap-x-5 gap-y-5 mb-8'>
                <div className="px-3.5 py-4 bg-gray-200 bg-opacity-50 rounded-[10px] flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="text-gray-600 text-xs font-normal font-['Poppins']">Full Name</div>
                    <div className="text-gray-900 text-xs font-medium font-['Poppins']">{formData.fullName}</div>
                </div>

                <div className="px-3.5 py-4 bg-gray-200 bg-opacity-50 rounded-[10px] flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="text-gray-600 text-xs font-normal font-['Poppins']">Email Address</div>
                    <div className="text-gray-900 text-xs font-medium font-['Poppins']">{formData.email}</div>
                </div>

                <div className="px-3.5 py-4 bg-gray-200 bg-opacity-50 rounded-[10px] flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="text-gray-600 text-xs font-normal font-['Poppins']">Phone Number</div>
                    <div className="text-gray-900 text-xs font-medium font-['Poppins']">{formData.phone}</div>
                </div>

                <div className="px-3.5 py-4 bg-gray-200 bg-opacity-50 rounded-[10px] flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="text-gray-600 text-xs font-normal font-['Poppins']">Portfolio/GitHub Link</div>
                    <div className="text-gray-900 text-xs font-medium font-['Poppins']">{formData.link}</div>
                </div>

                <div className="px-3.5 py-4 bg-gray-200 bg-opacity-50 rounded-[10px] flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="text-gray-600 text-xs font-normal font-['Poppins']">Skill Level</div>
                    <div className="text-gray-900 text-xs font-medium font-['Poppins']">{formData.skillLevel}</div>
                </div>

                <div className="px-3.5 py-4 bg-gray-200 bg-opacity-50 rounded-[10px] flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="text-gray-600 text-xs font-normal font-['Poppins']">Challenge Preference</div>
                    <div className="text-gray-900 text-xs font-medium font-['Poppins']">{formData.challenge}</div>
                </div>

                <div className="col-span-3 flex justify-between pt-8 border-t-[1px] border-gray-200 mt-4">

                    <input className="w-[119px] cursor-pointer h-[41px] px-[26px] py-2.5 border-red-400 border-[1px] rounded-[10px] text-center text-red-400 text-sm font-medium font-['Poppins']" onClick={() => setStep(step - 1)} value='Back' type="button" />



                    <input className="w-[119px] cursor-pointer h-[41px] px-[26px] py-2.5 bg-red-400 rounded-[10px]   text-center text-white text-sm font-medium font-['Poppins']" type='submit' value='Submit' />
                </div>
            </form>
        </>
    )
}

export default ReviewForm

