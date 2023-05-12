import { NavLink } from 'react-router-dom'
import { AppFilter } from './AppFilter'

export const AppHeader = () => {
  return (
    <section className='app-header-container '>
      <div className='app-header container'>
      <img src="https://res.cloudinary.com/dynulj6f2/image/upload/v1683916431/logo_gmail_lockup_default_1x_r5_ri0xny.png" alt="" />
        <AppFilter></AppFilter>

        {/* <NavLink className='header-link' to='/'>
          Home
        </NavLink>
        
        <NavLink className='header-link' to='/login'>
          Login
        </NavLink> */}
      </div>
    </section>
  )
}
