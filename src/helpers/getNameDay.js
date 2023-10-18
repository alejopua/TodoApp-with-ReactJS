export const getNameDay = (date) => {
    const numberDay = date.getDay()
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return weekDays[numberDay]
    }