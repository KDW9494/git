import Header from './header.js';
import Main from './main.js';
import React, { useState } from "react";
function Article(props){
  return(
    <div>{props.id}입니다.</div>
  )
}

// 래퍼
function App() {
  let content;
  const [mode, setMode] = useState(1);
  const cates = [
  {
    id: 1,
    cate: '회사소개'
  },
  {
    id: 2,
    cate: '카테2'
  },
  {
    id: 3,
    cate: '카테3'
  }
  ]
  
  
  if(mode === 1){
    content = <Article id={mode}></Article>
  }else if(mode === 2){
    content = <Article id={mode}></Article>
  }else if(mode ===3){
    content = <Article id={mode}></Article>
  }
  return (
    <div className="App" data-is='dsd'>
      <Header cates={cates} onChangeMode={id=>{
        
        document.querySelector(".App").setAttribute("data-is","dsdsds");
        // let yes = document.querySelector(".App").getAttribute("data-is");
        document.querySelector(".App").classList.toggle("active");
        setMode(id);
        // alert(yes);
      }}></Header>
      <Main onChangeMode={()=>{
        
      }}></Main>
      {content}
    </div>
  );
}

export default App;
