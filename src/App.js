import logo from './logo.svg';
import './App.css';

function TestOne() {
  return(
    <div style={{ width: "300px", height: "100px", background: "skyblue" }}>
      1번째 컴포넌트 입니다.
    </div>
  )
}

function TestTwo() {
  return(
    <div style={{ width: "300px", height: "100px", background: "Khaki" }}>
      2번째 컴포넌트 입니다.
    </div>
  )
}

function Select() {
  return(
    <div>
      <input type="button" value="컴포넌트 변경" />
      <TestOne />
      <TestTwo />
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
