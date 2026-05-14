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
      {
        Object.keys(scores[0]).map(key => (
      
        <th>{key}</th>
      
        ))
      }
      </tr>
      {
        scores.map(item => (
          <tr>
            {Object.values(item).map(value => (<td>{value}</td>))}
          </tr>
        ))
      }
      {/*
        [0,1,2,3].map(idx => (
      <tr>
        <td>{scores[idx].이름}</td> 
        <td>{scores[idx].국어}</td>
        <td>{scores[idx].영어}</td>
        <td>{scores[idx].수학}</td>
        <td>{scores[idx].과학}</td>  
      </tr>
        ))
      */}
      
    </table>
  )
}

export default App
