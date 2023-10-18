export const getMonthName = (date) => {
    const monthNames = [
        "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];
    return monthNames[date.getMonth()]
}