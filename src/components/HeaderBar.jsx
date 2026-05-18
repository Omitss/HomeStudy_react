import React from 'react'
import { Link } from 'react-router-dom'

function HeaderBar() {
  return (
    <div>
      <Link style = {{marginLeft:"15px"}} to = "/score">점수</Link>
      <Link style = {{marginLeft:"15px"}} to = "/employee">고용정보</Link>
      <Link style = {{marginLeft:"15px"}} to = "/user">사용자</Link>
    </div>
  )
}

export default HeaderBar
