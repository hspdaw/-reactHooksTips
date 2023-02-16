import { memo } from 'react'

export const Small = memo(({value}) => {
    console.log('ME volví a dibujar')
  return (
    <small>{value}</small>
  )
})
