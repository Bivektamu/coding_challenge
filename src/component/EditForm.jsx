import React, { useContext, useEffect, useState } from 'react'
import TaskContext from '../context'

const EditForm = ({ setEditBtn, taskId }) => {
    const { tasks, setTasks } = useContext(TaskContext)

    const [formData, setFormData] = useState({
        id: '',
        title: '',
        desc: '',
        assignee: '',
        due: '',
        status: ''
    })


    useEffect(() => {
        const task = tasks.filter(t => t.id === taskId)[0]
        setFormData({
            id: task.id,
            title: task.title,
            desc: task.desc,
            assignee: task.assignee,
            due: task.due,
            status: task.status
        })
    }, [])

    const [errors, setErrors] = useState([])
    const { id, title, desc, assignee, due, status } = formData
    const submitHandler = e => {
        e.preventDefault()
        let newErrors = []
        if (title === '') newErrors.push('Please add title')
        if (desc === '') newErrors.push('Please add description')
        if (assignee === '') newErrors.push('Please add assignee')
        if (due === '') { newErrors.push('Please set due date') }
        else {
            const currDate = new Date()
            const inputDateArr = due.split('-')
            const selectedDate = new Date(inputDateArr[0], inputDateArr[1] - 1, inputDateArr[2])
            if (selectedDate.getTime() < currDate.getTime()) {
                newErrors.push('Please select valid date')
            }
        }
        if (status === '') newErrors.push('Please set status')


        if (newErrors.length > 0) {
            return setErrors([...newErrors])
        }
        const updatedTasks = [...tasks.filter(t => t.id !== id), formData]

        localStorage.setItem('tasks', JSON.stringify([...updatedTasks]))

        setTasks([...updatedTasks])
        setErrors([])
        setEditBtn(false)
    }

    return (
        <>
            {errors.length > 0 && <div className='fixed top-6 right-6 flex flex-col text-left z-10 gap-y-4'>
                {errors.map((e, i) => <span key={i} className='text-red-400 px-4 py-2 bg-white '>{e}</span>)}
            </div>}

            <div className='w-screen h-screen fixed bg-black/50 flex items-center justify-center'>
                <span className='absolute top-10 text-white text-4xl cursor-pointer' onClick={() => setEditBtn(false)}>x</span>

                <form className='flex flex-col gap-y-6' onSubmit={e => submitHandler(e)}>
                    <input type="text" name='title' value={title} placeholder='Title' className='py-2 px-4' onChange={e => setFormData({ ...formData, title: e.target.value })} />
                    <input type="text" name='desc' value={desc} placeholder='Decription' className='py-2 px-4' onChange={e => setFormData({ ...formData, desc: e.target.value })} />
                    <input type="text" name='assignee' value={assignee} placeholder='Assignee' className='py-2 px-4' onChange={e => setFormData({ ...formData, assignee: e.target.value })} />
                    <input type="date" name='due' value={due} placeholder='Due Date' className='py-2 px-4' onChange={e => setFormData({ ...formData, due: e.target.value })} />
                    <select name="status" value={status} id="" onChange={e => setFormData({ ...formData, status: e.target.value })}>
                        <option value="">Status</option>
                        <option value="toDo">To Do</option>
                        <option value="inProgress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                    <button className='bg-blue-500 text-white rounded-md px-4 py-2'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default EditForm