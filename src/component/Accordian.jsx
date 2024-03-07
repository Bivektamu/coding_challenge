import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const Accordian = () => {
    const ref = useRef([])
    const accordians = [
        {
            title: 'Accordian 1',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            title: 'Accordian 2',
            body: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            title: 'Accordian 3',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ]



    useEffect(() => {
        if (ref.current.length > 0) {
            const eles = ref.current
            for (let i = 0; i < eles.length; i++) {
                const ht = (eles[i].querySelector('button').clientHeight)
                eles[i].style.height = `${ht}px`
            }
        }
    }, [ref])

    const onClickHandler = i => {
        const eles = ref.current
        let ht = eles[i].querySelector('button').clientHeight

        if (eles[i].classList.value.indexOf('active') === -1) {
            console.log(eles[i].classList)
            ht += eles[i].querySelector('p').clientHeight
        }

        eles[i].style.height = `${ht}px`
        eles[i].classList.toggle('active')

    }
    return (
        <div className='w-2/3 mx-auto py-12'>
            <h1 className='mb-12'>Accordian</h1>
            {accordians.length > 0 && accordians.map((accord, index) =>
                <div ref={e => ref.current[index] = e} className="accoridan transition-all  duration-300 mb-8  bg-green-200 overflow-hidden" key={index} >
                    <button onClick={() => onClickHandler(index)} className="p-4 pointer w-full">{accord.title}</button>
                    <p className='pb-4 px-4'>{accord.body}</p>
                </div>
            )}
        </div>
    )
}

export default Accordian