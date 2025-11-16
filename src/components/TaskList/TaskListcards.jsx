import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskListcards = ({data}) => {
  return (
    <div id='TaskListcards' className=' overflow-x-auto flex items-center justify-start gap-10 flex-nowrap  h-[55%] py-5 w-full mt-10'>
      {/* {data.tasks.map((elem)=>{
        return (
          <div key={elem.id}>
            {elem.status === 'new' && <NewTask task={elem} />}
            {elem.status === 'accepted' && <AcceptTask task={elem} />}
            {elem.status === 'completed' && <CompleteTask task={elem} />}
            {elem.status === 'failed' && <FailedTask task={elem} />}
          </div>
        )
      })} */}
      <NewTask />
      <AcceptTask />
      <CompleteTask />
      <FailedTask />


    </div>
  )
}

export default TaskListcards