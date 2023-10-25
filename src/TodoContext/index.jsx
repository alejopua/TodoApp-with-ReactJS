import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getDate } from "../helpers/getDate";
import { getTaskDay } from "../helpers/getTaskDay";

const TodoContext = createContext()

function TodoProvider({ children }) {
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error
    } = useLocalStorage('TODOS_V1', []);

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

    const getNewTodos = (text) => {
        const newTodos = [...todos]
        const indexTodo = newTodos.findIndex((todo) => todo.text == text)
        const todosTexts = newTodos.map((todo) => todo.text )
        return {
            indexTodo,
            newTodos,
            todosTexts
        }
    }

    const addTodo = (text) => {
        const { newTodos, todosTexts } = getNewTodos(text)
        !todosTexts.includes(text) 
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
        const { indexTodo, newTodos } = getNewTodos(text)
        newTodos[indexTodo].completed = !newTodos[indexTodo].completed;
        return saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const { indexTodo, newTodos } = getNewTodos(text)
        newTodos.splice(indexTodo, 1)
        return saveTodos(newTodos)
    }

    return (
        <TodoContext.Provider value={{
                addTodo,
                checkTodo,
                completedTodo,
                dateM,
                deleteTodo,
                error,
                listTasksDay,
                loading,
                openModal,
                searchValue,
                searchedTodos,
                setDateM,
                setOpenModal,
                setSearchValue,
                setTab,
                tab,
                todos,
                totalTodos,
            }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }

