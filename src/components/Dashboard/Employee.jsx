import React from 'react'
import Header from '../others/Header';
import TaskList from "../others/TaskList";
import TaskListcards from "../TaskList/TaskListcards";

const Employee = ({data}) => {
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen '>
            <Header data={data}/>
            <TaskList data={data}/>
            <TaskListcards data={data}/>
    </div>
  )
}

export default Employee;