import React from 'react'
import Skill from './Skill'

const SkillsBoard = () => {
    return (
        <div className='board'>
            <div className="Frame1 w-[717px] h-[498.85px] p-16 bg-white rounded-2xl shadow justify-start items-start gap-16 inline-flex">
                <div className="Skills flex-col justify-center items-center gap-[18px] inline-flex">
                    <Skill />
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