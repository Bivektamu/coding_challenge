import { useEffect, useState } from "react"

const SkillForm = ({ formData, onChangeHandler, errors, onSubmitHandler, setStep, step }) => {
    const { challenge } = formData
    console.log(step)

    useEffect(() => { console.log(step) }, [step])

    const [checkBoxes, setCheckBoxes] = useState(['HTML/CSS/JS', 'reactJS', 'AngularJs', 'Vue.js'])

    return (
        <>
            <h2 className=" text-gray-900 text-2xl mb-2 font-medium font-['Poppins'] text-left">Challenge Preference</h2>
            <p className="mb-8  text-gray-500 text-sm text-left font-normal font-['Poppins']">Please review your information to make sure everything is accurate.</p>



            <form id="challenge_form" action="" onSubmit={e => onSubmitHandler(e)} className='text-left mb-8'>

                <fieldset className="grid-cols-2 grid gap-x-10 gap-y-5">

                    {checkBoxes.length > 0 && checkBoxes.map((c, i) => (
                        <div key={i} className="flex w-full flex-row items-start">
                            <div className={`border-solid ${challenge.indexOf(c) > -1 ? 'border-red-400' : 'border-[#d1d5db]'} flex items-center gap-4 w-full h-16 font-['Poppins'] items-start  px-4 border rounded-lg relative  `}>
                                <input type="checkbox" id={c} name="challenge" value={c} className="absolute top-0 left-0 w-full h-full opacity-0 z-10" onClick={(e) => onChangeHandler(e)} />
                                <div className={`w-5 h-5 rounded-md border  flex items-center justify-center ${challenge.indexOf(c) > -1 ? 'bg-red-400 border-red-400' : 'border-gray-900'} `}>
                                    <div className="w-[10px] h-[5px] border-l-2 border-b-2 border-white -rotate-45 mb-1 " />
                                </div>

                                <label for="htmlCssJs" className="text-center text-sm font-medium text-[#111827] ">
                                    {c}
                                </label>
                            </div>
                        </div>
                    ))}
                </fieldset>


                {errors.length > 0 && errors.filter(e => e.errorFor === 'challenge').map((e => <p key={e.errorFor} className={`block w-full text-red-500 text-sm px-2 pt-1 font-['Poppins']`}>{e.message}</p>))}



                <div className="col-span-2 flex justify-between pt-8 border-t-[1px] border-gray-200 mt-8">
                    <input className="w-[119px] cursor-pointer h-[41px] px-[26px] py-2.5 border-red-400 border-[1px] rounded-[10px] text-center text-red-400 text-sm font-medium font-['Poppins']" onClick={() => setStep(step - 1)} value='Back' type="button" />

                    <input className="w-[119px] cursor-pointer h-[41px] px-[26px] py-2.5 bg-red-400 rounded-[10px]   text-center text-white text-sm font-medium font-['Poppins']" type='submit' value='Next Step' />
                </div>
            </form>
        </>
    )
}

export default SkillForm

