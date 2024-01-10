import React, { useEffect, useState } from 'react'

const UserList = ({ list }) => {

    return (
        <div>
            {
                list.length > 0 && list.map(user => (<p key={user.id}>{user.name}&nbsp;&nbsp;{user.email}</p>))
            }
        </div>
    )
}

export default UserList