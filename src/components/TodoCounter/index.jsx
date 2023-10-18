import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';

function TodoCounter() {
    const { completedTodo, totalTodos } = useContext(TodoContext)

    return (
            <div className='w-full flex flex-col items-center justify-center text-black font-bold mt-0.5 mb-2'>
                <p>
                    Has completado <span>{completedTodo}</span> de <span>{totalTodos}</span> Tasks
                </p>
            </div>
    )
}

export { TodoCounter };