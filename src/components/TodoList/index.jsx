function TodoList({ children }) {
  return (
    <ul className='w-full rounded-md mt-2 list-none overflow-scroll'>
      {children}
    </ul>
  )
}

export { TodoList }