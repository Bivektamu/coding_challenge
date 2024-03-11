import React, { useEffect, useState, useTransition } from 'react'

const allChars = {
    upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    special: ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'],
    nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
}

let randomPass = Object.keys(allChars).map(key => [...allChars[key]]).flat()

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
    const [settings, setSettings] = useState({
        range: 6,
        upper: true,
        lower: false,
        special: false,
    })
    useEffect(() => {
        const {range} = settings
        setGeneratedPass(shuffleArray(randomPass).slice(0, range).toString().replaceAll(',', ''))
    }, [settings])

    const rangeChange = e => {
        setSettings((prev)=> ({...prev, range: e.target.value}))
    }

    return (
        <div className='w-[400px] m-12 mx-auto'>
            <h1 className="mb-12 text-4xl">PasswordGenerator</h1>
            <div className='w-1/2 mx-auto'>
                <input type='text' value={generatedPass} className='border border-2 border-slate-400 block mb-4 w-full' />
                <input type="range" name="passLength" id="" min={'3'} max={'10'} onChange={rangeChange} value={settings.range} className=' mb-4 block w-full' />
                <fieldset className=' mb-4 gap-x-4 flex w-full justify-between'>
                    <label htmlFor="upper" className="">Uppercase</label><input type="checkbox" name="upper" id="" className='' />
                </fieldset>
            </div>

        </div>
    )
}

export default PasswordGenerator