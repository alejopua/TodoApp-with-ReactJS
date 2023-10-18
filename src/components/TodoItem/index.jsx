import { TodoIcon } from '../TodoIcons'

function TodoItem(props) {
  const { completed, checkTodo, onDelete } = props

  return (
    <li className="w-full h-9 text-white bg-[#57534f] rounded-xl flex items-center mb-2 py-2.5 px-3 font-bold">
      <TodoIcon
        type={completed ? 'check' : 'checkNone'}
        size="1.1rem"
        checked
        className={`cursor-pointer mr-1 ${completed ? 'text-green-400' : 'text-white'}`}
        onClick={checkTodo}
      />
      <p 
        className={`${completed ? 'line-through' : 'none'}`}
      >
        {props.text}
      </p>
      <TodoIcon
        type="delete"
        size="1.4rem"
        className="cursor-pointer ml-auto text-red-300" 
        onClick={onDelete}
      />
    </li>
  )
}

export { TodoItem }
