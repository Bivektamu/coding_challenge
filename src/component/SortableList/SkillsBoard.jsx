import React, { useState, useEffect } from 'react'
import SearchBox from './SearchBox'
import SuggestedSkills from './SuggestedSkills'


const SkillsBoard = () => {

    const [selectedSkill, setSelecedSkill] = useState()
    const [lastDeselected, setLastDeselected] = useState()
    const [suggestedSkill, setSuggestedSkill] = useState()

    const updateSuggestedList = (s) => {
        setSelecedSkill(s)
        setLastDeselected('')

    }
    const getDeselectSkill = (s) => {
        setLastDeselected(s)
        setSelecedSkill('')
        // addSkill('')
        setSuggestedSkill('')

    }

    const addSkill = s=> {
        console.log('asdf')
        setLastDeselected('')
        setSuggestedSkill(s)
    }

    // useEffect(()=> {console.log(lastDeselected)}, [lastDeselected])
    
    return (
        <div className="Frame1 w-[717px] h-[498.85px] p-16 bg-white rounded-2xl shadow justify-start items-start gap-16 inline-flex">

            <SearchBox updateSuggestedList={(s) => updateSuggestedList(s)} lastDeselected={(s) => getDeselectSkill(s)} addSkill = {suggestedSkill} />
            <SuggestedSkills lastSelected={selectedSkill} lastDeselected={lastDeselected} clickHandler={s=>addSkill(s)} />

        </div>
    )
}

export default SkillsBoard