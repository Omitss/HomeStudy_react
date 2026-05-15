import { useState } from 'react'
import './App.css'

const style = {
  width: "500px", /*가로*/
  height: "300px", /*세로*/
  display: "flex", /*Flex 컨테이너로 만듭니다. 이제부터 내부 자식 요소들을 유연하게 정렬가능*/
  flexDirection: "column", /*정렬방향 정하기 : col = 세로정렬*/
  justifyContent: "center", /*자식요소 가로축 배치 : center정렬*/
  alignItems: "center"/*자식요소 세로축 배치 : center정렬*/
}



function App() {
  const handleChange = (event) =>{
    console.log(event.target.name) //event.target 이란? 이벤트가 걸리고 있는 태그
  }
  return ( 

    // 현 화면 상태
    // 표출은 되나 입력이 안되는 상태
     <form>
      <div>이름: 
        <input 
          type="text" 
          name="이름" 
          value=""
          onChange={handleChange}
          />
      </div>
      <div>국어: 
        <input 
          type="number" 
          name="국어" 
          value="" 
          onChange={handleChange}
        />
      </div>
      <div>영어: 
        <input 
          type="number" 
          name="영어" 
          value="" 
          onChange={handleChange}
        />
      </div>
      <div>수학: 
        <input 
          type="number" 
          name="수학" 
          value="" 
          onChange={handleChange}
          />
      </div>
      <div>과학: 
        <input 
          type="number" 
          name="과학" 
          value="" 
          onChange={handleChange}
        />
        </div>
      <button>제출</button>
    </form>

  )
}

export default App
