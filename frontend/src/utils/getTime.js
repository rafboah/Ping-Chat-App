const padZero = (number) => {
    return number.toString().padStart(2,'0')
}

const getTime = (dateString) => {
    const date = new Date(dateString)
    let hours = padZero(date.getHours())
    const minutes = padZero(date.getMinutes())
    const am_pm = hours >= 12 ? 'PM' : 'AM'
    hours %= 12
    hours = hours ? padZero(hours) : '12' 
    return `${hours}:${minutes} ${am_pm}`
}

export default getTime