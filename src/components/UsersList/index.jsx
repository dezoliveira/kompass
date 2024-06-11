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
      <div className="w-[80vh] flex flex-col items-center justify-center">
        {/* <h1 className="p-4">Users List</h1> */}
        <div className="w-full flex gap-4 items-center py-2">
          <p className="text-xl">Adicionar novo usuário </p>
          <button className="button secondary" onClick={(e) => handleModal(e)}>Adicionar</button>
        </div>
        <div className="table-scrool max-h-[80vh] w-full overflow-y-scroll">
          <table className="border-collapse table-auto w-full h-full text-sm">
            <thead className="bg-slate-800">
              <tr>
                <th className="border-b border-slate-700 p-3 text-slate-400">Users</th>
                <th className="border-b border-slate-700 p-3 text-slate-400">City</th>
                <th className="border-b border-slate-700 p-3 text-slate-400">#</th>
              </tr>
            </thead>
            <tbody className="bg-slate-800">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="border-b border-slate-700 p-3 text-slate-400">
                    <p>{user.name}</p>
                    <small>{user.email}</small>
                  </td>
                  <td className="border-b border-slate-700 p-3 text-slate-400">
                    {user.address.city}
                  </td>
                  <td className="border-b border-slate-700 p-3 text-slate-400 text-center">
                    <button
                      className="button"
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