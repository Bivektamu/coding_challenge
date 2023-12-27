import React, { useState, useEffect } from 'react'
import {SKILLS, SUGGESTED_SKILLS} from '../../dataLayer'
import Skill from './Skill'
const SearchBox = ({updateSuggestedList, lastDeselected, addSkill}) => {

    const [selectedSkills, setSelectedSkills] = useState([])
    const [value, setV] = useState('')
    const [autoCompleteList, setAutoCompleteList] = useState([])
    const [autoComplete, setAutoComplete] = useState(false)
    const [optionSelected, setOS] = useState(false)
    const [allS, setAllSkills] = useState(SKILLS)


    useEffect(()=>{
        if(addSkill) {
            console.log(selectedSkills)
            // const exists = selectedSkills.filter(s=>s===addSkill)
            setSelectedSkills([...selectedSkills, addSkill])
        }
    }, [addSkill])


    useEffect(()=>{
        if(autoComplete) {
            console.log(autoCompleteList)
            // const exists = selectedSkills.filter(s=>s===addSkill)
        }
    }, [selectedSkills])

    

    useEffect(() => {

        if (value) {
            const filtered = allS.filter(s => {
                const index = (s.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()))
                if (index === 0) {
                    return (s)
                }
            })
            setAutoCompleteList(filtered)
        }
        else {
            setAutoCompleteList([])
        }

    }, [value])

    const selected = (s) => {
        setSelectedSkills([...selectedSkills, s])
        setOS(true)
        setV('')
        setAutoCompleteList([])
        setAutoComplete(false)
        let temp = allS.filter(sk => sk !== s)
        setAllSkills(temp)
        const exists = SUGGESTED_SKILLS.filter(sk=>sk===s)
        if(exists.length > 0) {
            updateSuggestedList(s)
        }
    }

    const deleteSkill = (s, i) => {
        console.log(i)
        let temp = selectedSkills.filter((s, index) => index !== i)
        setSelectedSkills(temp)

         temp = allS
         temp.push(s)
        setAllSkills(temp)

        temp = selectedSkills.filter((s, index) => index === i)
        console.log(temp)
        lastDeselected(temp[0])

    }


    return (
        <div className="Skills flex-col justify-center items-center gap-[18px] inline-flex">
            {selectedSkills.length > 0 && selectedSkills.map((s, i) => <Skill key={i} skill={s} index={i} onClickHandler={() => deleteSkill(s,i)} />)}
            {selectedSkills.length < 5 && (
                <div className={`FaqFour w-[392px] h-[59px] p-4  rounded-lg border border-slate-200 justify-between items-center inline-flex relative bg-gray-50`}>
                    <input className={`AddSkill text-slate-500 outline-none w-full bg-transparent  text-lg font-normal capitalize font-['Poppins'] `} placeholder={`${selectedSkills.length + 1}. Add Skill`} value={value} onChange={e => setV(e.target.value)} onFocus={() => setAutoComplete(true)}  />

                    {autoComplete && autoCompleteList.length > 0 && (
                        <div className="FaqFour absolute left-0 top-14 w-[392px] max-h-[250px] overflow-auto z-10  bg-gray-50 rounded-lg border border-slate-200">
                            {autoCompleteList.map((s, i) => (
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