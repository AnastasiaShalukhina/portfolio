import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,

} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faSkype,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoS} alt='logo' />
        <span>Shalukhina</span>
      </Link>

      <nav>
        <NavLink
          exact='true'
          activeclassname='active'
          to='/'>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink
          exact='true'
          activeclassname='active'
          className='about-link'
          to='/about'>
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink
          exact='true'
          activeclassname='active'
          className='contact-link'
          to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/anastasyia-shalukhina-3406b2234/'>
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/AnastasiaShalukhina'>
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.youtube.com/watch?v=4YEkNZbnwD4'>
            <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            href='skype:live:.cid.1ed2e5280beb6fe'>
            <FontAwesomeIcon icon={faSkype} color='#4d4d4e' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;