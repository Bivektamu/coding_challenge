import React, { useEffect, useState, useRef } from 'react'

const Calendar = () => {
    const DATE = new Date()
    const SEVEN_DAYS = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']

    const [month, setMonth] = useState(DATE.getMonth())
    const [year, setYear] = useState(DATE.getFullYear())
    const [calendar, setCalendar] = useState([])

    // useEffect(() => {
    //     // console.log(DATE.toLocaleString('default', {date: 'long'}))
    //     setupCalendar()
    //     pastMonth.current = month
    //     console.log('b')
    // }, [])


    useEffect(() => {
        if (month !== null) {
            console.log(month)
            setupCalendar()
        }
    }, [month, year])

    useEffect(() => {
        if (calendar.length > 0) {
            // console.log(calendar)
        }
    }, [calendar])


    function setupCalendar() {
        let tempCal = [], totalDays = (new Date(year, month + 1, 0)).getDate(), day = (new Date(year, month, 1)).getDay()


        day = (new Date(year, month, 1)).getDay()
        if (day !== 1) {
            const pastMonth = (new Date(year, month, 0)).getMonth()
            let pastYear = year
            if (pastMonth > 10) {
                pastYear -= 1
            }
            // if(pastMonth === )
            let pastMonthTotalDays = (new Date(year, month, 0)).getDate()
            console.log(pastMonthTotalDays)
            if (day === 0) {
                day = 7
            }
            for (let i = pastMonthTotalDays - (day - 2); i <= pastMonthTotalDays; i++) {
                tempCal.push({ y: pastYear, m: pastMonth, d: i })
            }
        }

        for (let i = 1; i <= totalDays; i++) {
            tempCal.push({ y: year, m: month, d: i })
        }



        day = (new Date(year, month, totalDays)).getDay()

        if (day !== 0) {
            const futureMonth = (month + 1)
            let futureYear = year
            for (let i = 1; i <= 7 - day; i++) {
                if (tempCal.length > 41) {
                    break
                }

                // tempCal.push(i)
                tempCal.push({ y: futureYear, m: futureMonth, d: i })


            }
        }


        setCalendar([...tempCal])
    }


    const monthToString = (m) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December']
        return months[m]
    }

    const nextClickHandler = () => {
        setMonth((prev) => {

            if (prev === 11) {
                setYear((prev) => {
                    return prev + 1
                })
                return 0
            }
            return prev + 1
        })
    }

    const prevClickHandler = () => {
        setMonth((prev) => {
            if (prev === 0) {
                setYear((prev) => {
                    return prev - 1
                })
                return 11
            }
            return prev - 1
        })
    }

    return (
        <div className='calendar  bg-violet-50 h-screen flex  justify-center items-center'>
            <div className="max-w-[669px] w-full bg-gradient-to-br from-white to-violet-50 rounded-[20px] shadow px-6 py-10 pr-4" >
                <div className="flex items-center justify-between mb-10">
                    <h2 className='text-gray-800 text-4xl font-bold'>{monthToString(month)} {year}</h2>
                    <div className='flex justify-start '>
                        <span className='cursor-pointer' onClick={() => prevClickHandler()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                <path d="M27.5 33L16.5 22L27.5 11" stroke="#202842" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        <span className='cursor-pointer' onClick={() => nextClickHandler()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                <path d="M16.5 11L27.5 22L16.5 33" stroke="#202842" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-y-10">
                    {SEVEN_DAYS.length > 0 && SEVEN_DAYS.map((c, i) => {
                        return <span className='text-gray-800 text-lg font-bold' key={i}>{c}</span>
                    })}
                    {calendar.length > 0 && calendar.map((c, i) => {
                        let clas = "text-slate-900"


                        if (DATE.getFullYear() === c.y && DATE.getMonth() === c.m && DATE.getDate() === c.d) {
                            clas = "text-white bg-violet-600 rounded-full text-white"
                        }
                        else if (year !== c.y || month !== c.m) {
                            clas += "text-slate-900 opacity-40"
                        }


                        return <span className={`hover:bg-black hover:text-white font-normal  text-center ${clas && clas}`} key={i}>{c.d}</span>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Calendar