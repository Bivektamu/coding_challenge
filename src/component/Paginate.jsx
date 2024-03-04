import { useEffect, useState } from 'react'

const Paginate = () => {
    const [posts, setPosts] = useState()
    const [perPage, setPerPage] = useState(1)
    const [currIndex, setCurrIndex] = useState(0)
    const [lastIndex, setLastIndex] = useState(perPage)
    useEffect(() => {
        const getData = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
                if (!res.ok) {
                    throw new Error('Data not fetched')
                }
                return res.json()
            })
                .catch(error => {
                    console.log(error)
                })
            setPosts(data)
        }
        getData()
    }, [])

    useEffect(() => {
        console.log(currIndex, perPage)
        setLastIndex(parseInt(currIndex)  + parseInt(perPage))
    }, [currIndex])

    useEffect(() => {
        setCurrIndex(0)
        setLastIndex(perPage)
    }, [perPage])

    useEffect(()=> {console.log(lastIndex)}, [lastIndex])

    return (
        <>
            <div className='my-16'>
                <label htmlFor="" className='mb-6 block'>Post per page</label>
                <input type="text" className='border-[1px] border-slate-400 text-center p-2' value={perPage} onChange={e => setPerPage(e.target.value)} />
            </div>

            {posts && posts.length > 0 &&
                <div>

                    {posts.slice(currIndex, lastIndex).map(post =>
                        <div className="w-1/2 mx-auto" key={post.id}>
                            <h2 className='font-semibold'>{post.title} (id {post.id})</h2>
                            <br />
                            <h4>{post.body}</h4>
                            <br /><br />
                        </div>)
                    }

                    {perPage &&
                        <div className='flex gap-2'>
                            {Array(Math.ceil(posts.length / perPage)).fill('').map((_, i) =>
                                <button className={Math.ceil(currIndex/perPage) === i ? 'font-semibold' : ''} key={i} onClick={() => setCurrIndex(parseInt(i*perPage))}>{i + 1}</button>
                            )}
                        </div>
                    }


                </div>
            }


        </>
    )
}

export default Paginate