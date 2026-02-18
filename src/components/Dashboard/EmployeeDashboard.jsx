import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../Tasklist/TaskList'
const EmployeeDashboard = (props) => {
  
  return (
    <div className='bg-[#1C1C1C] h-screen'>
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNumber />
        <div className='px-10 h-screen'>
            <TaskList data = {props.data} />
        </div>
    </div>
  )
}

export default EmployeeDashboard
