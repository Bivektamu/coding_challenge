import { useEffect, useState } from 'react'

const Skill = ({ skill, index, onClickHandler, selectedSkills, setSelectedSkills, dnd, setDnd }) => {




  useEffect(() => {
    const { dragged, dropped, isDragged } = dnd
    if (dragged && dropped) {
      const updateSkills = [...selectedSkills]
      const temp = updateSkills[dragged]
      updateSkills[dragged] = updateSkills[dropped]
      updateSkills[dropped] = temp
      setSelectedSkills([...updateSkills])
    }
  }, [dnd])

  const dragInit = (e, index) => {
    e.stopPropagation()
    setDnd({ dragged: index.toString(), dropped: null, isDragged: true })
  
  }

  const droppedHandler = (e, index) => {
    e.stopPropagation()

    setDnd(prev => ({ ...prev, dropped: index.toString(), isDragged: false }))
    // setDnd(prev => ({ ...prev, dragged: e.dataTransfer.getData('dragged'), dropped: index.toString() }))
  }

  const over = e => {
    e.stopPropagation()
    e.preventDefault()
  }

  const end = e => {
    e.stopPropagation()
    if(dnd.isDragged) {
      setDnd(prev => ({ ...prev, isDragged: false }))
    }
  }

  return (
    <div data-index={index} className={`skill  w-[392px] h-[59px] p-4  rounded-lg border border-slate-200 justify-between items-center inline-flex  bg-blue-950 relative `} draggable onDrop={e => droppedHandler(e, index)} onDragOver={(e) => over(e)} onDragStart={e => dragInit(e, index)} onDragEnd={end}>
      <span className="AddSkill w-full text-left  text-white outline-none bg-transparent  text-lg font-normal font-['Poppins']">{index + 1}. {skill}</span>
      <span className="Plus w-5 h-5 absolute text-white top-2 right-4 text-2xl cursor-pointer" onClick={() => onClickHandler(index)}>x</span>
    </div>

  )
}

export default Skill