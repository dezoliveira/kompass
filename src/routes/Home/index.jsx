import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Home() {
  return (
    <main>
      <div className='home-container'>
        <img src={logo} className='w-full md:w-[600px]'/>
        <h1>Bem vindo ao <strong>Kompass</strong></h1>
        <h1>Encontre quem você procura</h1>
        <NavLink to="/location">
          <button className='button'>Começar</button>
        </NavLink>
      </div>
    </main>
  )
}