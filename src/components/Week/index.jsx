import { useContext } from "react"
import { TodoContext } from "../../TodoContext"
import { getWeekTasks } from "../../helpers/getWeekTasks"

function Week() {
    const { todos, checkTodo } = useContext(TodoContext)
    const weekTasks = getWeekTasks(todos)
    return (
        <section className="w-full mt-1">
            {
                weekTasks.map((item) => (
                    <div
                        key={item.id}  
                        className="border border-solid border-black rounded-md text-white bg-stone-600 p-2 text-left mb-2 flex justify-between gap-2">
                        <div className="bg-stone-800 p-1 rounded-md w-full max-w-[5.313rem] text-center h-fit flex flex-col justify-center items-center">
                            <span className="text-[0.9rem]">{item.day}</span>
                            <div className="flex justify-center items-center">
                                <span className="text-[2rem]">{item.numDay}</span>
                                <span style={{writingMode: 'vertical-lr'}} className="text-[0.7rem] font-medium">{item.month}</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-1 justify-end">
                            {item.tasks.map((task) => (
                                <span
                                    key={task.id}
                                    className={`cursor-pointer styleTaskWeek ${task.completed ? 'bg-[#4bde80] text-black' : 'bg-stone-500'}`}
                                    onClick={() => checkTodo(task.text)}
                                >{task.text}</span>
                            ))}
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export { Week }
