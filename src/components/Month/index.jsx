import { useContext } from "react"
import { getMonthTasks } from "../../helpers/getMonthTasks"
import { TodoContext } from "../../TodoContext"

function Month() {
    const { todos } = useContext(TodoContext)
    const monthsTasks = getMonthTasks(todos)

    return (
        <section className="w-full rounded-md overflow-scroll mt-1">
            {
                monthsTasks.map((item) => (
                    <div 
                        key={item.id}
                        className="border border-solid border-black rounded-md text-white bg-stone-600 p-2 text-left mb-2 flex justify-between gap-2">
                        <div className="bg-stone-800 p-1 rounded-md w-full max-w-[5.5rem] text-center h-auto flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center">
                                <span className="text-[2rem]">{item.month}</span>
                                <span style={{writingMode: 'vertical-lr'}} className="text-[0.7rem] font-medium">{item.year}</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-1 justify-end overflow-scroll">
                            {
                                item.tasks.map((task) => (
                                    <span
                                        key={task.id}
                                        className="styleTaskWeek"
                                    >{task.text}</span>
                                ))
                            }
                        </div>
                    </div>

                ))
            }
        </section>
    )
}

export { Month }
