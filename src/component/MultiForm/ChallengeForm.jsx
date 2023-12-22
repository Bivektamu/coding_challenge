const SkillForm = ({ formData, onChangeHandler, errors, onSubmitHandler, setStep, step }) => {
    const { challenge } = formData

    return (
        <>
            <h2 className=" text-gray-900 text-2xl mb-2 font-medium font-['Poppins'] text-left">Challenge Preference</h2>
            <p className="mb-8  text-gray-500 text-sm text-left font-normal font-['Poppins']">Please review your information to make sure everything is accurate.</p>

            <form id="challenge_form" action="" onSubmit={e => onSubmitHandler(e)} className='text-left grid-cols-2 grid gap-x-10 gap-y-5 pb-8 border-b-[1px] border-gray-200 mb-8'>

                <div className="flex w-full flex-row items-start">

                    <div className={`border-solid ${challenge==='htmlCssJs'? 'border-red-400':'border-[#d1d5db]'} flex items-center gap-4 w-full h-16 font-['Poppins'] items-start  px-4 border rounded-lg relative  `}>
                        <input type="checkbox" id="htmlCssJs" name="challenge" value="htmlCssJs" className="absolute top-0 left-0 w-full h-full opacity-0 z-10" onClick={(e) => onChangeHandler(e)} />
                        <div className={`w-5 h-5 rounded-md border  flex items-center justify-center ${challenge==='htmlCssJs'? 'bg-red-400 border-red-400':'border-gray-900'} `}>
                            <div className="w-[10px] h-[5px] border-l-2 border-b-2 border-white -rotate-45 mb-1 " />
                        </div>

                        <label for="htmlCssJs" className="text-center text-sm font-medium text-[#111827] ">
                            HTML/CSS/JS
                        </label>
                    </div>
                </div>

                <div className="flex w-full flex-row items-start">
                    <div className={`border-solid ${challenge==='reactJs'? 'border-red-400':'border-[#d1d5db]'} flex items-center gap-4 w-full h-16 font-['Poppins'] items-start  px-4 border rounded-lg relative  `}>
                        <input type="checkbox" id="reactJs" name="challenge" value="reactJs" className="absolute top-0 left-0 w-full h-full opacity-0 z-10" onClick={(e) => onChangeHandler(e)} />
                        <div className={`w-5 h-5 rounded-md border  flex items-center justify-center ${challenge==='reactJs'? 'bg-red-400 border-red-400':'border-gray-900'} `}>
                            <div className="w-[10px] h-[5px] border-l-2 border-b-2 border-white -rotate-45 mb-1 " />
                        </div>

                        <label for="reactJs" className="text-center text-sm font-medium text-[#111827] ">
                            ReactJs
                        </label>
                    </div>
                </div>


                {errors.length > 0 && errors.filter(e => e.errorFor === 'challenge').map((e => <p key={e.errorFor} className={`block w-full text-red-500 text-sm px-2 pt-1 font-['Poppins']`}>{e.message}</p>))}



                <div className="col-span-2 flex justify-between">
                    <button className="w-[119px] cursor-pointer h-[41px] px-[26px] py-2.5 bg-red-400 rounded-[10px]   text-center text-white text-sm font-medium font-['Poppins']" onClick={() => setStep(step - 1)} type='submit' >Back</button>
                    <button className="w-[119px] cursor-pointer h-[41px] px-[26px] py-2.5 bg-red-400 rounded-[10px]   text-center text-white text-sm font-medium font-['Poppins']" type='submit' >Next Step</button>
                </div>
            </form>
        </>
    )
}

export default SkillForm

