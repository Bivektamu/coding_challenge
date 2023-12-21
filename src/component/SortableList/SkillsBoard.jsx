import React, { useState, useEffect, useCallback } from 'react'
import SearchBox from './SearchBox'
import SuggestedSkills from './SuggestedSkills'


const SkillsBoard = () => {

    const [clickedSuggestedSkill, setClickedSuggestedSkill] = useState()
    const [lastDeselected, setLastDeselected] = useState()
    const [suggestedSkill, setSuggestedSkill] = useState()


    const [selectedSkills, setSelectedSkills] = useState([])

    const updateSuggestedList = (s) => {
        setLastDeselected('')

    }
    const getDeselectSkill = (s) => {
        setLastDeselected(s)
        
        setSuggestedSkill('')

    }

    const updateSelectedSkills = (skill, isActive) => {
        setClickedSuggestedSkill({skill, isActive})
    }

    const getSelectedSkills = s => {
        setSelectedSkills(s)
    }
    return (
        <div className="Frame1 w-[717px] h-[498.85px] p-16 bg-white rounded-2xl shadow justify-start items-start gap-16 inline-flex">
            <SearchBox getSelectedSkills={(s) => getSelectedSkills(s)} updateSuggestedList={s=>updateSuggestedList(s)} lastDeselected={(s) => getDeselectSkill(s)} addSkill={suggestedSkill} updateSelectedSkills={clickedSuggestedSkill} />

            <SuggestedSkills selectedSkills={selectedSkills} lastDeselected={lastDeselected} updateSelectedSkills={(skill, isActive) => updateSelectedSkills(skill, isActive)} />

        </div>
    )
}

export default SkillsBoard