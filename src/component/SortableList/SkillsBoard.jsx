import React, { useState, useEffect } from 'react'
import Skill from './Skill'
import SKILLS from '../../dataLayer'

const SkillsBoard = () => {
    const [value, setV] = useState('')
    const [sugg, setS] = useState([])
    useEffect(() => {
        if (value) {
            console.clear()
            const allS = SKILLS
            // const filtered = allS.filter(s=> s.indexOf(value) === 0)

            const filtered = allS.filter(s => {
                const index = (s.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()))
                if (index === 0) {
                    console.log(s)
                    return s
                }
            })
            setS(filtered)
        }

    }, [value])
    return (
        <div className='board'>
            <div className="Frame1 w-[717px] h-[498.85px] p-16 bg-white rounded-2xl shadow justify-start items-start gap-16 inline-flex">
                <div className="Skills flex-col justify-center items-center gap-[18px] inline-flex">
                    {/* <Skill /> */}
                    <div className="FaqFour w-[392px] h-[59px] p-4 bg-gray-50 rounded-lg border border-slate-200 justify-between items-center inline-flex relative">
                        <input className="AddSkill text-slate-500 text-lg font-normal font-['Poppins']" placeholder='Add Skill' value={value} onChange={e => setV(e.target.value)} />

                        {sugg.length > 0 && (
                            <div className="FaqFour absolute left-0 top-14 w-[392px]  bg-gray-50 rounded-lg border border-slate-200">
                                {sugg.map(s => (
                                    <div onClick={()=>setV(s)} className="Rectangle1 hover:bg-slate-200 cursor-pointer border-l border-r border-slate-200">
                                        <p className="Reactjs text-slate-500 text-base font-normal font-['Poppins'] text-left p-2">{s}</p>
                                    </div>
                                ))}
                            </div>
                        )}


                    </div>
                </div>
                <div className="SuggestedSkills w-[133px] h-[234px] relative">
                    <div className="Frame1 left-0 top-[40px] absolute flex-col justify-start items-start gap-1.5 inline-flex">
                        <div className="Html text-slate-500 text-base font-normal font-['Poppins']">+ HTML</div>
                        <div className="Css text-slate-500 text-base font-normal font-['Poppins']">+ CSS</div>
                        <div className="Bootstrap text-slate-500 text-base font-normal font-['Poppins']">+ Bootstrap</div>
                        <div className="Typescript text-slate-500 text-base font-normal font-['Poppins']">+ TypeScript</div>
                        <div className="Vuejs text-slate-500 text-base font-normal font-['Poppins']">+ VueJs</div>
                        <div className="Angular text-slate-500 text-base font-normal font-['Poppins']">+ Angular</div>
                        <div className="Nodejs text-slate-500 text-base font-normal font-['Poppins']">+ NodeJs</div>
                    </div>
                    <div className="SuggestedSkills left-0 top-0 absolute text-blue-950 text-base font-semibold font-['Poppins']">Suggested Skills</div>
                </div>
            </div>
        </div>
    )
}

export default SkillsBoard