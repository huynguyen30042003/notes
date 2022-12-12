import React from "react";
import { useState,useRef,useEffect } from "react";

import { Link } from "react-router-dom";

function Noted() {
  const [list,setList] = useState(JSON.parse(localStorage.getItem('list.note')) ??[])
  useEffect(()=>{
    localStorage.setItem("list.note",JSON.stringify(list))
    console.log(JSON.parse(localStorage.getItem("list.note")));
  },[list]) 
    const deleteNote=(index)=>{
    const updateList =list.filter((value,id)=> id!=index)
    setList(updateList)
  }
  const noteStart=(index)=>{
    console.log(index);
    const updateList =list.map((post,id)=>{
      if( post.id==index){
        return {
          ...post,
          star: !post.star
        }
      } else {
        return {
          ...post
        }
      }
    })
    setList(updateList)
    console.log(list);
  }
  return (
    <>
    <div className="screen">
    <div className="link-back">
        <Link to="/">Back Page</Link>
      </div>
        <div className='output'>
        {
          list.map((task,index) => (
            <div className='member'>
            <a className={(task.star==true)?'output-a output-tittle':'output-a output-tittle'}>
              {task.tittle} 
              
            </a>
            <a className={(task.star==true)?'output-a output-content bg-yellow':'output-a output-content'}>
              {task.content}
              
            </a>
            <div className='box'>
            <i className="fa-regular fa-trash-can"
            onClick={()=>deleteNote(index)}
            ></i>
            <i className="fa-regular fa-star"
            onClick={()=>noteStart(task.id)}
            ></i>
            </div>
          </div>  
          )
          )
        }
      </div>
      </div>
    </>
  );
}

export default Noted;
