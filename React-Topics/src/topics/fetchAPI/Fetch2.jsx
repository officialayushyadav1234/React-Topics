import { useEffect, useState } from 'react'
const Fetch2 = () => {
  let [allUsers, setAllUsers] = useState(null)

  useEffect(() => {
    async function fetchUsers() {
      try {
        let response = await fetch("https://api.github.com/users")
        let data = await response.json()
        console.log(data);//[{},{},{}]
        setAllUsers(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers()
  }, [])

  return (
    <div>
      <h1>Learn useEffect </h1>
      {
        allUsers?.map((user) => {
          return (
            <section key={user.id}>
              <h1>{user.login}</h1>
            </section>
          )
        })
      }
    </div>
  )
}

export default Fetch2
