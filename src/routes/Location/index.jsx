import { useEffect } from "react"
import { useState } from "react"

export default function Location() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
    setUsers(data)
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4">
      <div className="w-full">Map</div>
      <ul className="flex flex-col p-4 bg-slate-900 text-slate-50 rounded-2xl shadow-lg w-full">
        {
          users.map((user) => (
            <li key={user.id} className="p-2 border-b-2 border-slate-50 border-spacing-1 hover:bg-slate-800 hover:cursor-pointer">
              <div className="flex justify-between items-center">
                <span>
                  <p>
                    {user.name}
                  </p>
                  <small>{user.email}</small>
                </span>
                <span>
                  <p>{user.address.city}</p>
                </span>
                {/* {user.address.geo.lat}
                {user.address.geo.lng} */}
              </div>
            </li>
          ))
        }
      </ul>
    </div> 
  )
}