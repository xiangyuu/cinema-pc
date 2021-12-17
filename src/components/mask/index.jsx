import React from 'react'
import './index.scss'
import error from '../../static/imgs/error.svg'
import warn from '../../static/imgs/warn.svg'
function Mask (props) {
  function judgeStatus(){
    if(props==='error'){
      return(
        <div className='pop-panel'>
          <img src={error}/>
          <span>输入有误!</span>
        </div>
      )
    }
  }
  return (
    <div className='mask'>
      <div className='pop'>
        {judgeStatus()}
      </div>
    </div>
  )
}

export default Mask
