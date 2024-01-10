import { useEffect, useState } from 'react';
import './App.css';
import UserFilter from './component/UserFilter';
import UserList from './component/UserList'
function App() {
  const [userData, setUserData] = useState([])
  const [typedName, setTypedName] = useState('')
  const [page, setPage] = useState(1)
  const [pageList, setPageList] = useState([])
  const PER_PAGE = 6


  useEffect(() => {
    const fetchUsers = () => {
      fetch('https://jsonplaceholder.org/users').then(res => {
        if (!res.ok) {
          throw new Error('Network eroor')
        }
        return res.json()
      }).then(data => {
        if (data) {
          let users = data.map(user => {
            return {
              id: user.id,
              name: user.firstname + ' ' + user.lastname,
              email:user.email
            }
          })
          console.log(users)
          if (typedName.length > 0) {
            users = users.filter(n =>  n.name.toLowerCase().indexOf(typedName.toLowerCase()) === 0  )
            console.log(users)
          }

          setUserData([...users])
        }
      })

    }
    fetchUsers()

  }, [typedName])


  useEffect(() => {
    createPage()
  }, [userData])


  useEffect(() => {
    createPage()

  }, [page])

  function createPage() {
    const firstIndex = page * PER_PAGE - PER_PAGE
    const lastIndex = firstIndex + PER_PAGE
    const slicedData = userData.slice(firstIndex, lastIndex)
    setPageList(slicedData)
  }

  const typedNameFunc = name => {
    console.log(name)
    setTypedName(name)
  }
  return (
    <div className="App">
      <UserFilter typedName={name => typedNameFunc(name)} />
      <UserList list={pageList} />
      {userData.length > PER_PAGE && <div>
        {
          Array(Math.ceil(userData.length / PER_PAGE))
            .fill('')
            .map((_, i) => <span onClick={e => setPage(e.target.innerHTML)} className={`cursor-pointer ${parseInt(page) === (i + 1) ? 'text-red-500' : 'text-black'}`}>{i + 1}</span>)

        }
      </div>}
    </div>
  );
}

export default App;