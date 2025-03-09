import { useGetProjectByIdQuery } from '@/redux/projectApi'
import React from 'react'

const FiberTentlifyCard = () => {

     const { data: project } = useGetProjectByIdQuery()  

  return (
    <div>FiberTentlifyCard</div>
  )
}

export default FiberTentlifyCard