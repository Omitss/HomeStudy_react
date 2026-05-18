import './App.css'
import { useState } from 'react'
import ScoresTable from './components/ScoresTable'
import Form from './components/Form'


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

function App() {
  const [info, setInfo] = useState(initinfo)
  const [scores, setScores] = useState(intialscores)

  return (
    <>
    <ScoresTable scores = {scores}/> {/*오브젝트를 ScoresTabl.jsx로 상속*/}
    <Form info = {info} setInfo = {setInfo} setScores = {setScores}/> {/*오브젝트와 함수를 From.jsx로상속*/}
        
    </>
   
  )
}

export default App