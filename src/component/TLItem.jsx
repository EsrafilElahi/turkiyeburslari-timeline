import React from 'react'
import '../style/App.css'


const TLItem = ({ info }) => {

  return (
    <div className='timeline-item'>

      <div className='timeline-content'>

        <span className='date'>{info.date}</span>
        <p className='title'>{info.title}</p>
        <p className='desc'>{info.desc}</p>
        <span className='circle'></span>

      </div>

    </div>
  )
}

export default TLItem
