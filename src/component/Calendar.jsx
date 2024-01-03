import React, { useEffect, useState } from 'react'

const Calendar = () => {
    const DATE = new Date()
    const SEVEN_DAYS = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']

    const [currDate, setCurrDate] = useState(DATE.getDate())
    const [currMonth, setCurrMonth] = useState(DATE.getMonth())
    const [currYear, setCurrYear] = useState(DATE.getFullYear())
    const [totalDays, setTotalDays] = useState((new Date(DATE.getFullYear(), DATE.getMonth() + 1, 0)).getDate())
    const [calendar, setCalendar] = useState([])


    useEffect(() => {
        // console.log(DATE.toLocaleString('default', {date: 'long'}))
        let tempCal = []
        for (let i = 1; i <= totalDays; i++) {
            const date = new Date(currYear, currMonth, i)

            if (i === 1 && date.getDay() !== 0) {
                for (let j = 1; j < date.getDay(); j++) {
                    tempCal.push('')
                }
            }
            tempCal.push(i)

        }
        setCalendar([...tempCal])
    }, [currMonth])
    const monthToString = (m) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December']
        return months[m]
    }
    return (
        <div className='calendar '>
            <div className="flex items-center justify-between">\
                <span>{monthToString(currMonth)} {currYear}</span>
                <span onClick={()=>setCurrMonth((prev)=> {
                    return prev+1
                })}>Next</span>
            </div>
            <div className="grid grid-cols-7 gap-y-10">
            {SEVEN_DAYS.length > 0 && SEVEN_DAYS.map((c, i) => {
                    return <span key={i}>{c}</span>
                })}
                {calendar.length > 0 && calendar.map((c, i) => {
                    let clas = ''
                    if (currDate === c) {
                        clas = 'bg-black text-white'
                    }
                    return <span className={`hover:bg-black hover:text-white ${currDate === c && 'bg-black text-white'}`} key={i}>{c}</span>
                })}
            </div>
        </div>
    )
}

export default Calendar