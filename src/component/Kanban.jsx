import React, { useState, useContext, useEffect } from 'react'
import AddForm from './AddForm'
import EditForm from './EditForm'
import TaskContext from '../context'

const Kanban = () => {
    const [addBtn, setAddBtn] = useState(false)
    const [editBtn, setEditBtn] = useState(false)
    const [taskId, setTaskId] = useState()
    const { tasks, setTasks } = useContext(TaskContext)
    const [taskList, setTaskList] = useState({ toDo: [], inProgress: [], done: [] })


    useEffect(() => {
        if (tasks) {
            let toDo = [], inProgress = [], done = []
            tasks.map(t => {
                if (t.status === 'toDo') toDo.push(t)
                else if (t.status === 'inProgress') inProgress.push(t)
                else done.push(t)
            })
            setTaskList({ toDo, inProgress, done })
        }
    }, [tasks])


    const deleteHandler = id => {
        const newTasks = tasks.filter(task => task.id !== id)
        if (newTasks.length > 0) {
            localStorage.setItem('tasks', JSON.stringify([...newTasks]))
            setTasks([...newTasks])
        }
        else {
            console.log(newTasks)
            localStorage.setItem('tasks', '')
            setTasks([])
        }
    }
    const editHandler = t => {
        setTaskId(t)
        setEditBtn(true)
    }

    const { toDo, inProgress, done } = taskList
    return (
        <>
            {addBtn && <AddForm setAddBtn={(isClicked) => setAddBtn(isClicked)} />}
            {editBtn && <EditForm taskId={taskId} setEditBtn={(isClicked) => setEditBtn(isClicked)} />}

            <div className='max-w-[500px] mx-auto flex items-center justify-center py-10'>
                <div>
                    <button className='mb-8 bg-blue-400 py-2 px-4 rounded-md text-lg font-medium text-white' onClick={() => setAddBtn(true)}>Add Task</button>
                    <div className="kanban-board grid grid-cols-3">
                        <div className='border border-black '>
                            <h2 className='text-xl font-bold p-4'>To Do</h2>
                            {toDo.length > 0 && toDo.map((task, i) =>
                                <div key={i} className='grid grid-cols-3 items-center'>
                                    <span  className='border-t p-4 border-solid border-black w-full block col-span-2'>{task.title}</span>
                                    <div className='flex gap-x-2'>
                                        <span className='cursor-pointer' onClick={() => editHandler(task.id)}>=</span>
                                        <span className='cursor-pointer' onClick={() => deleteHandler(task.id)}>x</span>
                                    </div>
                                </div>)}

                        </div>
                        <div className='border border-black '>
                            <h2 className='text-xl font-bold p-4 '>In Progress</h2>
                            {inProgress.length > 0 && inProgress.map((task, i) =>

                                <div key={i} className='grid grid-cols-3 items-center'>
                                    <span  className='border-t p-4 border-solid border-black w-full block col-span-2'>{task.title}</span>
                                    <div className='flex gap-x-2'>
                                        <span className='cursor-pointer' onClick={() => editHandler(task.id)}>=</span>
                                        <span className='cursor-pointer' onClick={() => deleteHandler(task.id)}>x</span>
                                    </div>
                                </div>)}

                        </div>

                        <div className='border border-black '>
                            <h2 className='text-xl font-bold p-4'>Done</h2>
                            {done.length > 0 && done.map((task, i) =>

                                <div key={i} className='grid grid-cols-3 items-center'>
                                    <span  className='border-t p-4 border-solid border-black w-full block col-span-2'>{task.title}</span>
                                        <span className='cursor-pointer' onClick={() => editHandler(task.id)}>=</span>
                                    <span className='cursor-pointer' onClick={() => deleteHandler(task)}>x</span>
                                </div>)}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Kanban