import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'


// 마운트 됐을 때
// 마운트는 컴포넌트가 첫 렌더링 시에만 실행되는 이벤트입니다.
// 클래스 컴포넌트에서는 componentDidMount() 로 사용하며
// 함수 컴포넌트에서는 useEffect를 사용해서 구현할 수 있습니다.


// 언마운트 됐을 때 (컴포넌트가 제거 됐을 때)
// 마운트의 반대 개념으로 컴포넌트가 사라지는 경우 이벤트가 발생합니다.
// 클래스 컴포넌트에서는 componentWillUnmount() 를 사용하며 
// 함수 컴포넌트에서는 useEffect 내 함수에서 return 부분이 해당 기능을 담당합니다.




function TestOne() {

  useEffect(() => {
    console.log("1번째 컴포넌트 마운트 완료")

    return () => {
      console.log("1번째 컴포넌트 언마운트")
    }

  },[]);

  return(
    <div style={{ width: "300px", height: "100px", background: "skyblue" }}>
      1번째 컴포넌트 입니다.
    </div>
  )
}

function TestTwo() {

  useEffect(() => {
    console.log("2번째 컴포넌트 마운트 완료")

    return () => {
      console.log("2번째 컴포넌트 언마운트")
    }

  },[]);

  return(
    <div style={{ width: "300px", height: "100px", background: "Khaki" }}>
      2번째 컴포넌트 입니다.
    </div>
  )
}

function Select() {

  const [isToggle, setToggle] = useState(false);

  return(
    <div>
      <input type="button" value="컴포넌트 변경" onClick={() => setToggle(!isToggle)}/>
        {isToggle === false ? <TestOne /> : <TestTwo />}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Select />
    </div>
  );
}

export default App;
