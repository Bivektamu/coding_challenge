import React from 'react'

const Draggable = () => {
    const dragged = e => {
        e.preventDefault()
        e.stopPropagation()
        // console.log('dragging')

    }

    const start = e => {
        e.preventDefault()
        e.stopPropagation()
        console.log('start')
    }
    
    const end = e => {
        e.preventDefault()
        e.stopPropagation()
        console.log('end')
    }
    
    const enter = e => {
        e.preventDefault()
        e.stopPropagation()
        console.log('enter')
    }
    
    const leave = e => {
        e.preventDefault()
        e.stopPropagation()
        console.log('leave')
    }
    
    const over = e => {
        e.stopPropagation()
        e.preventDefault()
        console.log('over')
    }
    
    const drop = e => {
        e.preventDefault()
        e.stopPropagation()
        console.log('drop')
    }
  return (
    <div className='p-12'>
        <h1 className='mb-12 cursor-pointer w-[100px] bg-slate-200 mx-auto' onDragCapture={dragged} onDragEnd={end} onDragStart={start}  draggable>Draggable</h1>
        <div id="drag-here" className='w-[500px] h-[100px] bg-slate-400 mx-auto' onDragEnter={enter} onDragLeave={leave} onDragOver={over} onDrop={drop}></div>
    </div>
  )
}

export default Draggable