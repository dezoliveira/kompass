// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

export default function Modal({ children, setShowModal }) {
  const handleModal = (e) => {
    e.preventDefault()
    setShowModal(false)
  }

  return (
    <>
      <div className="backdrop absolute top-0 left-0 w-full h-full z-10 bg-slate-950 bg-opacity-55 flex flex-col justify-center items-center">
        <div className="modal relative w-[80vh] h-[80vh] z-20 bg-slate-50 flex flex-col align-center justify-center">
          <span className="absolute right-2 top-2 z-20" onClick={(e) => handleModal(e)}>
            <FontAwesomeIcon icon={faClose} fontSize={32} className='text-slate-50 hover:cursor-pointer hover:text-fuchsia-400'/>
          </span>
          <div className="modal-title w-full bg-slate-900 text-slate-50 absolute top-0 p-4 flex items-center justify-center w-full">
            <h1>Modal Title here</h1>
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}