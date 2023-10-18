import { createContext, useState } from "react";
import { UseLocalStorage } from "../hooks/UseLocalStorage/UseLocalStorage";
import { getDate } from "../helpers/getDate";
import { getTaskDay } from "../helpers/getTaskDay";

const TodoContext = createContext()

function TodoProvider({ children }) {
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error
    } = UseLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = useState(''); 
    const [openModal, setOpenModal] = useState(false); 
    const [tab, setTab] = useState('Day');
    const [dateM, setDateM] = useState(new Date());

    const searchedTodos = todos.filter(
        todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        }
    );

    const listTasksDay = getTaskDay(dateM ,searchedTodos)    
    const completedTodo = listTasksDay.filter((todo) => !!todo.completed).length;
    const totalTodos = listTasksDay.length;

    const addTodo = (text) => {
        const newTodos = [...todos]

        const dataArrayText = newTodos.map((todo) => todo.text )

        !dataArrayText.includes(text) 
            ? newTodos.push({ 
                id: crypto.randomUUID(),
                date: getDate(dateM),
                text: text,
                completed: false
            })
            : null

        saveTodos(newTodos)
    }
    
    const checkTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text == text)
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        return saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text == text)
        newTodos.splice(todoIndex, 1)
        return saveTodos(newTodos)
    }

    return (
        <TodoContext.Provider value={{
                todos,
                loading,
                error,
                totalTodos,
                completedTodo,
                searchValue,
                setSearchValue,
                searchedTodos,
                checkTodo,
                deleteTodo,
                openModal,
                setOpenModal,
                addTodo,
                tab,
                setTab,
                dateM,
                setDateM,
                listTasksDay
            }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }

