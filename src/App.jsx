import { useState } from 'react'
import './App.css'

const scores = [ 
  {이름 : "John", 국어: 90, 영어: 90, 수학:80, 과학 : 90}, // {}한줄 == row, 하나 하나가 object == 객체임
  {이름 : "peter", 국어: 90, 영어: 90, 수학:80, 과학 : 90},
  {이름 : "susan", 국어: 90, 영어: 90, 수학:80, 과학 : 90},
  {이름 : "Sue", 국어: 90, 영어: 90, 수학:80, 과학 : 90}
]

function App() {
  return ( 
    <table> 
      <tr>
        <th>이름</th>
        <th>국어</th>
        <th>영어</th>
        <th>수학</th>
        <th>과학</th>
      </tr>
      <tr>
        <td>{scores[0].이름}</td> 
        <td>{scores[0].국어}</td>
        <td>{scores[0].영어}</td>
        <td>{scores[0].수학}</td>
        <td>{scores[0].과학}</td>  
      </tr>
      <tr>
        <td>{scores[1].이름}</td>
        <td>{scores[1].국어}</td>
        <td>{scores[1].영어}</td>
        <td>{scores[1].수학}</td>
        <td>{scores[1].과학}</td> 
      </tr>
      <tr>
        <td>{scores[2].이름}</td>
        <td>{scores[2].국어}</td>
        <td>{scores[2].영어}</td>
        <td>{scores[2].수학}</td>
        <td>{scores[2].과학}</td> 
      </tr>
      <tr>
        <td>{scores[3].이름}</td>
        <td>{scores[3].국어}</td>
        <td>{scores[3].영어}</td>
        <td>{scores[3].수학}</td>
        <td>{scores[3].과학}</td> 
      </tr>
    </table>
  )
}

export default App
