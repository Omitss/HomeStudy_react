import { useState } from 'react'
import './App.css'
import ScoresTable from './components/ScoresTable'

const style = {
  width: "500px", /*가로*/
  height: "300px", /*세로*/
  display: "flex", /*Flex 컨테이너로 만듭니다. 이제부터 내부 자식 요소들을 유연하게 정렬가능*/
  flexDirection: "column", /*정렬방향 정하기 : col = 세로정렬*/
  justifyContent: "center", /*자식요소 가로축 배치 : center정렬*/
  alignItems: "center"/*자식요소 세로축 배치 : center정렬*/
}

const initalscores = [ // 초기 score테이블 == 고정된 값 -> 따라서 App()밖에선언.
  {이름 : "John", 국어: 90, 영어: 90, 수학:80, 과학 : 90}, 
  {이름 : "peter", 국어: 90, 영어: 90, 수학:80, 과학 : 90},
  {이름 : "susan", 국어: 90, 영어: 90, 수학:80, 과학 : 90},
  {이름 : "Sue", 국어: 90, 영어: 90, 수학:80, 과학 : 90}
]

const initinfo = { // 초기 정보 == 고정된 값 -> 따라서 App()밖에선언.
  이름 : "",
  국어 : null,
  영어 : null,
  수학 : null,
  과학 : null, 
}


// function App() {} 안에서의 const선언과 밖에서 const선언은 무슨 차이점
// 함수 밖 (전역/모듈 스코프): 파일 전체에서 접근할 수 있습니다. 심지어 export를 붙이면 다른 파일에서도 가져와 쓸 수 있습니다.
// 함수 안 (지역/함수 스코프): 오직 App() 함수 내부에서만 사용할 수 있습니다. 함수 외부에서 접근하려고 하면 에러가 발생합니다.

// 함수 밖 - 컴포넌트의 상태와 무관한 고정된 상수, 변경되지 않는 설정값, 공통 스타일 객체 - ex) API 주소, 고정 디렉토리 경로, 환경 변수, 고정 문구 등
// 함수 안 - 컴포넌트의 state나 props를 이용해 계산해야 하는 값, 해당 컴포넌트만 일회성으로 쓰는 가벼운 변수, - ex) 유저 입력값에 따라 필터링된 리스트, 조건부 스타일 등

function App() {
  const [info, setInfo] = useState(initinfo)
  const [scores, setScores] = useState(initalscores)
  // useState()함수를 통해서 초기값인 initinfo, initalscores에 있는 값들로 
  //const형태의 info, scores 변수를 선언하고
  //setInfo(), setScores()함수를 통해서 info, scores 변수값들을 변경하겠다.


  const handleChange = (event) =>{
    const {name, value} = event.target;
    // event.target의 의미: "지금 이 이벤트(타이핑)가 일어난 바로 그 HTML 태그(요소)"
    // 현 코드 상으로 evant.target이 걸리는 태그는 input태그
    // input 태그 안에 type, name, value, onChange등의 요소 들이 잇는데 
    // 그 요소들 중에서 name과 value만 새로 꺼내서 const형태의 똑같은 이름으로 선언 하겠다. 
    // 왜 가능? 함수내에 잇는 지역변수잖아
    setInfo((prev) =>(
      {...prev, [name]:value}
      // 사용자가 '국어'점수 창에 '90'을 타이핑 한다고 하면
      // const {name, value} = event.target; 문장에 의해서 name, value라는 2가지의 변수가 생성됨
      // name, value안에 있는 변수의 값들을 가져와서
      // ...prev의미 : A->A'으로 변한 부분을 교체 할건데 A데이터는 그대로 가져오고 A'으로 변한 데이터만 고쳐라
      // {}이유는 최종 리턴 값은 객체{}이기 때문에
    ))
  }

    const handleSubmit = (event) => {
      event.preventDefault(); //`onsubmit`이 발생하면 브라우저는 기본적으로 페이지를 새로고침(Refresh)하려고 합니다. 리액트 같은 현대 웹 개발에서는 이를 막기 위해 `event.preventDefault()`라는 함수를 함께 사용하는 것이 필수 공식처럼 쓰입니다.
      setScores((prev)=>(
        [...prev, info]
        //...prev의미 : A->A'으로 변한 부분을 교체 할건데 A데이터는 그대로 가져오고 A'으로 변한 데이터만 고쳐라
        // []이유 : 최종 리턴값이 리스트 [] 이기 때문
      ))
    }



  // function App(){}에 대해서 
  // retun 앞 문장 : 객체, 데이터, 로직을 관리하는 장소
  // retun 안 문장화면에 표출되는 return ( ... ) 장소 (View)
  return ( // JSX문법 구간
    <>

    <ScoresTable scoresa = {scores}/>
    {/*cf)원래는 scores 통일하는데 이해를 돕기 위해 scoresa로함 
    1. App.jsx에서 const [scores, setScores] = useState(...)를 만듭니다. (진짜 데이터 알맹이 이름은 scores)
    2. 자식에게 던질 때 <ScoresTable scoresa = {scores}/> 라고 던집니다. (데이터 길목의 이름표를 scoresa로 변경)

    3.ScoresTable.jsx에서 function ScoresTable({scoresa}) 로 받습니다. (이 함수 안에서는 이제 무조건 scoresa라는 이름으로만 접근 가능)  
    4. 함수 내부에서도 scoresa[0], scoresa.map 처럼 scoresa라는 이름을 사용해 표를 그립니다.

    <ScoresTable scoresa = {scores}/>분석 
    "ScoresTable scoresa =" 의미 : ScoresTable.jsx에 던질 데이터 변수인 scoresa라는 오브젝트를 생성
    "{scores}" 의미 : const [scores, setScores] = useState(intialscores)에서 선언한 scores 변수를 사용하겠다.
      근데 이 변수 구조? Object구조임
      그래서 retrun값도 object구조인거임.
    */}

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
