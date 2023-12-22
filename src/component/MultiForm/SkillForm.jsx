
const SkillForm = ({ formData, errors, onChangeHandler, onSubmitHandler }) => {

    const { fullName, email } = formData


    return (
        <>
            <h2 className=" text-gray-900 text-2xl mb-2 font-medium font-['Poppins'] text-left">Skill Level</h2>
            <p className="mb-8  text-gray-500 text-sm text-left font-normal font-['Poppins']">Please tell us about your skill level in frontend development.</p>

            <form id="personal_info_form" action="" onSubmit={e => onSubmitHandler(e)} className='text-left grid-cols-2 grid gap-x-10 gap-y-5 pb-8 border-b-[1px] border-gray-200 mb-8'>

                <div id="NewRootRoot" className="flex flex-row w-full items-start">
                    <div className="border-solid border-[#d1d5db] flex flex-row gap-4 w-full h-16 font-['Poppins'] items-start pt-4 px-4 border rounded-lg relative">
                    <input type="radio" id="beginner" name="skillLevel" value="beginner" className="absolute top-0 left-0 w-full h-full opacity-0 z-10" onClick={(e)=>onChangeHandler(e)} />
                        <div
                            id="Ellipse"
                            className="bg-[url(https://file.rendit.io/n/hFgACAEZat0SK46NtWg2.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-8 h-8 items-start pt-2 px-2"
                        >
                            <img
                                src="https://file.rendit.io/n/bMDSxAklDl5fD8RewwxT.svg"
                                alt="Frame1"
                                className="w-5"
                            />
                        </div>
                        <label for="beginner" className="text-center text-sm font-medium text-[#111827] mt-2">
                            Beginner
                        </label>
                    </div>
                </div>



<div className="col-span-2 flex justify-between">
                <button className="w-[119px] cursor-pointer h-[41px] px-[26px] py-2.5 bg-red-400 rounded-[10px]   text-center text-white text-sm font-medium font-['Poppins']" type='submit' >Next Step</button>
                <button className="w-[119px] cursor-pointer h-[41px] px-[26px] py-2.5 bg-red-400 rounded-[10px]   text-center text-white text-sm font-medium font-['Poppins']" type='submit' >Next Step</button>
                </div>
            </form>
        </>
    )
}

export default SkillForm

