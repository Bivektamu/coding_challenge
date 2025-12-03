
const createResource = (apiPromise) => {
    console.log(apiPromise)
    let status = 'pending', result
    const suspender = apiPromise.then(
        (res) => {
            setTimeout(() => {
                status = 'success'
                result = res
            }, 1000)
        },
        (err) => {
            setTimeout(() => {
                status = 'error'
                result = err
            }, 1000)
        }
    )


    return {
        read() {
            if (status == 'pending') {
                throw suspender
            }
            else if (status == 'success') {
                return result
            }
            else {
                throw result
            }
        }
    }
}

const fetchUsers = (url) => fetch(url).then(res=>res.json())
    
const resource = createResource(fetchUsers('https://jsonplaceholder.typicode.com/users'))

const User = () => {
    const users = (resource.read())
    return (
        <div className="">
            {
                users.map(user => user.name)
            }
        </div>
    )
}

export default User