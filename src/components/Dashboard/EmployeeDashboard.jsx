import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../Tasklist/TaskList'
const EmployeeDashboard = () => {
  return (
    <div className='bg-[#1C1C1C] h-screen'>
        <Header />
        <TaskListNumber />
        <div className='px-10 h-screen'>
            <TaskList />
        </div>
    </div>
  )
}

export default EmployeeDashboard
