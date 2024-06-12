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

  const handleKompass = (userId) => {
    setFilteredUsers(users)
    
      setFilteredUsers((user) => {
        return user.filter((u) => {
          return u.id === userId
        })
      })
  }

  return (
    <>
      {
        showModal ? 
        <>
          <Modal setShowModal={setShowModal}>
            {/* Form */}
            <form
              className="form pt-8"
              onSubmit={(e) => {
                addNewUser(e),
                setShowModal()
              }}
            >
              {/* ID */}
              <label className="form-label">
                ID:
                <input
                  className="disabled"
                  type="text"
                  value={id}
                  disabled
                />
              </label>

              {/* Nome */}
              <label className="form-label">
                Nome:
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              {/* Email */}
              <label className="form-label">
                Email:
                <input
                  type="text"
                  placeholder="Seu melhor email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </label>

              {/* Cidade */}
              <label className="form-label">
                Cidade:
                <input
                  type="text"
                  placeholder="Sua cidade atual"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>

              {/* Latitude */}
              <label className="form-label">
                Latidude:
                <input
                  placeholder="-14.653"
                  type="text"
                  value={lat}
                  onChange={(e) => setLat(e.target.value)}
                />
              </label>

              {/* Longitude */}
              <label className="form-label">
                Longitude:
                <input
                  placeholder="19"
                  type="text"
                  value={lng}
                  onChange={(e) => setLng(e.target.value)}
                />
              </label>

              {/* Add new user */}
              <button className="button primary mt-2">
                Adicionar
              </button>
            </form>
          </Modal>
        </> : <></>
      }

      {/* Main Container */}
      <div className="location-container">
        <Suspense fallback={<><h1>Loading...</h1></>}>
          <GoogleMaps data={filteredUsers}/>
          <UsersList
            data={users}
            setShowModal={setShowModal}
            handleKompass={handleKompass}
          />
        </Suspense>
      </div>
    </>
  )
}