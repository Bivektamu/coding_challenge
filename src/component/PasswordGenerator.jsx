import React, { useEffect, useRef, useState } from 'react'

const allChars = {
    upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    special: ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'],
    nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
}

let randomPass = []

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const PasswordGenerator = () => {
    //array with object uppercase: [A,B,C,D,...] , lowe case, numbre, special characters
    //have randomPassword array and  upon check or uncheck populate it with above arary characters
    // shuffle it and depending upon password length slice it 

    const [generatedPass, setGeneratedPass] = useState('')
    const [totalChecked, setTotalChecked] = useState(1)
    const [passwordStrength, setPasswordStrength] = useState({ color: 'red', text: 'Weak' })
    const [reGenerate, setReGenerate] = useState(false)
    const ref = useRef(null)
    const [copy, setCopy] = useState('Copy')
    useEffect(() => {
        if (ref.current) {
            ref.current.checked = 'true'
        }
    }, [ref.current])

    const [settings, setSettings] = useState({
        passLength: 6,
        upper: true,
        lower: false,
        special: false,
    })
    useEffect(() => {
        randomPass = []
        const { passLength, upper, lower, special } = settings
        let checksT = 0
        Object.keys(settings).splice(1).map(key => {
            if (settings[key]) {
                checksT += 1
                randomPass = [...randomPass, ...allChars[key]]
            }
        })
        setTotalChecked(checksT)


        setGeneratedPass(shuffleArray(randomPass).slice(0, passLength).toString().replaceAll(',', ''))
    }, [settings, reGenerate])

    useEffect(() => {
        setCopy('Copy')

        let passWeight = 0;
        Object.keys(allChars).map(key => {
            if (allChars[key].some(value => generatedPass.indexOf(value) > -1)) {
                passWeight += 1
            }
        })
        switch (passWeight) {
            case 1:
                setPasswordStrength({ color: 'text-red-500', text: 'weak' })
                break;

            case 4:
                setPasswordStrength({ color: 'text-green-500', text: 'strong' })
                break;

            default:
                setPasswordStrength({ color: 'text-yellow-500', text: 'medium' })
                break;
        }

    }, [generatedPass])

    const onChangeHandler = e => {
        e.stopPropagation()
        if (e.target.type === 'checkbox' && totalChecked < 2 && !e.target.checked) {
            e.target.checked = 'true'

            return
        }
        console.log(e.target.checked)
        const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setSettings((prev) => ({ ...prev, [e.target.name]: newValue }))
    }

    const copyPassword = e => {
        navigator.clipboard.writeText(generatedPass)
                .then(() => {
                    setCopy('Copied')
                })
                .catch(err => {
                    alert('Try Again')
                });
    }
    return (
        <div className='w-[450px] m-12 mx-auto'>
            <h1 className="mb-12 text-4xl">PasswordGenerator</h1>
            <div className='w-1/2 mx-auto'>
                <div className=' flex gap-x-4'>
                    <div className="relative">
                        <input type='text' value={generatedPass} className='border border-2 border-slate-400 block  w-full' />
                        <button onClick={() => setReGenerate((prev) => !prev)} className='absolute right-0 w-[15px] bg-red-500 h-[15px] top-[7px]'></button>
                    </div>
                    <button className="" onClick={copyPassword}>{copy}</button>
                </div>
                <p className={`text-xs mb-12 text-left capitalize ${passwordStrength.color}`}>{passwordStrength.text && passwordStrength.text}</p>

                <fieldset className='mb-8'>
                    <label htmlFor="range" className='text-left w-full block mb-4'>Password Length: {settings.passLength}</label>
                    <input type="range" name="passLength" id="" min={'3'} max={'10'} onChange={onChangeHandler} value={settings.range} className='  block w-full' />
                </fieldset>
                <fieldset className=' mb-4 gap-x-4 flex w-full justify-between'>
                    <label htmlFor="upper" className="">Uppercase</label><input type="checkbox" ref={ref} name="upper" id="" className='block' onChange={onChangeHandler} />
                </fieldset>
                <fieldset className=' mb-4 gap-x-4 flex w-full justify-between'>
                    <label htmlFor="lower" className="">Lowercase</label><input type="checkbox" name="lower" id="" className='block' onChange={onChangeHandler} />
                </fieldset>
                <fieldset className=' mb-4 gap-x-4 flex w-full justify-between'>
                    <label htmlFor="nums" className="">Numbers</label><input type="checkbox" name="nums" id="" className='block' onChange={onChangeHandler} />
                </fieldset>
                <fieldset className=' mb-4 gap-x-4 flex w-full justify-between'>
                    <label htmlFor="special" className="">Special</label><input type="checkbox" name="special" id="" className='block' onChange={onChangeHandler} />
                </fieldset>
            </div>


        </div>
    )
}

export default PasswordGenerator