import React, { useState, useEffect, useMemo } from 'react'
import AddForm from './AddForm'
import EditForm from './EditForm'
import { useTaskContext } from '../context'

const Kanban = () => {
    const [addBtn, setAddBtn] = useState(false)
    const [editBtn, setEditBtn] = useState(false)
    const [taskId, setTaskId] = useState()
    const [state, dispatch] = useTaskContext()
    const [taskList, setTaskList] = useState({ toDo: [], inProgress: [], done: [] })
    const { tasks } = state
    const [dragState, setDragState] = useState({
        cords: { x: 0, y: 0 },
        draggedTask: {x:0, y:0, task:{}},
        isDragged: false,
        activeCol: ''
    })

    useEffect(() => {
        
    }, [tasks])

    const memoizedTasks = useMemo(()=> {
        if (tasks) {
            let tempTaskList = { toDo: [], inProgress: [], done: [] }
            tasks.map(t => 
                tempTaskList = { ...tempTaskList, [t.status]: [...(tempTaskList[t.status] || []), t] }
            )
            return tempTaskList
        }
    }, [tasks])

    useEffect(()=> {
        setTaskList(memoizedTasks)

    }, [memoizedTasks])

    const deleteHandler = (e, id) => {
        e.stopPropagation()
        dispatch({
            type: 'DELETE',
            payload: id
        })
        dispatch({
            type: 'SET'
        })
    }
    const editHandler = t => {
        setTaskId(t)
        setEditBtn(true)
    }

    const {activeCol, draggedTask, isDragged, cords} = dragState

    const dragStop = e => {
        setDragState(prevState=>({...prevState, cords: {x: e.clientX, y: e.clientY}, isDragged: false}))
        if (activeCol === '') {
            return setDragState(prevState => ({...prevState, draggedTask: {...draggedTask, task: {}}}))

        }
        if (activeCol === draggedTask.task.status) {
            return setDragState(prevState => ({...prevState, activeCol: '', draggedTask: {...draggedTask, task: {}}}))
        }
        const newTask = {...draggedTask.task}
        newTask.status = activeCol
        dispatch({
            type: 'DND',
            payload: newTask
        })
        setDragState(prevState => ({...prevState, activeCol: '', draggedTask: {...draggedTask, task: {}}}))
        dispatch({
            type: 'SET'
        })
    }

    const mouseTracker = e => {
        if (!isDragged) {
            return
        }
        const kanban = document.getElementById('kanban-board').getBoundingClientRect()
        let tempCol = activeCol

        if (e.clientX > kanban.right || e.clientX < kanban.left || e.clientY < kanban.top || e.clientY > kanban.bottom) {
            tempCol = ''
            // return dragStop(e)
        }

        else if (e.clientX < kanban.left + kanban.width / 3) {
            tempCol = 'toDo'
        }
        else if (e.clientX < kanban.right - kanban.width / 3) {
            tempCol = 'inProgress'
        }
        else {
            tempCol = 'done'
        }

        const diff = { x: e.clientX - cords.x, y: e.clientY - cords.y }
        const newCords = {x: e.clientX, y: e.clientY}
        const newDraggedTask = ({ ...draggedTask, x: draggedTask.x + diff.x, y: draggedTask.y + diff.y })
        setDragState({...dragState, cords: newCords, activeCol: tempCol, draggedTask: newDraggedTask})
        
    }

    const startDrag = (e, task) => {
        const newDraggedTask = {  x: (e.currentTarget.parentElement).getBoundingClientRect().left, y: (e.currentTarget.parentElement).getBoundingClientRect().top, task }
        const newCords = { x: e.clientX, y: e.clientY }
        setDragState({...draggedTask, draggedTask: newDraggedTask, cords:newCords, isDragged: true})
    }

    // return <>asdf</>
    return (
        <>
            {addBtn && <AddForm setAddBtn={(isClicked) => setAddBtn(isClicked)} />}
            {editBtn && <EditForm taskId={taskId} setEditBtn={(isClicked) => setEditBtn(isClicked)} />}


            <div className=' mx-auto flex items-center justify-center py-10 bg-slate-800 h-screen' onMouseMove={e => mouseTracker(e)} onMouseUp={e => dragStop(e)}>
                <div className='w-[700px]'>
                    <button className='mb-8 bg-blue-400 py-2 px-4 rounded-md text-lg font-medium text-white shadow-lg shadow-blue-500/50' onClick={() => setAddBtn(true)}>Add Task</button>

                    {tasks.length === 0 ?
                        <>
                            <h1 className='text-2xl text-white'>There are no tasks. Please add new task.</h1>
                        </>
                        :
                        <div id="kanban-board" className="bg-white p-10 rounded-lg grid grid-cols-3 w-full" >
                            {isDragged && <span className={`dragEle fixed cursor-pointer text-white w-[180px] h-[35px] px-4 z-20 flex shadow-lg rounded-md items-center text-left ${draggedTask.task.status === 'toDo' && 'bg-blue-500 shadow-blue-500/50'} ${draggedTask.task.status === 'inProgress' && 'bg-yellow-500 shadow-yellow-500/50'} ${draggedTask.task.status === 'done' && 'bg-green-500 shadow-green-500/50'}`} style={{ top: `${draggedTask.y}px`, left: `${draggedTask.x}px` }}>{draggedTask.task.title}</span>}

                            {Object.keys(taskList).map(k =>
                                <div className='border border-black pb-4'>
                                    <h2 className='text-xl font-bold border-b-[1px] border-black p-4'>{k === 'toDo' ? 'To do' : k === 'done' ? 'Done' : 'In Progress'}</h2>
                                    {taskList[k].map((task, i) =>
                                        <div key={i} className={`relative flex justify-between w-[180px] mx-auto group  items-center bg-${k === 'toDo' ? 'blue' : (k === 'done' ? 'green' : 'yellow')}-500 mt-4 h-[35px] rounded-md text-white cursor-pointer px-3 ${draggedTask.task.id === task.id && 'opacity-0'}`}>
                                            <p className='w-[130px] text-left' onMouseDownCapture={(e) => { startDrag(e, task) }} >{task.title}</p>
                                            <p className='ml-auto mr-0 flex gap-x-2'>
                                                {task.status !== 'done' &&
                                                    <span onClick={() => dispatch({ type: 'TASK_DONE', payload: task.id })}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" className='cursor-pointer' fill="#fff"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                                                    </span>}
                                                <span className='cursor-pointer ' onClick={() => editHandler(task.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="16" width="16" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" /></svg>
                                                </span>
                                                <span className='cursor-pointer' onClick={(e) => deleteHandler(e, task.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="16" width="14" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                                                </span>
                                            </p>

                                            <div className={`absolute invisible group-hover:opacity-100 group-hover:visible transition-all ease-in opacity-0  top-[35px] w-[300px] left-0 rounded-lg py-4 px-3 text-left z-10 shadow-${k === 'toDo' ? 'blue' : (k === 'done' ? 'green' : 'yellow')}-500/50 shadow-lg bg-slate-800`}>
                                                <p className='font-semibold mb-2'>Description:</p>
                                                <p className='text-sm mb-6'>{task.desc}</p>
                                                <div className="flex justify-between">
                                                    <div>
                                                        <p className="font-semibold">Assignee:</p>
                                                        <p className='text-sm'>{task.assignee}</p>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold">Due Date:</p>
                                                        <p className='text-sm'>{task.due}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </div>)}
                        </div>
                    }

                </div>
            </div>
        </>
    )
}
export default Kanban