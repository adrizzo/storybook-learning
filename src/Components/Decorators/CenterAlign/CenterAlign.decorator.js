import React from 'react'
import './CenterAlign.css'

function CenterAlign(props) {
  return (
    <div className='center'>
      {props.children}
    </div>
  )
}

export default CenterAlign
