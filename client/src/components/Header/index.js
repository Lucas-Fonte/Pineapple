import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdNotifications } from 'react-icons/md';
import { signOut } from '../../store/modules/auth/actions';
import {
    Container,
    Content,
    Profile,
    Logo,
    Notification,
    NotificationList
} from './styles';
import logo from '../../assets/logo.png';
import api from '../../services/api';
import useOutside from '../../util/useOutside';

export default function Header() {
    const ref = useRef();
    const [notifications, setNotifications] = useState([]);
    const [notificationList, setNotificationList] = useState('none');

    const profile = useSelector(state => state.user.profile);

    const signedUser = profile ? profile.name : 'Desconhecido';
    const textStatus = profile ? 'Sair' : 'Sign In';

    const dispatch = useDispatch();
    function handleSignOut() {
        dispatch(signOut());
    }

    function handleNotificationList() {
        setNotificationList(notificationList === 'none' ? 'flex' : 'none');
    }

    async function loadNotifications() {
        const response = await api.get('api/notifications');
        const { data } = response;

        setNotifications(data);
    }

    useEffect(() => {
        loadNotifications();
    }, [notificationList]);

    useOutside(ref, () => {
        setNotificationList('none');
    });

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
                    <Notification ref={ref}>
                        <MdNotifications
                            className="icon"
                            color="#fff"
                            size={20}
                            style={{
                                cursor: 'pointer'
                            }}
                            onClick={handleNotificationList}
                        />
                        <NotificationList display={notificationList}>
                            {notifications.map(note => (
                                <li>{note.notification}</li>
                            ))}
                        </NotificationList>
                    </Notification>

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
