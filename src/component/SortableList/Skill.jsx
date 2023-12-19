import React from 'react'

const Skill = ({skill, index, onClickHandler}) => {


  return (
    <div className="FaqFour w-[392px] h-[59px] p-4  rounded-lg border border-slate-200 justify-between items-center inline-flex relative bg-blue-950">
      <div  className="AddSkill text-white outline-none bg-transparent  text-lg font-normal font-['Poppins']">{index+1}. {skill}</div>
      <span className="Plus w-5 h-5 absolute text-white top-2 right-4 text-2xl cursor-pointer" onClick={() => onClickHandler(index)}>x</span>
    </div>
  )
}

export default Skill