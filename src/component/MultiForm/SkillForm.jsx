const SkillForm = ({ formData, onChangeHandler, errors, onSubmitHandler, setStep, step }) => {
    const { skillLevel } = formData

    return (
        <>
            <h2 className=" text-gray-900 text-2xl mb-2 font-medium font-['Poppins'] text-left">Skill Level</h2>
            <p className="mb-8  text-gray-500 text-sm text-left font-normal font-['Poppins']">Please tell us about your skill level in frontend development.</p>

            <form id="skill_level_form" action="" onSubmit={e => onSubmitHandler(e)} className='text-left grid-cols-2 grid gap-x-10 gap-y-5  mb-8'>
                <div className="flex flex-row w-full items-start">
                    <div className={`border-solid border-[#d1d5db] flex flex-row gap-4 w-full h-16 font-['Poppins'] items-start pt-4 px-4 border rounded-lg relative ${skillLevel === 'beginner' && 'border-red-400'} `}>

                        <input type="radio" id="beginner" name="skillLevel" value="beginner" className="absolute top-0 left-0 w-full h-full opacity-0 z-10" onClick={(e) => onChangeHandler(e)} />
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

                <div className="flex flex-row w-full items-start">
                    <div className={`border-solid border-[#d1d5db] flex flex-row gap-4 w-full h-16 font-['Poppins'] items-start pt-4 px-4 border rounded-lg relative ${skillLevel === 'intermediate' && 'border-red-400'} `}>

                        <input type="radio" id="intermediate" name="skillLevel" value="intermediate" className="absolute top-0 left-0 w-full h-full opacity-0 z-10" onClick={(e) => onChangeHandler(e)} />
                        <div
                            id="Ellipse"
                            className="bg-[url(https://file.rendit.io/n/hFgACAEZat0SK46NtWg2.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex  w-8 h-8 items-center justify-center"
                        >
                            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                <g clip-path="url(#clip0_12_123)">
                                    <path d="M6.66663 13.3333L8.33329 8.33333L13.3333 6.66667L11.6666 11.6667L6.66663 13.3333Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.5 10C2.5 10.9849 2.69399 11.9602 3.0709 12.8701C3.44781 13.7801 4.00026 14.6069 4.6967 15.3033C5.39314 15.9997 6.21993 16.5522 7.12987 16.9291C8.03982 17.306 9.01509 17.5 10 17.5C10.9849 17.5 11.9602 17.306 12.8701 16.9291C13.7801 16.5522 14.6069 15.9997 15.3033 15.3033C15.9997 14.6069 16.5522 13.7801 16.9291 12.8701C17.306 11.9602 17.5 10.9849 17.5 10C17.5 9.01509 17.306 8.03982 16.9291 7.12987C16.5522 6.21993 15.9997 5.39314 15.3033 4.6967C14.6069 4.00026 13.7801 3.44781 12.8701 3.0709C11.9602 2.69399 10.9849 2.5 10 2.5C9.01509 2.5 8.03982 2.69399 7.12987 3.0709C6.21993 3.44781 5.39314 4.00026 4.6967 4.6967C4.00026 5.39314 3.44781 6.21993 3.0709 7.12987C2.69399 8.03982 2.5 9.01509 2.5 10Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_12_123">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <label for="intermediate" className="text-center text-sm font-medium text-[#111827] mt-2">
                            Intermediate
                        </label>
                    </div>
                </div>

                <div className="flex flex-row w-full items-start">
                    <div className={`border-solid border-[#d1d5db] flex flex-row gap-4 w-full h-16 font-['Poppins'] items-start pt-4 px-4 border rounded-lg relative ${skillLevel === 'advanced' && 'border-red-400'} `}>

                        <input type="radio" id="advanced" name="skillLevel" value="advanced" className="absolute top-0 left-0 w-full h-full opacity-0 z-10" onClick={(e) => onChangeHandler(e)} />
                        <div
                            id="Ellipse"
                            className="bg-[url(https://file.rendit.io/n/hFgACAEZat0SK46NtWg2.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex  w-8 h-8 items-center justify-center"
                        >
                            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clip-path="url(#clip0_12_98)">
                                    <path d="M3.33337 10.8333C4.81928 11.0099 6.20258 11.6813 7.26067 12.7394C8.31876 13.7975 8.99012 15.1808 9.16671 16.6667C9.90331 16.242 10.5194 15.6365 10.9569 14.9074C11.3943 14.1784 11.6386 13.3498 11.6667 12.5C13.066 12.0078 14.2878 11.1117 15.1778 9.925C16.0678 8.73835 16.586 7.31444 16.6667 5.83333C16.6667 5.17029 16.4033 4.5344 15.9345 4.06556C15.4656 3.59672 14.8297 3.33333 14.1667 3.33333C12.6856 3.41408 11.2617 3.93222 10.075 4.8222C8.88838 5.71219 7.99228 6.93407 7.50004 8.33333C6.65026 8.36139 5.82167 8.60569 5.09259 9.04314C4.36352 9.48059 3.75803 10.0967 3.33337 10.8333Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.83329 11.6667C4.96598 12.1563 4.26467 12.8938 3.81925 13.7847C3.37383 14.6755 3.20462 15.679 3.33329 16.6667C4.32092 16.7953 5.32447 16.6261 6.21531 16.1807C7.10614 15.7353 7.84364 15.034 8.33329 14.1667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.6666 7.50001C11.6666 7.72102 11.7544 7.93298 11.9107 8.08926C12.067 8.24554 12.2789 8.33334 12.5 8.33334C12.721 8.33334 12.9329 8.24554 13.0892 8.08926C13.2455 7.93298 13.3333 7.72102 13.3333 7.50001C13.3333 7.27899 13.2455 7.06703 13.0892 6.91075C12.9329 6.75447 12.721 6.66667 12.5 6.66667C12.2789 6.66667 12.067 6.75447 11.9107 6.91075C11.7544 7.06703 11.6666 7.27899 11.6666 7.50001Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_12_98">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <label for="advanced" className="text-center text-sm font-medium text-[#111827] mt-2">
                            Advanced
                        </label>
                    </div>
                </div>

                <div className="flex flex-row w-full items-start">
                    <div className={`border-solid border-[#d1d5db] flex flex-row gap-4 w-full h-16 font-['Poppins'] items-start pt-4 px-4 border rounded-lg relative ${skillLevel === 'expert' && 'border-red-400'} `}>
                        <input type="radio" id="expert" name="skillLevel" value="expert" className="absolute top-0 left-0 w-full h-full opacity-0 z-10" onClick={(e) => onChangeHandler(e)} />
                        <div
                            id="Ellipse"
                            className="bg-[url(https://file.rendit.io/n/hFgACAEZat0SK46NtWg2.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex  w-8 h-8 items-center justify-center"
                        >
                            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clip-path="url(#clip0_12_103)">
                                    <path d="M6.66663 17.5H13.3333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10 14.1667V17.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.83337 3.33333H14.1667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14.1667 3.33333V9.99999C14.1667 11.1051 13.7277 12.1649 12.9463 12.9463C12.1649 13.7277 11.1051 14.1667 10 14.1667C8.89497 14.1667 7.83516 13.7277 7.05376 12.9463C6.27236 12.1649 5.83337 11.1051 5.83337 9.99999V3.33333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.5 7.49999C2.5 7.94202 2.67559 8.36595 2.98816 8.67851C3.30072 8.99107 3.72464 9.16666 4.16667 9.16666C4.60869 9.16666 5.03262 8.99107 5.34518 8.67851C5.65774 8.36595 5.83333 7.94202 5.83333 7.49999C5.83333 7.05797 5.65774 6.63404 5.34518 6.32148C5.03262 6.00892 4.60869 5.83333 4.16667 5.83333C3.72464 5.83333 3.30072 6.00892 2.98816 6.32148C2.67559 6.63404 2.5 7.05797 2.5 7.49999Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14.1666 7.49999C14.1666 7.94202 14.3422 8.36595 14.6548 8.67851C14.9673 8.99107 15.3913 9.16666 15.8333 9.16666C16.2753 9.16666 16.6992 8.99107 17.0118 8.67851C17.3244 8.36595 17.5 7.94202 17.5 7.49999C17.5 7.05797 17.3244 6.63404 17.0118 6.32148C16.6992 6.00892 16.2753 5.83333 15.8333 5.83333C15.3913 5.83333 14.9673 6.00892 14.6548 6.32148C14.3422 6.63404 14.1666 7.05797 14.1666 7.49999Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_12_103">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <label for="expert" className="text-center text-sm font-medium text-[#111827] mt-2">
                            Expert
                        </label>
                    </div>
                </div>

                {errors.length > 0 && errors.filter(e => e.errorFor === 'skillLevel').map((e => <p key={e.errorFor} className={`block w-full text-red-500 text-sm px-2 pt-1 font-['Poppins']`}>{e.message}</p>))}



                <div className="col-span-2 flex justify-between pt-8 border-t-[1px] border-gray-200 mt-4">
                    <input className="w-[119px] cursor-pointer h-[41px] px-[26px] py-2.5 border-red-400 border-[1px] rounded-[10px] text-center text-red-400 text-sm font-medium font-['Poppins']" onClick={() => setStep(step - 1)} value='Back' type="button" />



                    <input className="w-[119px] cursor-pointer h-[41px] px-[26px] py-2.5 bg-red-400 rounded-[10px]   text-center text-white text-sm font-medium font-['Poppins']" type='submit' value='Next Step' />
                </div>
            </form>
        </>
    )
}

export default SkillForm

