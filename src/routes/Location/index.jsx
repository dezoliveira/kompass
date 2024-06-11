import { Suspense, useEffect } from "react"
import { useState } from "react"
import UsersList from "../../components/UsersList"
import GoogleMaps from "../../components/GoogleMaps"
import Modal from "../../components/Modal"

export default function Location() {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
    setUsers(data)
    setFilteredUsers(data)
    setId(data.length +1)
  }

  const addNewUser = (e) => {
    console.log(users.length)
    e.preventDefault()

    setUsers([...users, {
      id: id,
      name: name,
      email: email,
      address: {
        city: city,
        geo: {
          lat: lat,
          lng: lng
        }
      }
    }])

    setFilteredUsers(users)

    cleanValues()

    console.log('new users', users)
  }

  const cleanValues = () => {
    setId(id + 1)
    setName("")
    setEmail("")
    setCity("")
    setLat("")
    setLng("")
  } 

  const handleKompass = (userId, active) => {
    if (active) {
      setFilteredUsers((user) => {
        return user.filter((u) => {
          return u.id === userId
        })
      })
    } else {
      setFilteredUsers(users)
    }
  }

  return (
    <>
      {
        showModal ? 
        <>
          <Modal setShowModal={setShowModal}>
            {/* Form */}
            <form
              className="flex flex-col items-center justify-center gap-2 pt-8 w-full"
              onSubmit={(e) => {
                addNewUser(e),
                setShowModal()
              }}
            >
              {/* ID */}
              <label className="text-xl flex flex-col">
                ID:
                <input
                  className="disabled"
                  type="text"
                  value={id}
                  disabled
                />
              </label>

              {/* Nome */}
              <label className="text-xl flex flex-col">
                Nome:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              {/* Email */}
              <label className="text-xl flex flex-col">
                Email:
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </label>

              {/* Cidade */}
              <label className="text-xl flex flex-col">
                Cidade:
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>

              {/* Latitude */}
              <label className="text-xl flex flex-col">
                lat:
                <input
                  type="text"
                  value={lat}
                  onChange={(e) => setLat(e.target.value)}
                />
              </label>

              {/* Longitude */}
              <label className="text-xl flex flex-col">
                lng:
                <input
                  type="text"
                  value={lng}
                  onChange={(e) => setLng(e.target.value)}
                />
              </label>

              {/* Add new user */}
              <button className="button mt-2">
                Adicionar
              </button>
            </form>
          </Modal>
        </> : <></>
      }
      <div className="flex flex-col sm:flex-row justify-between items-center p-8">
        <Suspense fallback={<><h1>Loading...</h1></>}>
          <GoogleMaps data={filteredUsers}/>
          <UsersList data={users} setShowModal={setShowModal} handleKompass={handleKompass}/>
        </Suspense>
      </div>
    </>
  )
}