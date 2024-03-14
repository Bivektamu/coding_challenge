import React, { useEffect, useState } from 'react'
import back from '../img/back.svg'
import bath from '../img/bath.svg'
import building from '../img/building.svg'
import drink from '../img/drink.svg'
import plane from '../img/plane.svg'
import sail from '../img/sail.svg'

import './MemoryGame.css'

/* 
    card: [
        {
            name: 'boat',
            imgSrc:'',
            flipped: false,
            paired: false,
        },
    ]
    gameBoard: {
        score: 0, {+10 if paired & -5 if unpaired}
        flips: 0, {total number of flips}
        timer: setInterval,
        status:'over'
    }

    Logic:
    - totalCards state = [...card, ...card] {shuffle it }
    - gameBoard state = const [gameBoard, setGAmeBoard]
    - lastClickedCard state = const [lastClickedCard, setLastClickedCard]
    - Inital load:
            - start setInterval of 1s
            - counter = 60 and on each 1s counter-=1
            - if(counter === 0) {
                upate gameBoard status to over
            }

    - Click Event: 
            - each card upon click, flip it, and update totalCards state propertty flipped to true setTotalCards
            - upon each click inscrease flips property by one in gameboard state
            - if flips is even then check if last clicked card is paired ?
                - yes, score+=10  and disable clicks for paired cards,
                - no, score-=5 and update flipped property to false of 2 card which name = lastClickedCard
*/


// INITIAL STATE OF CARDS
const INIT_CARD = [
    {
        name: 'bath',
        imgSrc: bath,
        flipped: false,
        paired: false,
    },
    {
        name: 'building',
        imgSrc: building,
        flipped: false,
        paired: false,
    },
    {
        name: 'drink',
        imgSrc: drink,
        flipped: false,
        paired: false,
    },
    {
        name: 'plane',
        imgSrc: plane,
        flipped: false,
        paired: false,
    },

    {
        name: 'sail',
        imgSrc: sail,
        flipped: false,
        paired: false,
    },
]

// INITIAL STATE OF GAMEBOARD
const INIT_GAMEBOARD = {
    score: 0,
    flips: 0,
    status: 'init'
}

let LAST_CLICKED = ''


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const MemoryGame = () => {
    const [cards, setCards] = useState([...shuffleArray([...INIT_CARD, ...INIT_CARD])])
    const [gameBoard, setGameBoard] = useState({ ...INIT_GAMEBOARD })
    const [timer, setTimer] = useState(null)
    const [counter, setCounter] = useState(60)
    const [modal, setModal] = useState(false)

    const { flips, score, status } = gameBoard


    useEffect(() => {
        console.log(status)

        switch (status) {

            // IF GAME STARTS THEN START TIMER
            case 'start':
                if (!timer) {
                    setTimer(setInterval(() => {
                        setCounter(prev => prev - 1)
                    }, 1000))
                }
                break;

            // IF GAME IS OVER THEN STOP TIMER & SHOW DIALOG
            case 'over':
                setModal(true)
                clearInterval(timer)
                break;

            // INITIALIZATION OF GAME I.E
                case 'init':
                setCounter(60)
                setTimer(null)
                setModal(false)
                setCards([...shuffleArray([...INIT_CARD, ...INIT_CARD])])
                setGameBoard({ ...INIT_GAMEBOARD })
                break;

            default:
                break;
        }

        return (() => {
            if (timer) clearInterval(timer)
        })
    }, [status])

    useEffect(() => {
        if (counter < 1) {
            setGameBoard(prev => ({ ...prev, status: 'over' }))
        }
    }, [counter])

    useEffect(() => {
        if (flips > 0) {
            const updateCards = [...cards.map(card => ({ ...card }))]
            const updateGameBoard = { ...gameBoard }

            if (flips % 2 === 0) {
                if (updateCards.filter(card => card.name === LAST_CLICKED && card.flipped === false).length > 0) {
                    updateCards.map(card => {
                        if (!card.paired) {
                            card.flipped = false
                        }
                    })
                    updateGameBoard.score -= 5
                }
                else {
                    updateCards.map(card => {
                        if (card.name === LAST_CLICKED) {
                            card.paired = true
                        }
                    })
                    updateGameBoard.score += 10
                    const totalPaired = (updateCards.reduce((accum, card) => {
                        if (card.paired) {
                            return accum += 1
                        }
                        else return accum
                    }, 0))
                    if (totalPaired === updateCards.length) {
                        updateGameBoard.status = 'over'
                    }
                }
                setTimeout(() => {
                    setCards([...updateCards])
                    setGameBoard({ ...updateGameBoard })
                }, 1000);
            }
            else if (flips === 1) {
                updateGameBoard.status = 'start'
                setGameBoard({ ...updateGameBoard })
            }
        }
    }, [flips])

    const cardClicked = (e, cardName, index) => {
        e.stopPropagation()
        LAST_CLICKED = cardName
        const updatCards = [...cards.map(card => ({ ...card }))]
        updatCards[index].flipped = true
        setCards([...updatCards])
        setGameBoard(prev => ({ ...prev, flips: prev.flips + 1 }))
    }

    return (
        <div className='p-12'>

            {modal &&
                <div className="modal fixed top-0 left-0 w-full h-screen flex items-center justify-center z-10 bg-slate-200/70">
                    <div className='bg-white py-8 px-12 border rounded-lg'>
                        <h2 className="text-3xl font-semibold ">Completed</h2>
                        <div className="flex gap-x-12 my-8">
                            <h2 className='text-xl font-semibold'>Score: {score}</h2>
                            <h2 className='text-xl font-semibold'>Flips: {flips}</h2>
                        </div>
                        <button type="button" onClick={() => setGameBoard(prev => ({ ...prev, status: 'init' }))}>Play Again</button>
                    </div>
                </div>
            }

            <h1 className="text-4xl mb-8 font-semibold">Memory Game</h1>
            <div className="mx-auto w-[800px] mb-12 flex gap-x-8">
                <h2 className='text-xl font-semibold'>Score: {score}</h2>
                <h2 className='text-xl font-semibold'>Flips: {flips}</h2>
                <h2 className='text-xl font-semibold'>Timer: {counter}</h2>
            </div>
            <div className="mx-auto w-[800px] grid grid-cols-5 gap-8">
                {cards && cards.length > 0 && cards.map((card, index) =>
                    <button key={index} type='button' className={`card p-4 flex justify-center relative ${card.flipped ? 'flipped' : ''}`} onClick={(e) => cardClicked(e, card.name, index)}>
                        <img src={card.imgSrc} alt="" className="back" />
                        <img src={back} alt="" className="absolute  top-0 left-0 bottom-0 right-0 margin-auto object-contain" />
                    </button>
                )}
            </div>


        </div>
    )
}

export default MemoryGame