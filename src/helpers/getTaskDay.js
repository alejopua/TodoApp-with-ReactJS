export const getTaskDay = (date, tasks) => {
    const newTaskDate = tasks.filter(task => new Date(task.date).setHours(0,0,0,0) === date.setHours(0,0,0,0))
    return newTaskDate
}