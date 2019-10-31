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
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              alt="user"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1NZ9j23-MqH_HlZMc81olN4WCzgJ8OgzJ93rUHY5HNJVN6jM&s"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
