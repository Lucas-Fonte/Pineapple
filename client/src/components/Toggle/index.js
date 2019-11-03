import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { MdDehaze } from 'react-icons/md';
import { Container, ToggleButton } from './styles';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

export default function Toggle() {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
          <Link to="/" style={{ color: '#000' }}>
            <h1>Projects</h1>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/tasks" style={{ color: '#000' }}>
            <h1>Tasks</h1>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/resources" style={{ color: '#000' }}>
            <h1>Resources</h1>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/materials" style={{ color: '#000' }}>
            <h1>Materials</h1>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/new/resource" style={{ color: '#000' }}>
            <h1>New Resource</h1>
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Container>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>

      <ToggleButton>
        <Fab
          color="inherit"
          onClick={toggleDrawer('left', true)}
          style={{ background: '#A9A9A9' }}
        >
          <MdDehaze color="#fff" size={25} />
        </Fab>
      </ToggleButton>
    </Container>
  );
}
