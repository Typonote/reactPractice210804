import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

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
