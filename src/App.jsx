import { useEffect, useState } from 'react';
import './App.css';
import UserFilter from './component/UserFilter';
import UserList from './component/UserList'
function App() {
  const [userData, setUserData] = useState([])
  const [typedName, setTypedName] = useState('')


  useEffect(() => {
    const fetchUsers = () => {
      fetch('https://jsonplaceholder.org/users').then(res => {
        if (!res.ok) {
          throw new Error('Network eroor')
        }
        return res.json()
      }).then(users => {
        if (users) {
          let name = users.map(user => user.firstname +' '+ user.lastname)
          if(typedName.length > 0) {
            name = name.filter(n=> n.indexOf(typedName) > -1)
            console.log(name)
          }

          setUserData(name)
        }
      })

    }
    fetchUsers()
  }, [typedName])

  const typedNameFunc = name=> {
    console.log(name)
    setTypedName(name)
  }
  return (
    <div className="App">
      <UserFilter typedName={name=>typedNameFunc(name)} />
      <UserList list={userData} />
    </div>
  );
}

export default App;