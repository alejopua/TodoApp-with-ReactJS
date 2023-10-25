import { TodoCounter } from "../components/TodoCounter"
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodo } from "../components/CreateTodo";
import { TodoLoading } from "../components/TodoLoading";
import { TodoContext } from "../TodoContext";
import { Modal } from "../components/Modal";
import { FormModal } from "../components/FormModal";
import { Clock } from "../components/Clock";
import { About } from "../components/About";
import { Header } from "../components/Header";
import { Day } from "../components/Day";
import { Week } from "../components/Week";
import { Month } from "../components/Month";
import { Year } from "../components/Year";
import { useContext } from "react";


function AppUI() {
    const { error, loading, checkTodo, deleteTodo, openModal, tab, listTasksDay } = useContext(TodoContext)
    return (
        <main className=" h-screen w-full bg-[#eae0d5] flex flex-col font-roboto">
            <section className="h-full w-screen flex justify-center items-center">
            <div className="w-96 h-[42.5rem] box-border relative bg-[#00FFA0] p-3 flex flex-col items-center justify-start rounded-xl overflow-hidden border-[.5vmin] border-solid border-black shadowStyle" >
                <About />
                <Clock />
                <h1 className='font-bold text-[2.5rem] mb-0.5'>Your Tasks</h1>
                <Header />
                {
                    tab==='Day' && <>
                        <Day />
                        <TodoCounter />
                        <TodoSearch />
                        <div className='w-full h-[22.5rem] box-border mt-2 mb-2 flex'>
                            <TodoList>
                                {loading && <TodoLoading />}
                                {error && <p>Hubo un error...</p>}
                                {(!loading && listTasksDay.length === 0) && <p>¡Crea tu primer ToDo!</p>}
                                {listTasksDay.map((todo) => (
                                    <TodoItem
                                    key={todo.text}
                                    text={todo.text}
                                    completed={todo.completed}
                                    checkTodo={() => checkTodo(todo.text)}
                                    onDelete={() => deleteTodo(todo.text)}
                                    />
                                    ))}
                            </TodoList>
                        </div>
                        <CreateTodo />
                    </>
                }
                {
                    tab === 'Week' && <Week />
                }
                {
                    tab === 'Month' && <Month />
                }
                {
                    tab === 'Year' && <Year />
                }

                {openModal && (
                    <Modal>
                        <FormModal />
                    </Modal>
                )}

            </div>
            </section>
        </main>
    )
}

export { AppUI }