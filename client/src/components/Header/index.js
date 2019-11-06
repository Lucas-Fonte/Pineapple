import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../store/modules/auth/actions';

import { Container, Content, Profile, Logo } from './styles';
import logo from '../../assets/logo.png';

export default function Header() {
    const profile = useSelector(state => state.user.profile);

    const signedUser = profile ? profile.name : 'Desconhecido';
    const textStatus = profile ? 'Sair' : 'Sign In';

    const dispatch = useDispatch();
    function handleSignOut() {
        dispatch(signOut());
    }

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
                            <strong>{signedUser}</strong>
                            <Link
                                to="/"
                                onClick={signedUser ? handleSignOut : () => {}}
                            >
                                {textStatus}
                            </Link>
                        </div>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
