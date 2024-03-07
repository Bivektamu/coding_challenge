import { useEffect, useRef } from 'react'

const Skill = ({ skill, index, onClickHandler, setIsHold, isHold, setCords, cords }) => {

  const timer = useRef(null)


  const mouseDown = (e) => {
    console.log('clicked')
    if (timer.current) {
      clearTimeout(timer.current)
    }
    // setIsHold({active: true, index})
    console.log(e.target.getBoundingClientRect().left)
    setCords({ x: e.target.getBoundingClientRect().left, y: e.target.getBoundingClientRect().top })
    timer.current = setTimeout(() => setIsHold({ active: true, index, diff: { x: e.clientX - e.target.getBoundingClientRect().left, y: e.clientY - e.target.getBoundingClientRect().top } }), 100)

  }
  const mouseUp = (e) => {

    // clearTimeout(timer.current)
    timer.current = clearTimeout(timer.current)
    setIsHold({ active: false, index: null, diff: {} })
  }

  // useEffect(()=> {
  //   console.log(cords)
  // }, [cords])

  return (
    <>
      <div data-index={index} className={`skill w-[392px] h-[59px] p-4  rounded-lg border border-slate-200 justify-between items-center inline-flex  bg-blue-950 ${isHold && isHold.index === index ? 'fixed z-10' : 'relative'}`} onMouseDown={mouseDown} onMouseUp={mouseUp} style={isHold.index === index && cords && cords.x ? { left: `${cords.x}px`, top: `${cords.y}px` } : { left: 'auto', top: 'auto' }}>
        <span className="AddSkill w-full text-left pointer-events-none text-white outline-none bg-transparent  text-lg font-normal font-['Poppins']">{index + 1}. {skill}</span>
        <span className="Plus w-5 h-5 absolute text-white top-2 right-4 text-2xl cursor-pointer" onClick={() => onClickHandler(index)}>x</span>
      </div>
      {isHold.index === index &&
        <div className="fakeSkill w-[392px] h-[59px] p-4  rounded-lg border-dashed border  border-slate-200 justify-between items-center inline-flex relative"></div>
      }
    </>
  )
}

export default Skill