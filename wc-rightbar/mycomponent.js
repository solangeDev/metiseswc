import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';

const MyApp = (props) => {
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px',
    },
    bmBurgerBars: {
      background: '#373a47',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      position: 'static',
      height: '94vh',
      width: '350px',
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
    bmItemList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      color: 'whitesmoke',
    },
    bmItem: {
      color: 'whitesmoke',
      alignItems: 'center',
      display: 'flex',
    },
  };

  useEffect(()=>{
    window.addEventListener('angular-rightbar', function(e){
      console.log('evento ya en el shell React', e.detail);
    }) 
    console.log('recibir entre hermanos');
  },[])

  const handleClick = () => {
    // const event = new CustomEvent('react-header-event', { detail: { val1: 55, val2: 56, val3: 57, val4: 58, val5: 59 } });
    // window.dispatchEvent(event);
  };
  return (
    <>
      <Menu styles={styles} right isOpen={true}>
        <a>
          <img
            width='50'
            height='50'
            src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
          />
          {props.name}
        </a>
        <a id='home' className='menu-item' href='#'>
          Home
        </a>
        <a id='about' className='menu-item' href='#'>
          About
        </a>
        <a id='contact' className='menu-item' href='#'>
          Contact
        </a>
        <a className='menu-item--small' href='#'>
          Settings
        </a>
      </Menu>
    </>
  );
};

MyApp.propTypes = {
  name: PropTypes.string,
};

//ReactDOM.render(<MyApp></MyApp>, document.getElementById('app'));
customElements.define('wc-rightbar', reactToWebComponent(MyApp, React, ReactDOM));
