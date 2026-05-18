import React from 'react'
import Form from '../components/score/Form'
import ScoresTable from '../components/score/ScoresTable'
import { useState } from 'react'

const intialscores = [
  { 이름 : 'john', 국어 : 90, 영어 : 90, 수학 : 80, 과학 : 90},
  { 이름 : 'peter', 국어 : 90, 영어 : 90, 수학 : 80, 과학 : 90},
  { 이름 : 'susan', 국어 : 90, 영어 : 90, 수학 : 80, 과학 : 90},
  { 이름 : 'sue', 국어 : 90, 영어 : 90, 수학 : 80, 과학 : 90},

]

const initinfo = {
  이름 : "",
  국어 : null,
  영어 : null,
  수학 : null,
  과학 : null,
}


function ScorePage() {
    const [info, setInfo] = useState(initinfo)
    const [scores, setScores] = useState(intialscores)

  return (
    <>
        <ScoresTable scores = {scores}/> 
        <Form info = {info} setInfo = {setInfo} setScores = {setScores}/> 
    </>
  )
}

export default ScorePage
