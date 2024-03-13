import React, { useEffect, useState } from 'react'

export const Stars = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            {count > 0 && Array(count).fill('').map((_, index) =>
                <div key={index}>
                    <p>{index + 1}</p>
                    {Array(index + 1).fill('').map((_, i) =>
                        <p className="">
                            {Array(i + 1).fill('*').toString().replaceAll(',', '')}
                        </p>
                    )}

                </div>
            )}
            <button onClick={() => setCount(prev => prev + 1)}>Click</button>
        </div>
    )
}

export const CharacterCount = () => {
    let str = 'abdbcbccc', charC = {}

    for (let char of str) {
        if (charC[char]) {
            charC[char] += 1
        }
        else {
            charC[char] = 1
        }
    }


    console.log((charC))

    // str = str.split('')
    // charC = str.map(s => {
    //     const length = str.filter(st => st === s).length
    //     if (length > 0) {
    //         str = str.filter(str => str !== s)
    //         return { char: s, count: length }
    //     }
    // })
    // charC = charC.filter(c=>c)
    // console.log(charC)

    return (
        <div className="">
            {Object.keys(charC).length > 0 && Object.keys(charC).map(key=><p>{key}: {charC[key]}</p>)
            }
        </div>
    )


    // Output: a:1, b:3, d:1, c:4
}