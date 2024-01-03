import React, { useEffect, useState } from "react";

const MultiSearch = (props) => {
    const [data, setData] = useState('')
    const [searchedList, setSearchedList] = useState([])
    const [timer, setTimer] = useState()
    const [dropDownList, setDropDownList] = useState([])

    useEffect(() => {
        if (!data || data === '') {
            setDropDownList([])
        }
    }, [data])

    const debounce = (callback, delay) => {

        return (...args) => {
            if (timer) {
                clearTimeout(timer)
                setTimer(null)
            }
            setTimer(setTimeout(() => {
                callback(args)
            }, delay))
        }
    }

    const getData = async (args) => {
        const res = await fetch('https://jsonplaceholder.org/users')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .catch(e => {
                console.log(e)
            })
        let filter = (res.filter(r => ((r.firstname).toLowerCase()).indexOf(args) === 0)).map(r => r.firstname)
        if (searchedList.length > 0) {
            console.log(filter)

            filter = filter.filter(f => !searchedList.includes(f))
        }

        setDropDownList(filter)
    }

    const debounceData = debounce(getData, 500)

    const onChangeHandler = e => {
        setData((e.target.value).toLowerCase())
        if (e.target.value)
            debounceData((e.target.value).toLowerCase())
    }

    const onClickandler = d => {
        setSearchedList([...searchedList, d])
        setData('')
        setDropDownList('')
    }
    return (
        <div className="bg-indigo-50 items-center justify-center flex px-16 py-12 w-full min-h-screen">
            <div className="items-center  flex flex-col justify-center  max-md:px-5">
                <div className="flex w-[601px] max-w-full flex-col items-stretch mt-72 mb-56 max-md:my-10">
                    <div className="justify-start items-stretch rounded border bg-white flex gap-5 gap-x-5 px-3.5 py-3 border-solid border-slate-900 max-md:max-w-full max-md:flex-wrap">
                        {searchedList.length > 0 && searchedList.map((s, i) => <p key={i} className="justify-start items-center rounded bg-indigo-50 flex  gap-2 px-2 py-0.5">
                            <span className="text-slate-900 text-center uppercase text-xs font-semibold leading-5 grow whitespace-nowrap">
                                {s}
                            </span>
                            <svg onClick={() => setSearchedList([...searchedList.filter(e => e !== s)])} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" className="w-4 cursor-pointer max-w-full ">
                                <g clipPath="url(#clip0_14_71)">
                                    <path d="M12.5 4.5L4.5 12.5" stroke="#11103C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.5 4.5L12.5 12.5" stroke="#11103C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_14_71">
                                        <rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </p>)}
                        {searchedList.length < 5 ?
                            <input className="grow text-slate-900 text-base font-medium leading-6 background-transparent" placeholder="Add upto 5 skills" value={data} onChange={e => onChangeHandler(e)} /> :
                            <svg onClick={()=>setSearchedList([])} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" className="w-4  ml-auto max-w-full ">
                                <g clipPath="url(#clip0_14_71)">
                                    <path d="M12.5 4.5L4.5 12.5" stroke="#11103C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.5 4.5L12.5 12.5" stroke="#11103C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_14_71">
                                        <rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        }
                    </div>

                    {dropDownList.length > 0 &&
                        <div className="justify-between items-stretch rounded border shadow-sm bg-white flex flex-col mt-4 p-3 border-solid border-slate-900 max-md:max-w-full text-left">
                            {dropDownList.map((d, i) => <p key={i}  onClick={() => onClickandler(d)} className="text-slate-900 text-base font-medium leading-6 whitespace-nowrap rounded hover:bg-indigo-50 justify-center pl-3 pr-16 py-4 items-start max-md:max-w-full max-md:pr-5"> {d} </p>)}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default MultiSearch;