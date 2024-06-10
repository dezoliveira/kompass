import { Suspense, useEffect } from "react"
import { useState } from "react"
import UsersList from "../../components/UsersList"
import GoogleMaps from "../../components/GoogleMaps"
import Modal from "../../components/Modal"

export default function Location() {
  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    getUsers()
  }, [])

  const handleModal = (e) => {
    console.log('modal')
    e.preventDefault()
    setShowModal(true)
    alert('showModal')
  }

  const getUsers = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
    setUsers(data)
  }

  return (
    <>
      {
        showModal ? 
        <>
          <Modal />
        </> : <></>
      }
      <div className="flex flex-col sm:flex-row justify-between items-center p-8">
        <Suspense fallback={<><h1>Loading...</h1></>}>
          <GoogleMaps data={users}/>
          <UsersList data={users} handleModal={handleModal}/>
        </Suspense>
      </div>
    </>
  )
}