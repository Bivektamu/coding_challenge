import React, { useEffect, useState } from 'react'

let longestWord = ''
const TextAnalyzer = () => {
    // have input for typing
    // count length of inputed string character length
    // split by " " (space) and its length is words length. check the longest word using sort
    // check if exists . , ?, !, :, :-, sum it if it exists and it is length of sentence
    // check if '\n' or '<br />' exists, sum it if it exists and it is length of paragraph
    const [totals, setTotals] = useState({})
    const [txt, setTxt] = useState('')
    useEffect(()=>{
        // console.log(txt)
        const temp = {}
        temp.chars = txt.length
        const words = (txt.split(/[ \n]/).filter(t=>t))
        console.log(words)
        longestWord = words.reduce((longWord, currWord)=>currWord.length > longWord.length?  currWord:longWord, '' )
        console.log(longestWord)
        temp.wordCount = words.length
        let sentenceCount = (txt.split(/[.?!:-]/).filter(s=>s!==' '&& s!=='')).length
        temp.sentenceCount = sentenceCount
        temp.paragraphCount = (txt.split('\n').filter(s=>s!==' '&& s!=='')).length
        setTotals({...temp})
    }, [txt])
    useEffect(()=> {
        // console.log(totals)
    }, [totals])
    const handleChange = e=> {
        setTxt(e.target.value)
    }
    return (
        <div>
            <h1 className="text-4xl mb-8">TextAnalyzer</h1>
            <div>
                words: {totals.wordCount}
            </div>
            <div>
                chars: {totals.chars}
            </div>
            <div>
                sentences: {totals.sentenceCount}
            </div>
            <div>
                paragraphs: {totals.paragraphCount}
            </div>
            <div>
                Longest Word: {longestWord}
            </div>
            <textarea type='text' className='border vorder-slate-400 h-24 w-1/2' onChange={handleChange} >{txt}</textarea>
        </div>

    )
}

export default TextAnalyzer