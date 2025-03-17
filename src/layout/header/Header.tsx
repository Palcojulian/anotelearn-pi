import './Header.css';
import logo from './../../assets/icons/logo2.png'


const Header = () => {
  return (
    <header>
      <nav className='nav'>
        <img src={logo} alt="" />
        {/* <h2>Anatolearn</h2> */}
      </nav>
    </header>
  )
}

export default Header
