import React, { useEffect, useState } from 'react'
import Step from './Step'
import PersonalInfoForm from './PersonalInfoForm'
import SkillForm from './SkillForm'
import ChallengeForm from './ChallengeForm'
import ReviewForm from './ReviewForm'


const MultiForm = () => {
    const [step, setStep] = useState(3)
    const [errors, setErrors] = useState([])
    const [form, setForm] = useState()
    
    const getSubmision = (formData) => {
        console.log(formData)
        return false

    }
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        link: '',
        skillLevel: '',
        challenge: ''
    })

    const { fullName, email, phone, link, skillLevel, challenge } = formData
    
    const onChangeHandler = e => {
        console.log(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    useEffect(()=> {console.log(step)}, [step])

    const validationFunc = () => {

        let errArr = []
        if (!fullName) {
            const err = {
                errorFor: 'fullName',
                message: 'Please type full name'
            }
            errArr.push(err)
        }


        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (!email) {
            const err = {
                errorFor: 'email',
                message: 'Please type email address'
            }
            errArr.push(err)
        }
        else if (!emailRegex.test(email)) {
            const err = {
                errorFor: 'email',
                message: 'Please type valid email address'
            }
            errArr.push(err)
        }

        const phoneRegex = /^[0-9]{10}$/

        if (!phone) {
            const err = {
                errorFor: 'phone',
                message: 'Please type phone number'
            }
            errArr.push(err)
        }
        else if (!phoneRegex.test(phone)) {
            const err = {
                errorFor: 'phone',
                message: 'Please type valid phone number'
            }
            errArr.push(err)
        }

        const linkRegex = /(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
        if (!link) {
            const err = {
                errorFor: 'link',
                message: 'Please type github/portfolio link'

            }
            errArr.push(err)
        }
        else if (!linkRegex.test(link)) {
            const err = {
                errorFor: 'link',
                message: 'Please type valid github/portfolio link'

            }
            errArr.push(err)
        }

        if (step ===2 && !skillLevel) {
            const err = {
                errorFor: 'skillLevel',
                message: 'Please select skill level'

            }
            errArr.push(err)
        }

        if (step === 3 && !challenge) {
            const err = {
                errorFor: 'challenge',
                message: 'Please check challenge preferences'

            }
            errArr.push(err)
        }

        return errArr
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log('asdf')

        const arr = validationFunc()
        console.log(arr)

        if (arr.length > 0) {
            setErrors(arr)
        }else {
            setErrors([])
            setStep(step+1)
        }
    }

    useEffect(()=> {
        if(step < 2)
            setForm( <PersonalInfoForm formData={formData} errors={errors} onChangeHandler={e=>onChangeHandler(e)} onSubmitHandler={(e)=>onSubmitHandler(e)} />)
        else if(step < 3)
            setForm( <SkillForm formData={formData} errors={errors} step={step} setStep={(step)=>setStep(step)} onChangeHandler={e=>onChangeHandler(e)} onSubmitHandler={(e)=>onSubmitHandler(e)} />)
        else if(step < 4)
            setForm( <ChallengeForm formData={formData} errors={errors} step={step} setStep={(step)=>setStep(step)} onChangeHandler={e=>onChangeHandler(e)} onSubmitHandler={(e)=>onSubmitHandler(e)} />)
        else
        setForm( <ReviewForm formData={formData} step={step} setStep={(step)=>setStep(step)} onChangeHandler={e=>onChangeHandler(e)} onSubmitHandler={(e)=>onSubmitHandler(e)} />)


    }, [errors, formData, step])

    return (
        <div className='bg-lime-50 w-full min-h-screen flex items-center justify-center'>
            <div>
                <h1 className="mb-2 text-gray-900 text-[32px] font-black font-['Merriweather']">Join our Community of Developers</h1>
                <p className="mb-8 text-center text-gray-900 text-lg font-normal font-['Poppins']">To join our community and participate in frontend challenges.<br />Please fill out the following form.</p>
                <div className='bg-white rounded-2xl shadow p-6'>
                    <Step step={step} />

                    {form && form}
                        {/* {step === 1 && <PersonalInfoForm formData={formData} errors={errors} onChangeHandler={e=>onChangeHandler(e)} onSubmitHandler={(e)=>onSubmitHandler(e)} />}
                        {step === 2 && <PersonalInfoForm formData={formData} errors={errors} onChangeHandler={e=>onChangeHandler(e)} onSubmitHandler={(e)=>onSubmitHandler(e)} />} */}


                    {/* pb-6 border-b-[1px] border-gray-200 */}
                </div>
            </div>
        </div>
    )
}

export default MultiForm