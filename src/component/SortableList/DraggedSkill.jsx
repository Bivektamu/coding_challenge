const Skill = ({ skill, index, cords}) => {

  return (
    <div className={`skill w-[392px] h-[59px] p-4  rounded-lg border border-slate-200 justify-between items-center inline-flex fixed  bg-blue-950 ${cords.isDragged ? 'z-0':'z-0'}`} style={{top:`${cords.y}px`, left:`${cords.x}px`}}>
      <div className="AddSkill text-white outline-none bg-transparent  text-lg font-normal font-['Poppins']">{parseInt(index) + 1}. {skill}</div>
    </div>
  )
}

export default Skill