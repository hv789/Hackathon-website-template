import {useEffect, useRef, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import styled from 'styled-components';
import HomePage from '../Home/HomePage';
import logoClose from './assets/ham-c.svg';
import logo1 from './assets/logo1.png';
import hamLogo from './assets/ham.svg';
import './styles.scss';

import {MdxContent} from '../Mdx';

const NAVIGATION_OFFSET = 750;

const Wrapper = styled.div`
  display: block;
  width: 40%;

  @media (max-width: 1000px) {
    margin: 0;
    display: ${props => (props.toggle ? 'none' : 'static')};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: ${props => (props.toggle ? '-1000px' : '0px')};
    transition: top 1s;
    .nav-content {
      height: 35%;
      border-radius: 0 0 8px 8px;
      font-size: 2rem;
      background-color: transparent;
      backdrop-filter: blur(25px);
      // box-shadow: 0 8px 16px 0 rgba(145, 158, 171, 0.16);
      // background-color: rgba(50, 13, 136);
      transition: height 800ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        background-color 800ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }
    .nav-content-offset-crossed {
      background: #121930;
      height: 35%;
      box-shadow: 0 8px 16px 0 rgba(145, 158, 171, 0.16);
    }
  }
`;

// const MdxContent = () => {
//   return (
//     <div
//       style={{
//         backgroundColor: 'red'
//       }}
//     >
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>
//       <h1>This is blog</h1>

//     </div>
//   );
// };

const NAVBAR = ({}) => {
  const [toggle, setToggle] = useState(true);
  const [isOffset, setIsOffset] = useState(false);

  const navigation = useRef();

  const listenScrollEvent = e => {
    if (window.scrollY >= NAVIGATION_OFFSET) {
      setIsOffset(true);
    } else {
      setIsOffset(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const handleOutsideCick = (event, ref) => {
    if (!ref.current.contains(event.target)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', e =>
      handleOutsideCick(e, navigation)
    );

    return () => {
      document.removeEventListener('mousedown', e =>
        handleOutsideCick(e, navigation)
      );
    };
  }, []);

  return (
    <Router>
      <nav className={`nav_bar ${isOffset && 'nav_bar-offset-crossed'}`}>
        <Wrapper toggle={toggle}>
          <div
            className={`nav-content ${
              isOffset && 'nav-content-offset-crossed'
            }`}
            ref={navigation}
          >
            <ul>
              <a href="/">
                <img className="logoo" height="50px" width="50px" src={logo1} />
              </a>
              <li>
                <Link to={`#home`} style={{textDecoration: 'none'}}>
                  <span className="links">Home </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#faq`} style={{textDecoration: 'none'}}>
                  <span className="links">FAQ </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#prizes`} style={{textDecoration: 'none'}}>
                  <span className="links">Prizes </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#sponsors`} style={{textDecoration: 'none'}}>
                  <span className="links">Sponsors </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#team`} style={{textDecoration: 'none'}}>
                  <span className="links">Team </span>{' '}
                </Link>
              </li>
              <img
                className="s-close"
                onClick={() => setToggle(true)}
                src={logoClose}
              />
            </ul>
          </div>
          <div className="ease" />
        </Wrapper>
        <div className={`smallLogo ${isOffset && 'smallLogo-offset-crossed'}`}>
          <img className="logoo1" height="50px" width="50px" src={logo1} />
        </div>
        <img
          className="s-open"
          onClick={() => setToggle(false)}
          src={hamLogo}
        />
      </nav>

      <Switch>
        <Route path="/blog" exact={true}>
          <MdxContent />
        </Route>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default NAVBAR;
