import React, { useContext, useEffect, useState } from 'react'
import TaskContext from '../context'

const AddForm = () => {
    const { tasks, setTasks } = useContext(TaskContext)

    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        assignee: '',
        due: '',
        status: ''
    })

    const [errors, setErrors] = useState([])
    const { title, desc, assignee, due } = formData
    const submitHandler = e => {
        e.preventDefault()
        let newErrors = []
        if (title === '') newErrors.push('Please add title')
        if (desc === '') newErrors.push('Please add description')
        if (assignee === '') newErrors.push('Please add assignee')
        if (due === '') newErrors.push('Please set due date')

        console.log(due)

        if (newErrors.length > 0) {
            return setErrors([...newErrors])
        }
        const findIfTitleExists = tasks.filter(t => t.title === title)
        if (findIfTitleExists.length > 0) {
            return setErrors(['Task already exists'])
        }
        setTasks([...tasks, formData])
        setErrors([])

    }

    return (
        <>
            {errors.length > 0 && <div className='fixed top-6 right-6 flex flex-col text-left z-10 gap-y-4'>
                {errors.map((e, i) => <span key={i} className='text-red-400 px-4 py-2 bg-white '>{e}</span>)}
            </div>}

            <div className='w-screen h-screen fixed bg-black/25 flex items-center justify-center'>

                <form className='flex flex-col gap-y-6' onSubmit={e => submitHandler(e)}>
                    <input type="text" name='title' value={title} placeholder='Title' className='py-2 px-4' onChange={e => setFormData({ ...formData, title: e.target.value })} />
                    <input type="text" name='desc' value={desc} placeholder='Decription' className='py-2 px-4' onChange={e => setFormData({ ...formData, desc: e.target.value })} />
                    <input type="text" name='assignee' value={assignee} placeholder='Assignee' className='py-2 px-4' onChange={e => setFormData({ ...formData, assignee: e.target.value })} />
                    <input type="date" name='due' value={due} placeholder='Due Date' className='py-2 px-4' onChange={e => setFormData({ ...formData, due: e.target.value })} />
                    <select name="status" id="" onChange={e=>setFormData({...formData, status: e.target.value})}>
                        <option value="">Status</option>
                        <option value="toDo">To Do</option>
                        <option value="inProgress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddForm