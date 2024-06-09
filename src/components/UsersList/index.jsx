import GoogleMaps from "../GoogleMaps"
import { Suspense } from "react"

export default function UsersList({ data }) {
  const users = data

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-8">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="p-4">Google Maps</h1>
        <Suspense fallback={<><h1>Loading...</h1></>}>
          <GoogleMaps />
        </Suspense>
      </div>
      <div className="w-[80vh] flex flex-col items-center justify-center">
        <h1 className="p-4">Users List</h1>
        <table className="border-collapse table-auto w-full text-sm">
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
                  <button className="button">
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