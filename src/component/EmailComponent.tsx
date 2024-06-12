import React from 'react'

type Props = {
  email: string
}

const EmailComponent = ({ email }: Props) => {
  return (
    <div>Email is: <span>{email}</span></div>


  )
}

export default EmailComponent