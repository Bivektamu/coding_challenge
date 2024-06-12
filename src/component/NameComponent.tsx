import React, { memo } from 'react'

type Props = {
  name: string
}

const NameComponent = memo(({ name }: Props) => {
  console.log('a')
  return (
    <div>Name is: <span>{name}</span></div>
  )
})

export default NameComponent