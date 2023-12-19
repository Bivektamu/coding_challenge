import React, { useState, useEffect } from 'react'
import SKILLS from '../../dataLayer'
import Skill from './Skill'
const SearchBox = ({skills}) => {

    const [selectedSkills, setSs] = useState([])
    const [value, setV] = useState('')
    const [suggList, setSL] = useState([])
    const [suggest, setS] = useState(false)
    const [optionSelected, setOS] = useState(false)
    const [allS, setAS] = useState(SKILLS)


    useEffect(() => {

        if (value) {
            console.clear()
            // const filtered = allS.filter(s=> s.indexOf(value) === 0)
            const filtered = allS.filter(s => {
                const index = (s.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()))
                if (index === 0) {
                    return (s)
                }
            })
            setSL(filtered)
        }
        else {
            setSL([])
        }

    }, [value])

    const selected = (s) => {
        setSs([...selectedSkills, s])
        setOS(true)
        setV('')
        setSL([])
        setS(false)
        let temp = allS.filter(sk => sk !== s)
        setAS(temp)
    }

    const deleteSkill = (s, i) => {
        console.log(i)
        let temp = selectedSkills.filter((s, index) => index !== i)
        console.log(temp)
        setSs(temp)

         temp = allS
         temp.push(s)
        setAS(temp)

    }

    useEffect(()=>{
        skills(selectedSkills)
    }, [selectedSkills])

    return (
        <div className="Skills flex-col justify-center items-center gap-[18px] inline-flex">
            {selectedSkills.length > 0 && selectedSkills.map((s, i) => <Skill key={i} skill={s} index={i} onClickHandler={() => deleteSkill(s,i)} />)}
            {selectedSkills.length < 5 && (
                <div className={`FaqFour w-[392px] h-[59px] p-4  rounded-lg border border-slate-200 justify-between items-center inline-flex relative bg-gray-50`}>
                    <input className={`AddSkill text-slate-500 outline-none bg-transparent  text-lg font-normal capitalize font-['Poppins'] `} placeholder={`${selectedSkills.length + 1}. Add Skill`} value={value} onChange={e => setV(e.target.value)} onFocus={() => setS(true)}  />

                    {suggest && suggList.length > 0 && (
                        <div className="FaqFour absolute left-0 top-14 w-[392px] max-h-[250px] overflow-auto z-10  bg-gray-50 rounded-lg border border-slate-200">
                            {suggList.map((s, i) => (
                                <div key={i} className="Rectangle1 hover:bg-slate-200 cursor-pointer border-l border-r border-slate-200">
                                    <p className="Reactjs text-slate-500 text-base font-normal font-['Poppins'] text-left p-2" onClick={() => selected(s)}>{s}</p>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            )}
        </div>
    )
}

export default SearchBox