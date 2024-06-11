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
      <div className="backdrop">
        <div className="modal">
          <span
            className="close-button"
            onClick={(e) => handleModal(e)}
          >
            <FontAwesomeIcon
              icon={faClose}
              fontSize={32}
              className='close-icon'/>
          </span>
          <div className="modal-title p-4">
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