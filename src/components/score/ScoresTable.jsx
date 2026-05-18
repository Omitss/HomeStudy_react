import React from 'react'



function ScoresTable({scores}) { // {scores}의미 : scores의 키값과 vlaue값이 같음
  return (
    <div>
      <table>
     
      <tr>
        {        
          Object.keys(scores[0]).map( key=>(
              <th>{key}</th>
          ))
        }      
      </tr>            
      {scores.map(item=> (
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
