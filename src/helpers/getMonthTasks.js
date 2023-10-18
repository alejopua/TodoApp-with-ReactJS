
export const getMonthTasks = (tasks) => {
    const newDate = new Date();
    const monthNames = [
        "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ]

    let newMonths = monthNames.map(month => {
        return {
            id: crypto.randomUUID(),
            month: month,
            year: newDate.getFullYear(),
            tasks: []
        }
    })

    newMonths.forEach(months => {
        months.tasks = tasks.filter(task => {
            return new Date(task.date).getMonth() === monthNames.indexOf(months.month)
        })
    });

    return newMonths
}