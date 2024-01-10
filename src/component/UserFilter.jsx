import React, { useState } from 'react'

const UserFilter = ({typedName}) => {
    const [name, setName] = useState('')
    const onSubmitHandler = (e) => {
        e.preventDefault()
        typedName(name)
    }
    return (
        <form onSubmit={(e)=>onSubmitHandler(e)}>
            <input type="text" name="name" id="name" value ={name} onChange={e=>setName(e.target.value)} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default UserFilter