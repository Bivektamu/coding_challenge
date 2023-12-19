import React, { useState, useEffect } from 'react'
import SearchBox from './SearchBox'
import SuggestedSkills from './SuggestedSkills'


const SkillsBoard = () => {

    const [selectedSkills, setSS] = useState([])
    const getSelectedSkills = (s) => {
        setSS(s)
    }

    const updateSkills = (s) => {
        console.log('asdf')
    }
    return (
        <div className="Frame1 w-[717px] h-[498.85px] p-16 bg-white rounded-2xl shadow justify-start items-start gap-16 inline-flex">

                <SearchBox skills={(s)=>getSelectedSkills(s)} />
                <SuggestedSkills skills={selectedSkills} updateSkills={updateSkills()} />
                
        </div>
    )
}

export default SkillsBoard