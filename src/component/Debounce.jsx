import { useEffect, useRef, useState } from 'react';

const Debounce = () => {

    const [names, setNames] = useState([])
    const [typedName, setTypedName] = useState('')
    const [renderNames, setRenderNames] = useState([])
    const timeOut = useRef(null)


    const getUser = async (n) => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            if (res.ok) {
                const data = (await res.json())
                const filtered_names = data.filter(user => user.name.toLowerCase().indexOf(n.toLowerCase()) > -1).map(user => user.name)
                setNames(filtered_names)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const debounceData = (typed, callback, timer) => {
        if(timeOut.current) {
            clearTimeout(timeOut.current)
            timeOut.current = null
        }
        timeOut.current = setTimeout(()=>callback(typed), timer)
    }

    const onChange = e => {
        setTypedName(e.target.value)
        debounceData(e.target.value, getUser, 300)
    }


    return (
        <div className='p-12'>
            <h1 className="mb-8 font-bold">Debounce Technique</h1>
            <input type="text" name="" id="" value={typedName} onChange={e => onChange(e)} placeholder='Search Name' className='border-[1px] border-slate-400 p-2 ' />

            {names.length > 0 && names.map((name, i) =>
                <h3 className="mb-2" key={i}>{name}</h3>
            )}
        </div>
    )
}

export default Debounce