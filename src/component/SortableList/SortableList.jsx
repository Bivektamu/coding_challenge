import React from 'react'
import './styles.css'
import SkillsBoard from './SkillsBoard'

const SortableList = () => {
    
  return (
    <div id="sortable_list" className='w-screen h-screen bg-light-blue flex items-center justify-center'>
        <div className="container w-2/3 h-2/3 ">
            <h1 className='blue'>Select your top 5 tech skills</h1>
            <SkillsBoard />
        </div>
    </div>
  )
}

export default SortableList