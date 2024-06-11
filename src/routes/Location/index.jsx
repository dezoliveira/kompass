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
          <Modal setShowModal={setShowModal}>
            <form
              className="flex flex-col items-center justify-center gap-2 pt-8"
              // onSubmit={}
            >
              <label className="text-xl flex flex-col">
                ID:
                <input type="text" />
              </label>
              <label className="text-xl flex flex-col">
                Nome:
                <input type="text" />
              </label>
              <label className="text-xl flex flex-col">
                Email:
                <input type="text" />
              </label>
              <label className="text-xl flex flex-col">
                Cidade:
                <input type="text" />
              </label>
              <label className="text-xl flex flex-col">
                lat:
                <input type="text" />
              </label>
              <label className="text-xl flex flex-col">
                lng:
                <input type="text" />
              </label>
              <button className="button mt-2">Adicionar</button>
            </form>
          </Modal>
        </> : <></>
      }
      <div className="flex flex-col sm:flex-row justify-between items-center p-8">
        <Suspense fallback={<><h1>Loading...</h1></>}>
          <GoogleMaps data={users}/>
          <UsersList data={users} setShowModal={setShowModal}/>
        </Suspense>
      </div>
    </>
  )
}