import React, { useEffect, useRef, useState } from 'react'

function Accordian({ accords }) {
    const [allAccords, setAllAccords] = useState([])
    const ref = useRef(null)
    const [ht, setHt] = useState(0)

    useEffect(()=> {

    }, [])
    useEffect(() => {
        if (accords.length > 0) {
            setAllAccords(accords.map((a, i) => ({ id: i, accord: a, active: false })))
        }
    }, [accords])

    useEffect(() => {
        // console.log(allAccords)
    }, [allAccords])

    const onClickHandler = id => {
        const temp = allAccords.map(a=> {
            if(a.active === true) {
                a.active = false
            }
            if(a.id === id) {
                a.active = !a.active
            }
            return a
        })
        console.log(temp)
        setHt(ref.current.scrollHeight)

        setAllAccords(temp)
    }
    return (
        <div className="justify-center items-center bg-white flex flex-col px-16 py-12 max-md:px-5">
            <div className="items-center shadow-sm bg-white flex w-[700px] max-w-full flex-col mt-32 mb-32 px-20 py-12 rounded-3xl max-md:my-10 max-md:px-5">
                <header className="text-blue-950 text-2xl font-bold self-center whitespace-nowrap mt-2.5"> Frequently Asked Questions </header>
                <div className="text-blue-950 text-center text-sm max-w-[261px] self-center mt-2.5">
                    Answers to common questions about <br /> our frontend challenges website.
                </div>
                {allAccords.length > 0 && allAccords.map((a, i) => {
                    console.log(a)
                    const { id, accord, active } = a
                    return (
                        <div key={id} onClick={()=>onClickHandler(id)}  className={`border-l-${accord.c}-400 bg-${accord.c}-100 justify-between items-stretch  self-stretch flex gap-5 mt-7 px-4 py-5 border-l-4 border-solid max-md:max-w-full max-md:flex-wrap cursor-pointer`}>
                            <div className="text-blue-950 text-left text-sm grow shrink basis-auto max-md:max-w-full overflow-hidden">
                                <p className={`${active && 'font-semibold'}`}>{accord.q}</p>
                                <p className="mt-2 duration-400 transition-all " ref={ref} style={{height: active ? `${ht}px` : '0px'}}>
                                    {accord.a}
                                </p>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none" className={`transition-400 transition-all w-[18px] overflow-hidden shrink-0 max-w-full ${active && 'rotate-45'}`}>
                                <g clip-path="url(#clip0_1_22)">
                                    <path d="M9 4.25V14.75" stroke="#0E1C4E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3.75 9.5H14.25" stroke="#0E1C4E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_22">
                                        <rect width="18" height="18" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Accordian