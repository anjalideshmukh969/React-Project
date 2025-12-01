import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskListcards = ({ data }) => {
  if (!data || !data.tasks || data.tasks.length === 0) {
    return <div className="text-center w-full py-10">No tasks found</div>
  }

  return (
    <div id='TaskListcards' className='overflow-x-auto flex items-center justify-start gap-10 flex-nowrap h-[55%] py-5 w-full mt-10'>
      {data.tasks.map((elem, idx) => (
        <React.Fragment key={idx}>
          {elem.active && <AcceptTask data={elem} />}
          {elem.newTask && <NewTask data={elem} />}
          {elem.completed && <CompleteTask data={elem} />}
          {elem.failed && <FailedTask data={elem} />}
        </React.Fragment>
      ))}

    </div>
  )
}

export default TaskListcards
