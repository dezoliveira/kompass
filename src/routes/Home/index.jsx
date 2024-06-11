import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Home() {
  return (
    <main>
      <div className='home-container'>
        <img src={logo} className='logo'/>
        <h1>Bem vindo ao <strong>Kompass</strong></h1>
        <h1>
          <strong>Encontre </strong>quem você procura</h1>
        <NavLink to="/location">
          <button className='button primary'>Começar</button>
        </NavLink>
      </div>
    </main>
  )
}