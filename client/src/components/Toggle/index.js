import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import { MdDehaze } from 'react-icons/md';
import { Container } from './styles';

export default function Toggle() {
  const [menu, setMenu] = useState(false);
  function handleSideBar() {
    setMenu(menu === false);
  }
  return (
    <Container>
      <Fab
        color="inherit"
        onClick={handleSideBar}
        style={{ background: '#A9A9A9' }}
      >
        <MdDehaze color="#fff" size={25} />
      </Fab>
    </Container>
  );
}
