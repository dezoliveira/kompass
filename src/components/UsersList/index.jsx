import { useState, useRef } from "react"

export default function UsersList({ data, setShowModal, handleKompass }) {
  const users = data
  const [active, setActive] = useState(false)
  const btnRef = useRef(null)

  const handleModal = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleClick = (e, userID) => {
    console.log(btnRef)
    e.preventDefault()
    setActive(!active)
    handleKompass(userID, active)
  }

  return (
      <div className="users-container">
        {/* Add new user */}
        <div className="add-content py-2">
          <p className="text-xl">Adicionar novo usuário </p>
          <button
            className="button secondary"
            onClick={(e) => handleModal(e)}
          >
            Adicionar
          </button>
        </div>

        {/* Scrool */}
        <div className="table-scrool">
          {/* Users Table */}
          <table className="table table-auto border-collapse">
            <thead>
              <tr>
                <th>Users</th>
                <th>City</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <p>{user.name}</p>
                    <small>{user.email}</small>
                  </td>
                  <td>
                    {user.address.city}
                  </td>
                  <td className="text-center">
                    <button
                      className="button primary"
                      onClick={(e) => handleClick(e, user.id)}
                      id={user.id}
                      ref={btnRef}
                    >
                      Kompass
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> 
  )
}