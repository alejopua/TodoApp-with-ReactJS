import { getMonthName } from "./getMonthName";
import { getNameDay } from "./getNameDay";

export const getWeekTasks = (tasks) => {
    let weekDays = []
    let today = new Date()
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

    let dayOfWeek = today.getDay()
    let timeDay = today.getTime()
    let daysUntilMonday = (dayOfWeek === 0 ? 6 : dayOfWeek - 1)
    let weekStart = new Date(timeDay - daysUntilMonday * oneDay)

    for (let i = 0; i < 7; i++) {
        const newDate = new Date(weekStart.getTime() + i * oneDay)
        const day = {
            id: crypto.randomUUID(),
            date: newDate,
            day: getNameDay(newDate),
            month: getMonthName(newDate),
            numDay: newDate.getDate(),
            tasks: []
        }
        weekDays.push(day)
    }

    weekDays.forEach(weekDay => {
        weekDay.tasks = tasks.filter(task => {
            return new Date(weekDay.date).setHours(0, 0, 0, 0) === new Date(task.date).setHours(0, 0, 0, 0);
        });
    });

    // for (let j = 0; j < weekDays.length; j++) {
    //     for (let k = 0; k < tasks.length; k++) {
    //         const date1 = new Date(weekDays[j].date).setHours(0,0,0,0)
    //         const date2 = new Date(tasks[k].date).setHours(0,0,0,0)
    //         date1 === date2 ? weekDays[j].tasks.push(tasks[k]) : null
            
    //     }
    // }

    return weekDays
}