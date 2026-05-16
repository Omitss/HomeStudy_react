import { useState } from 'react'
import './App.css'
import ScoresTable from './components/ScoresTable'

const initalscores = [ 
  {이름 : "John", 국어: 90, 영어: 90, 수학:80, 과학 : 90}, 
  {이름 : "peter", 국어: 90, 영어: 90, 수학:80, 과학 : 90},
  {이름 : "susan", 국어: 90, 영어: 90, 수학:80, 과학 : 90},
  {이름 : "Sue", 국어: 90, 영어: 90, 수학:80, 과학 : 90}
]

const initialinfo = {  이름 : "", 국어: null, 영어: null, 수학: null, 과학 : null }

function App() {
  const[info, setInfo] = useState(initialinfo)
  const[scores, setScores] = useState(initalscores)

  const handleChange = (event) =>{
    const {name, value} = event.target; //;는 안붙여도 됨. 보통 "한 줄의 완벽한 명령"때 ; 붙이는데, JSX는 안붙여도 잘 돌아감
     setInfo((prev)=>(
      {...prev, [name]:value}
     ))
  }

  const handleSubmit = ()=> {
    event.preventDefault(); // 안배움, 그냥 암기 사항 onSubmit의 썻다 == 애도 써야함
    setScores((prev)=>(
      [...prev, info]
    ))
  }

  return ( 
    <>
    <ScoresTable scores={scores}/>

     <form onSubmit={handleSubmit}>
      <div>이름: 
        <input 
          type="text" 
          name="이름" 
          value={info.이름}
          onChange={handleChange}
          />
      </div>
      <div>국어: 
        <input 
          type="number" 
          name="국어" 
          value={info.국어}
          onChange={handleChange}
        />
      </div>
      <div>영어: 
        <input 
          type="number" 
          name="영어" 
          value={info.영어}
          onChange={handleChange}
        />
      </div>
      <div>수학: 
        <input 
          type="number" 
          name="수학" 
          value={info.수학}
          onChange={handleChange}
          />
      </div>
      <div>과학: 
        <input 
          type="number" 
          name="과학" 
          value={info.과학}
          onChange={handleChange}
        />
        </div>
      <button>제출</button>
    </form>
  </>  
  )
}

export default App