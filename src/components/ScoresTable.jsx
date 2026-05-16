import React from 'react'

// const scores = [ 
//   {이름 : "John", 국어: 90, 영어: 90, 수학:80, 과학 : 90}, 
//   {이름 : "peter", 국어: 90, 영어: 90, 수학:80, 과학 : 90},
//   {이름 : "susan", 국어: 90, 영어: 90, 수학:80, 과학 : 90},
//   {이름 : "Sue", 국어: 90, 영어: 90, 수학:80, 과학 : 90}
// ]

function ScoresTable({scoresa}) {
  return (
    <div>
      <table>
      <tr>
        {
          Object.keys(scoresa[0]).map( key=>(
              <th>{key}</th>
          ))
        }      
      </tr>      

      {scoresa.map(item=> (
      <tr>            
        {
        Object.values(item).map(
          (value) => (<td>{value}</td>)
        )
        }
      </tr>
      ))
    }
    </table>
    </div>
  )
}

export default ScoresTable