export default function Modal({ children }) {
  return (
    <>
      <div className="backdrop absolute top-0 left-0 w-full h-full z-10 bg-slate-950 bg-opacity-55 flex flex-col justify-center items-center">
        <div className="modal relative w-[80vh] h-[80vh] z-20 bg-slate-50 flex flex-col align-center justify-center">
          <span className="absolute right-5 top-5">X</span>
          <div className="modal-title absolute top-0 p-4 flex items-center justify-center w-full">
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