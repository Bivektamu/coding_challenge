import React, { useEffect, useState } from 'react'

const SuggestedSkills = ({skills}) => {
    const INITIAL_SKILLS = ['HTML', 'CSS', 'Bootstrap', 'TypeScript', 'VueJs', 'Angular', 'NodeJs']
    const [suggestedSkills, setSS] = useState([])
    const [clicked, setC] = useState([])
    useEffect(() => {
        setSS(INITIAL_SKILLS)
        const temp = INITIAL_SKILLS.map(s=> false)
        setC(temp)

    }, [])
    const onClick = (s, i) => {
        setC([...clicked.slice(0, i), true, ...clicked.slice(i+1)])
    }
    useEffect(()=>{
        if(clicked) {
            console.log(clicked)
        }
    }, [clicked])

    
    useEffect(()=>{
        console.log(skills)
        

    }, [skills])

    return (
        <div className="SuggestedSkills w-[133px] h-[234px] relative">
            <div className="SuggestedSkills mb-4   text-blue-950 text-base font-semibold font-['Poppins']">Suggested Skills</div>
            <div className="Frame1  flex-col justify-start items-start gap-1.5">
                {suggestedSkills.length > 0 && suggestedSkills.map((s, i) => <p key={i} onClick={()=>onClick(s, i)} className={`text-left text-slate-500 text-base font-normal font-['Poppins'] mb-1 rounded-lg  px-2 py-1 cursor-pointer ${clicked[i]&&'bg-blue-950 text-white'}`}>{clicked[i]===true?'-':'+'} {s}</p>)
                }
            </div>


        </div>
    )
}

export default SuggestedSkills