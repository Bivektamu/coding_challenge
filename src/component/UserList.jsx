import React, { useEffect, useState } from 'react'

const UserList = ({ list }) => {

    return (
        <div>
            {
                list.length > 0 && list.map((user, i) => (<p key={i}>{user}</p>))
            }
        </div>
    )
}

export default UserList