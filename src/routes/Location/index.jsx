import { Suspense, useEffect } from "react"
import { useState } from "react"
import UsersList from "../../components/UsersList"
import GoogleMaps from "../../components/GoogleMaps"

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
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center p-8">
        <Suspense fallback={<><h1>Loading...</h1></>}>
          <GoogleMaps data={users}/>
          <UsersList data={users}/>
        </Suspense>
      </div>
    </>
  )
}