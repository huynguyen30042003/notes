import { Route, Routes } from 'react-router';
import Post from "./pages/Post.js"
import Noted from "./pages/Noted.js"
import './App.css';
import {useRef,useEffect, useState } from 'react'


function App() {
//   const inputRef= useRef();
//   const tabRef = useRef();
//   const [newList,setNewList] = useState({})

//   const [count,setCount] = useState(0)
//   const [list,setList] = useState(JSON.parse(localStorage.getItem('list.note')) ??[])
//   const [value,setValue] = useState()
//   const [valueContent,setValueContent] = useState()
//   useEffect(()=>{
//     localStorage.setItem("list.note",JSON.stringify(list))
//     console.log(JSON.parse(localStorage.getItem("list.note")));
//   },[list]) 
//   const creating=()=>{
//     if (value==''){
//       alert("bạn cần nhập tiêu đề")
//       inputRef.current.focus();
//     }else if(valueContent==''){
//       alert("bạn cần nhập nội dung")
//       tabRef.current.focus();
//     }else{
//       setCount(+count+1)
//     setList([...list,newList])
//     inputRef.current.focus();
//     setValue('')
//     setValueContent('')
//     }
//   }
//   const deleteNote=(index)=>{
//     const updateList =list.filter((value,id)=> id!=index)
//     setList(updateList)
//   }
//   const noteStart=(index)=>{
//     console.log(index);
//     const updateList =list.map((post,id)=>{
//       if( post.id==index){
//         return {
//           ...post,
//           star: !post.star
//         }
//       } else {
//         return {
//           ...post
//         }
//       }
//     })
//     setList(updateList)
//     console.log(list);
//   }
//   const enterTittle=(e)=>{
//     console.log(e.key);
//     if (e.code=='enter'){
//       tabRef.current.focus();
//     }
//   }
  return (
    <>
      <Routes>
        <Route path="/" element={<Post></Post>}></Route>
        <Route path="/post" element={<Post></Post>}></Route>
        <Route path="/noted" element={<Noted></Noted>}></Route>

      </Routes>
      {/* <Post ></Post> */}
      {/* <Noted 
      deleteNote={()=>deleteNote(index)}
      handleAdd={()=>handleAdd()}
      noteStart={()=>noteStart(task.id)}
      ></Noted> */}
      <div className="screen">
      {/* <Post></Post> */}
      {/* <Noted 
      list={list}
      deleteNote={()=>deleteNote(list.id)}
      noteStart={()=>noteStart(list.id)}
      ></Noted> */}




      {/* <div className='table-input'>
        <h1>NOTE</h1> 
        <input  type="text" className='input-title border-[2px] border-blue-500 rounded-lg w-3/4 py-1 px-4 outline-green-500' placeholder="Enter title..."
        onChange={(e)=>setNewList({
          ...newList,tittle:e.target.value,star:false,id:count
        })}
        onChangeCapture={(e)=>setValue(e.target.value)}
        ref={inputRef}
        value={value}
        onKeyDown={(e)=>enterTittle(e)}
        ></input>
        <textarea  type="text" className='border-[2px] border-blue-500 rounded-lg w-3/4 py-2 px-4 outline-green-500' placeholder="Enter content..."
        onChange={(e)=>setNewList({
          ...newList,content:e.target.value,
        })}
        onChangeCapture={(e)=>setValueContent(e.target.value)}
        ref={tabRef}
        value={valueContent}
        ></textarea>
        <button className='button-create'
        onClick={creating}
        >Create</button>
      </div> */}



      
      {/* <div className='output'>
        {
          list.map((task,index) => (
            <div className='member'>
            <a className={(task.star==true)?'output-a output-tittle bg-yellow':'output-a output-tittle'}>
              {task.tittle} 
            </a>
            <a className={(task.star==true)?'output-a output-content bg-yellow':'output-a output-content'}>
              {task.content}
            </a>
            <div className='box'>
            <i class="fa-regular fa-trash-can"
            onClick={()=>deleteNote(index)}
            ></i>
            <i class="fa-regular fa-star"
            onClick={()=>noteStart(task.id)}
            ></i>
            </div>
          </div>  
          ))
        }
      </div> */}
    </div>
    </>
  )
}
export default App;