import React, { useEffect, useState } from 'react'
import { SUGGESTED_SKILLS } from '../../dataLayer'


const SuggestedSkills = ({ selectedSkills, lastSelected, lastDeselected, updateSelectedSkills }) => {
    const INITIAL_SKILLS = SUGGESTED_SKILLS
    const [suggestedSkills, setSuggestedSkills] = useState([])
    const [clicked, setClicked] = useState([])
    const [updateSuggestedList, setUpdateSuggestedList] = useState()
    useEffect(() => {
        // const a = [{skill: 'asdf', isACtive: true}, {skill: 'zxcv', isACtive: false} ]
        setSuggestedSkills(INITIAL_SKILLS.map(s => ({ skill: s, isActive: false })))
        const temp = INITIAL_SKILLS.map(s => false)
        setClicked(temp)
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        lastSelected && setUpdateSuggestedList(lastSelected)
    }, [lastSelected])

    useEffect(() => {
        if (updateSuggestedList) {
            const index = INITIAL_SKILLS.indexOf(updateSuggestedList)
            if (index > -1) {
                setClicked([...clicked.slice(0, index), true, ...clicked.slice(index + 1)])
            }

        }
// eslint-disable-next-line
    }, [updateSuggestedList])
// 
    useEffect(() => {
        if (selectedSkills.length > 0) {
            const temp = suggestedSkills.map(({ skill }) => {
                if (selectedSkills.indexOf(skill) > -1) {
                    return { skill: skill, isActive: true }
                }
                else {
                    return { skill: skill, isActive: false }
                }
            })



            setSuggestedSkills(temp)
        }
        else {
            
            let temp = (INITIAL_SKILLS.map(s => ({ skill: s, isActive: false })))
            setSuggestedSkills(temp)
        }
        // eslint-disable-next-line
    }, [selectedSkills])


    const onClickHandler = s => {
        if(selectedSkills.length < 5 || s.isActive)
        updateSelectedSkills(s.skill, s.isActive)
    }

    return (
        <div className="SuggestedSkills w-[133px] h-[234px] relative">
            <div className="SuggestedSkills mb-4   text-blue-950 text-base font-semibold font-['Poppins']">Suggested Skills</div>
            <div className="Frame1  flex-col justify-start items-start gap-1.5">
                {suggestedSkills.length > 0 && suggestedSkills.map((s, i) => <button key={i} onClick={() => onClickHandler(s)}  className={`text-left w-full text-slate-500 text-base font-normal font-['Poppins'] mb-1 rounded-lg  px-2 py-1 cursor-pointer ${s.isActive && 'bg-blue-950 text-white'}`}>{s.isActive ? '-' : '+'} {s.skill}</button>)
                }
            </div>


        </div>
    )
}

export default SuggestedSkills