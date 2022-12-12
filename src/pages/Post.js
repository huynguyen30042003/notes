import React from "react";
import { useState,useRef,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Noted from "./Noted.js"



function Post() {

  const inputRef= useRef();
  const tabRef = useRef();
  const [newList,setNewList] = useState({})
  const [count,setCount] = useState(0)//
  const [list,setList] = useState(JSON.parse(localStorage.getItem('list.note')) ??[])//
  // const [list,setList] = useState([])//

  const [value,setValue] = useState()//
  const [valueContent,setValueContent] = useState()//
  useEffect(()=>{
    localStorage.setItem("list.note",JSON.stringify(list))
    // console.log(JSON.parse(localStorage.getItem("list.note")));
  },[list]) 
  const creating=()=>{
    if (value==''){
      alert("bạn cần nhập tiêu đề")
      inputRef.current.focus();
    }else if(valueContent==''){
      alert("bạn cần nhập nội dung")
      tabRef.current.focus();
    }else{
    setCount(+count+1)
    setList([...list,newList])
    console.log(list);
    inputRef.current.focus();
    setValue('')
    setValueContent('')
    }
  }
  // const deleteNote=(index)=>{
  //   const updateList =list.filter((value,id)=> id!=index)
  //   setList(updateList)
  // }
  // const noteStart=(index)=>{
  //   console.log(index);
  //   const updateList =list.map((post,id)=>{
  //     if( post.id==index){
  //       return {
  //         ...post,
  //         star: !post.star
  //       }
  //     } else {
  //       return {
  //         ...post
  //       }
  //     }
  //   })
  //   setList(updateList)
  //   console.log(list);
  // }
  const enterTittle=(e)=>{
    // console.log(e.key);
    if (e.code=='enter'){
      tabRef.current.focus();
    }
  }
  return (
    <>
    <div className="screen">
      <div className='table-input'>
        <h1>NOTE</h1>
        <div className="inputBox">
        <input type="text" required="required" 
        // placeholder="Enter title..." 
        onChange={(e)=>setNewList({
          ...newList,tittle:e.target.value,star:false,id:count
        })}
        onChangeCapture={(e)=>setValue(e.target.value)}
        ref={inputRef}
        value={value}
        onKeyDown={(e)=>enterTittle(e)}
        />
        <span>Title</span>
        </div>
        
        {/* <input  type="text" className='input-title border-blue-500 rounded-lg w-3/4 py-1 px-4 outline-green-500' placeholder="Enter title..." */}
        
        <div className='inputBox'>
        <textarea  type="text" className='border-[2px] border-blue-500 rounded-lg w-3/4 py-42 px-4 outline-green-500' 
        onChange={(e)=>setNewList({
          ...newList,content:e.target.value,
        })}
        onChangeCapture={(e)=>setValueContent(e.target.value)}
        // ref={tabRef}
        value={valueContent}
        ></textarea>
        <span>Content</span>
        </div>
        
        <button className='button-create'
        onClick={creating}
        >
          <Link to="/noted"></Link>Create</button>
      </div>
      <div className="link">
        <Link to="/noted">Note Page</Link>
      </div>
      </div>


    </>
  )
}

export default Post;
