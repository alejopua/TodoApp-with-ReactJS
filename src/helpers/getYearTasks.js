export const getYearTasks = (tasks) => {
    const years = [
        "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031",
    ]

    let newYears = years.map(year => {
        return {
            id: crypto.randomUUID(),
            year: year,
            tasks: []
        }
    })

    newYears.forEach(years => {
        years.tasks = tasks.filter(task => {
            return new Date(task.date).getFullYear() === Number(years.year)
        })
    });
    return newYears
}