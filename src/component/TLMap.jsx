import React, { useContext } from 'react'
import { StateContext } from './StateContext'
import TLItem from './TLItem'
import { v4 as uuidv4 } from 'uuid'
import '../style/App.css'

const TLMap = () => {
  const context = useContext(StateContext)
  const { state } = context

  return (

    <div className='timeline-container'>

      {state.map(info => (
        <TLItem key={uuidv4()} info={info} />
      ))}
      
    </div>

  )
}

export default TLMap
