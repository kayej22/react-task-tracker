import Task from './Task'

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task, onDelete) => (
        <Task
          key={tasks.id}
          task={task}
          onDelete={onDelete}
        />
      ))}
    </>
  )
}

export default Tasks
