import React, { useState, useContext, useEffect } from 'react'
import AddForm from './AddForm'
import TaskContext from '../context'

const Kanban = () => {
    const [addBtn, setAddBtn] = useState(false)
    const { tasks } = useContext(TaskContext)
    const [taskList, setTaskList] = useState({ toDo: [], inProgress: [], done: [] })

    useEffect(() => {
        if (tasks.length > 0) {
            console.log(tasks)
            let toDo = [], inProgress =[], done= []
            tasks.map(t => {
                if (t.status === 'toDo') toDo.push(t)
                else if (t.status === 'inProgress') inProgress.push(t)
                else done.push(t)
            })
            setTaskList({toDo, inProgress, done})
        }
    }, [tasks])

    useEffect(()=> {
        console.log(taskList)
    }, [taskList])

    const {toDo, inProgress, done} = taskList
    return (
        <>
            {addBtn && <AddForm />}

            <div className='max-w-[500px] mx-auto flex items-center justify-center py-10'>
                <div>
                    <button className='mb-8 bg-blue-400 py-2 px-4 rounded-md text-lg font-medium text-white' onClick={() => setAddBtn(true)}>Add Task</button>
                    <div className="kanban-board grid grid-cols-3">
                        <div className='border border-black '>
                            <h2 className='text-xl font-bold p-4'>To Do</h2>
                            {toDo.length > 0 && toDo.map((task, i)=><span key={i} className='border-t p-4 border-solid border-black w-full block'>{task.title}</span>)}

                        </div>
                        <div className='border border-black '>
                            <h2 className='text-xl font-bold p-4 '>In Progress</h2>
                            {inProgress.length > 0 && inProgress.map((task, i)=><span key={i} className='border-t p-4 border-solid border-black w-full block'>{task.title}</span>)}

                        </div>

                        <div className='border border-black '>
                            <h2 className='text-xl font-bold p-4'>Done</h2>
                            {done.length > 0 && done.map((task, i)=><span key={i} className='border-t p-4 border-solid border-black w-full block'>{task.title}</span>)}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Kanban