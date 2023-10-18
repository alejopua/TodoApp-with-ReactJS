import { useContext, useState } from "react"
import { TodoContext } from "../../TodoContext"

function CreateTodo() {
  const { addTodo } = useContext(TodoContext)
  const [newTodoValue, setNewTodoValue] = useState('')
  const onSubmit = (e) =>{
    e.preventDefault()
    newTodoValue !== '' ? addTodo(newTodoValue) : null
    setNewTodoValue('')
  }

  return (
    <div className="w-full flex flex-row gap-1 ">
      <form onSubmit={onSubmit} >
        <input 
          className='w-[17.56rem] h-[1.88rem] rounded-md border-2 border-solid border-[#323232] bg-white shadowStyle text-[0.94rem] font-semibold text-[#323232] py-4 px-2.5 outline-none Description' 
          type="text" 
          placeholder='Create New Task'
          value={newTodoValue}
          onChange={(e) => setNewTodoValue(e.target.value)}
        />
      </form>

      <div className='flex flex-col justify-center item-center gap-1 ml-1'>
        <button 
          className='bg-[#664eff] styleButton hover:bg-[#8674fd]' 
          type="button"
          onClick={onSubmit}
        >add</button>

        <button 
          className='bg-[#ff574e] styleButton hover:bg-[#fe7972]' 
          type="button"
          onClick={() => setNewTodoValue('')}
        >cancel</button>
      </div>
    </div>

  )
}

export { CreateTodo };