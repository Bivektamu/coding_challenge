import React, { useState, useEffect, useRef } from 'react'
import { SKILLS, SUGGESTED_SKILLS } from '../../dataLayer'
import Skill from './Skill'
import DraggedSkill from './DraggedSkill'
const SearchBox = ({ updateSelectedSkills, updateSuggestedList, getSelectedSkills, addSkill }) => {

    const [selectedSkills, setSelectedSkills] = useState([])
    const [value, setValue] = useState('')
    const [autoCompleteList, setAutoCompleteList] = useState([])
    const [autoComplete, setAutoComplete] = useState(false)
    const [allSkills, setAllSkills] = useState(SKILLS)
    const [dnd, setDnd] = useState({
        dragged: '',
        dropped: '',
        isDragged: false,
      })

      const [cords, setCords] = useState(
        {
            x:0,
            y:0
        }
      )

    const inputRef = useRef()


    useEffect(() => {
        document.addEventListener('click', e => allClicksHandler(e))

        return (() => {
            document.removeEventListener('click', e => allClicksHandler(e))
        })
    }, [])

    useEffect(() => {
        if (updateSelectedSkills) {
            const { skill, isActive } = updateSelectedSkills
            if (isActive) {
                deleteSkill(skill)
            }
            else {
                onClick(skill)
            }
        }
        // eslint-disable-next-line
    }, [updateSelectedSkills])

    useEffect(() => {
        if (addSkill && selectedSkills.length < 5) {

            setSelectedSkills([...selectedSkills, addSkill])
            const temp = allSkills.filter(s => s !== addSkill)
            setAllSkills(temp)
        }
        // eslint-disable-next-line
    }, [addSkill])

    useEffect(() => {
        getSelectedSkills(selectedSkills)
        // eslint-disable-next-line
    }, [selectedSkills])


    useEffect(() => {

        if (autoComplete) {
            const filtered = allSkills.filter(s => s.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) === 0)
            setAutoCompleteList(filtered)
        }
        else {
            setAutoCompleteList([])
        }

        // eslint-disable-next-line
    }, [autoComplete, value])



    const onClick = (s) => {
        setSelectedSkills([...selectedSkills, s])
        setValue('')
        setAutoCompleteList([])
        let temp = allSkills.filter(sk => sk !== s)
        setAllSkills(temp)
        const exists = SUGGESTED_SKILLS.filter(sk => sk === s)
        if (exists.length > 0) {
            updateSuggestedList(s)
        }
    }

    const deleteSkill = (s) => {
        let temp = selectedSkills.filter((skill) => skill !== s)
        setSelectedSkills(temp)
        temp = allSkills
        temp.push(s)
        setAllSkills(temp)
    }

    const allClicksHandler = e => {
        if (e.target.tagName !== 'INPUT') {
            setAutoComplete(false)
        }
    }


    return (
        <div className="skills flex-col justify-center items-center gap-[18px] inline-flex">
            {selectedSkills.length > 0 && selectedSkills.map((s, i) => <Skill key={i} dnd={dnd} setDnd={setDnd} skill={s} index={i} selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills}  onClickHandler={() => deleteSkill(s)} />)}
            {selectedSkills.length < 5 && (
                <div className={`FaqFour w-[392px] h-[59px] p-4  rounded-lg border border-slate-200 justify-between items-center inline-flex relative bg-gray-50`}>
                    <input className={`AddSkill text-slate-500 outline-none w-full bg-transparent  text-lg font-normal capitalize font-['Poppins'] `} placeholder={`${selectedSkills.length + 1}. Add Skill`} value={value} onChange={e => setValue(e.target.value)} onFocus={() => setAutoComplete(true)} ref={inputRef} />
                    {autoComplete && autoCompleteList.length > 0 && (
                        <div className="FaqFour absolute left-0 top-14 w-[392px] max-h-[250px] overflow-auto z-10  bg-gray-50 rounded-lg border border-slate-200">
                            {autoCompleteList.map((s, i) => (
                                <div key={i} className="Rectangle1 hover:bg-slate-200 cursor-pointer border-l border-r border-slate-200">
                                    <p className="Reactjs text-slate-500 text-base font-normal font-['Poppins'] text-left p-2" onClick={() => onClick(s)}>{s}</p>
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