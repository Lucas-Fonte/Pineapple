import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <h1>factorello.</h1>
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Confetti</strong>
              <Link to="/dashboard">Meu Perfil</Link>
            </div>
            <button type="button">Sair</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
