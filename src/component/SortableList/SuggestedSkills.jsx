import React, { useEffect, useState } from 'react'
import { SKILLS, SUGGESTED_SKILLS } from '../../dataLayer'


const SuggestedSkills = ({ lastSelected, lastDeselected, clickHandler }) => {
    const INITIAL_SKILLS = SUGGESTED_SKILLS
    const [suggestedSkills, setSS] = useState([])
    const [clicked, setClicked] = useState([])
    const [updateSuggestedList, setUpdateSuggestedList] = useState()
    useEffect(() => {
        setSS(INITIAL_SKILLS)
        const temp = INITIAL_SKILLS.map(s => false)
        setClicked(temp)
    }, [])

    useEffect(() => {
        lastSelected && setUpdateSuggestedList(lastSelected)
    }, [lastSelected])

    const onClick = (s, i) => {
        clickHandler(s)
        setClicked([...clicked.slice(0, i), true, ...clicked.slice(i + 1)])
    }
    useEffect(() => {
        if (clicked) {
            // console.log(clicked)
        }
    }, [clicked])

    useEffect(() => {
        console.log(updateSuggestedList)

        if (updateSuggestedList) {
            const index = INITIAL_SKILLS.indexOf(updateSuggestedList)
            // console.log(index)
            if (index > -1) {
                setClicked([...clicked.slice(0, index), true, ...clicked.slice(index + 1)])
            }

        }

    }, [updateSuggestedList])

    useEffect(() => {
        if (lastDeselected && lastDeselected !== '') {
            console.log(lastDeselected)
            const index = INITIAL_SKILLS.indexOf(lastDeselected)
            if (index > -1) {
                setClicked([...clicked.slice(0, index), false, ...clicked.slice(index + 1)])
            }

            setUpdateSuggestedList('')
        }


    }, [lastDeselected])

    return (
        <div className="SuggestedSkills w-[133px] h-[234px] relative">
            <div className="SuggestedSkills mb-4   text-blue-950 text-base font-semibold font-['Poppins']">Suggested Skills</div>
            <div className="Frame1  flex-col justify-start items-start gap-1.5">
                {suggestedSkills.length > 0 && suggestedSkills.map((s, i) => <button key={i} onClick={() => onClick(s, i)} disabled={clicked[i]} className={`text-left w-full text-slate-500 text-base font-normal font-['Poppins'] mb-1 rounded-lg  px-2 py-1 cursor-pointer disabled ${clicked[i] && 'bg-blue-950 text-white'}`}>{clicked[i] === true ? '-' : '+'} {s}</button>)
                }
            </div>


        </div>
    )
}

export default SuggestedSkills