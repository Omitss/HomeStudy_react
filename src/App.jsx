import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


const scores = [ // table구조 == JSON구조
  {이름 : "John", 국어: 90, 영어: 90, 수학:80, 과학 : 90}, // {}한줄 == row, 하나 하나가 object == 객체임
  {이름 : "peter", 국어: 90, 영어: 90, 수학:80, 과학 : 90},
  {이름 : "susan", 국어: 90, 영어: 90, 수학:80, 과학 : 90},
  {이름 : "Sue", 국어: 90, 영어: 90, 수학:80, 과학 : 90}
]

// JS문법 테이블구조를 표현하는 방법
// {scores[0]['수학']} OR {scores[0].수학}
// table구조 = list, list접근하는 법 => 숫자 ==> scores[0]으로 접근
// object접근 하는법 => 키 값 ==> ['수학'] or .수학 으로 접근

//구 시대적 맵핑 작업 -> 지금은 사용 안함, map()함수로 대체 하면됨
// let number = [0,1,2,3]
// let newScores = []
// for(let i =0; i<number.length; i++){
//   newScores.push(number[i]*2)
// }

// 지금은 map사용 아래 함수 참고!!
function App() {

  return ( 
   
    <table> {/* React JSX에서 {} 는JavaScript 코드를 넣는 영역입니다. */}
     
      <tr>
        <th>이름</th>
        <th>국어</th>
        <th>영어</th>
        <th>수학</th>
        <th>과학</th>
      </tr>
      {/* map()함수를 이용해서 코드를 효과적으로 줄임 */}
      {[0,1,2,3].map(idx=> (
      <tr>            
        <td>{scores[idx].이름}</td>
        <td>{scores[idx].국어}</td>
        <td>{scores[idx].영어}</td>
        <td>{scores[idx].수학}</td>
        <td>{scores[idx].과학}</td>  
      </tr>
      ))
    }
    </table>
  )
}

export default App