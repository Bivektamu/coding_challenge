const ReviewForm = ({ formData,  onSubmitHandler, setStep, step }) => {
    const { skillLevel } = formData

    return (
        <>
            <h2 className=" text-gray-900 text-2xl mb-2 font-medium font-['Poppins'] text-left">Review and Confirm</h2>
            <p className="mb-8  text-gray-500 text-sm text-left font-normal font-['Poppins']">Please review your information to make sure everything is accurate.</p>

            <form id="skill_level_form" action="" onSubmit={e => onSubmitHandler(e)} className='text-left grid-cols-2 grid gap-x-10 gap-y-5 pb-8 border-b-[1px] border-gray-200 mb-8'>


                <div className="col-span-2 flex justify-between">
                    <button className="w-[119px] cursor-pointer h-[41px] px-[26px] py-2.5 bg-red-400 rounded-[10px]   text-center text-white text-sm font-medium font-['Poppins']" onClick={()=>setStep(step-1)} type='submit' >Back</button>
                    <button className="w-[119px] cursor-pointer h-[41px] px-[26px] py-2.5 bg-red-400 rounded-[10px]   text-center text-white text-sm font-medium font-['Poppins']" type='submit' >Next Step</button>
                </div>
            </form>
        </>
    )
}

export default ReviewForm

