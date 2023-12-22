
const PersonalInfoForm = ({ formData, errors, onChangeHandler, onSubmitHandler }) => {

    const { fullName, email, phone, link } = formData


    return (
        <>
            <h2 className=" text-gray-900 text-2xl mb-2 font-medium font-['Poppins'] text-left">Personal Information</h2>
            <p className="mb-8  text-gray-500 text-sm text-left font-normal font-['Poppins']">Please provide your personal details so we can get to know you better.</p>

            <form id="personal_info_form" action="" onSubmit={e => onSubmitHandler(e)} className='text-left grid-cols-2 grid gap-x-10 gap-y-5 pb-8 border-b-[1px] border-gray-200 mb-8'>

                <div>
                    <label className="block mb-2 w-full text-gray-900 text-sm font-medium font-['Poppins']">Full Name</label>
                    <input placeholder='Full Name' name='fullName' type='text' className={`py-1 block w-full px-2 rounded-[10px] border border-gray-300 focus:border-red-400 outline-none ${fullName ? 'text-gray-900' : 'text-gray-400'} text-sm font-normal font-['Poppins']`} value={fullName} onChange={e => onChangeHandler(e)} />
                    {errors.length > 0 && errors.filter(e => e.errorFor === 'fullName').map((e => <p key={e.errorFor} className={`block w-full text-red-500 text-sm px-2 pt-1 font-['Poppins']`}>{e.message}</p>))}

                </div>
                <div>
                    <label className="block mb-2 w-full  text-gray-900 text-sm font-medium font-['Poppins']">Email Address</label>
                    <input type='text' className={`py-1 block w-full px-2 rounded-[10px] border border-gray-300 focus:border-red-400 outline-none ${email ? 'text-gray-900' : 'text-gray-400'} text-sm font-normal font-['Poppins']`} placeholder='name@email.com' name='email' value={email} onChange={e => onChangeHandler(e)} />
                    {errors.length > 0 && errors.filter(e => e.errorFor === 'email').map((e => <p key={e.errorFor} className={`block w-full text-red-500 text-sm px-2 pt-1 font-['Poppins']`}>{e.message}</p>))}
                </div>

                <div>
                    <label className="block mb-2 w-full  text-gray-900 text-sm font-medium font-['Poppins']">Phone Number</label>
                    <input type='text' className={`py-1 block w-full px-2 rounded-[10px] border border-gray-300 focus:border-red-400 outline-none ${phone ? 'text-gray-900' : 'text-gray-400'} text-sm font-normal font-['Poppins']`} placeholder='0452 424 566' name='phone' value={phone} onChange={e => onChangeHandler(e)} />
                    {errors.length > 0 && errors.filter(e => e.errorFor === 'phone').map((e => <p key={e.errorFor} className={`block w-full text-red-500 text-sm px-2 pt-1 font-['Poppins']`}>{e.message}</p>))}

                </div>
                <div>
                    <label className="block mb-2 w-full  text-gray-900 text-sm font-medium font-['Poppins']">Portfolio/GitHub Link</label>

                    <input type='text' className={`py-1 block w-full px-2 rounded-[10px] border border-gray-300 focus:border-red-400 outline-none ${link ? 'text-gray-900' : 'text-gray-400'} text-sm font-normal font-['Poppins']`} placeholder='github.com/janeDoe' name='link' value={link} onChange={e => onChangeHandler(e)} />
                    {errors.length > 0 && errors.filter(e => e.errorFor === 'link').map((e => <p key={e.errorFor} className={`block w-full text-red-500 text-sm px-2 pt-1 font-['Poppins']`}>{e.message}</p>))}

                </div>
                <button className="w-[119px] cursor-pointer h-[41px] px-[26px] py-2.5 bg-red-400 rounded-[10px] ml-auto mr-0 block text-center text-white text-sm font-medium font-['Poppins']" type='submit' >Next Step</button>

            </form>
        </>
    )
}

export default PersonalInfoForm

