import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import PropTypes from 'prop-types';
import { emitCustomEvent } from 'react-custom-events';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const MyApp = (props) => {
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const headerStyle = {
    backgoundColor: 'black',
  };

  const handleClick = () => {
    const event = new CustomEvent('react-header-event', { detail: { val1: 55, val2: 56, val3: 57, val4: 58, val5: 59 } });
    window.dispatchEvent(event);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' style={headerStyle}>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} style={divStyle}>
              <img
                width='50'
                height='50'
                src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
              />
              {props.name}
            </Typography>
            <Button onClick={handleClick} color='inherit'>
              Menu 1
            </Button>
            <Button color='inherit'>Menu 2</Button>
            <Button color='inherit'>Menu 3</Button>
            <Button color='inherit'>Menu 4</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

MyApp.propTypes = {
  name: PropTypes.string,
};

//ReactDOM.render(<MyApp></MyApp>, document.getElementById('app'));
customElements.define('my-app-react', reactToWebComponent(MyApp, React, ReactDOM));
