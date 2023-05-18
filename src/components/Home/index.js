import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo/index.js';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const surnameArray = ['h', 'a', 'l', 'u', 'k', 'h', 'i', 'n', 'a',];
  const nameArray = ['A', 'n', 'a', 's', 't', 'a', 's', 'i', 'y', 'a'];
  const jobArray = ['f', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 6000)

    return () => clearTimeout(idTimeOut);
  }, [])

  return (
    <div className="container home-page">
      <div className='text-zone'>
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt='developer' />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={surnameArray}
            idx={15} />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={25} />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={35} />
        </h1>
        <h2>Will build your site with JavaScript/React</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
      <Logo />
    </div>
  )
};

export default Home;