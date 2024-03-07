import { useRef } from 'react'

const Skill = ({ skill, index, cords, setIsHold }) => {

  const mouseUp = (e) => {
    // clearTimeout(timer.current)
    setIsHold({active: false, index:null})
  }
  return (
    <div className={`skill w-[392px] h-[59px] p-4  rounded-lg border border-slate-200 justify-between items-center inline-flex fixed  bg-blue-950 z-10`} style={{top:`${cords.y}px`, left:`${cords.x}px`}} onMouseUp={mouseUp}>
      <div className="AddSkill text-white outline-none bg-transparent  text-lg font-normal font-['Poppins']">{index + 1}. {skill}</div>
    </div>
  )
}

export default Skill