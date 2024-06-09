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
      <Suspense fallback={<><h1>Loading...</h1></>}>
        <UsersList data={users}/>
      </Suspense>
      <Suspense fallback={<><h1>Loading...</h1></>}>
        <GoogleMaps />
      </Suspense>
    </>
  )
}