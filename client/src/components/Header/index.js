import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile, Logo } from './styles';
import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <Link to="/dashboard">
                        <Logo>
                            <img
                                src={logo}
                                alt="pineapple"
                                width="50"
                                height="40"
                            />
                            <h1>Pineapple</h1>
                        </Logo>
                    </Link>
                </nav>

                <aside>
                    <Profile>
                        <div>
                            <strong>Lucas</strong>
                            <Link to="/">Meu Perfil</Link>
                        </div>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
