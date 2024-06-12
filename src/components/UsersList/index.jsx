import { useState, createRef, useEffect } from "react"

export default function UsersList({ data, setShowModal, handleKompass }) {
  const users = data
  // const [active, setActive] = useState(false)
  const refs = []

  useEffect(() => {
  
  }, [refs])

  const handleModal = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleClick = (e, userID, refId) => {
    e.preventDefault()

    refs.map(ref => {
      ref.current.className = "button primary"
    })

    refId.current.className = "button btn-active"

    handleKompass(userID)
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
              {users.map((user, index) => {
                refs.push(createRef())
                return (
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
                        onClick={(e) => {
                          handleClick(e, user.id, refs[index])
                        }}
                        id={user.id}
                        ref={refs[index]}
                      >
                        Kompass
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div> 
  )
}