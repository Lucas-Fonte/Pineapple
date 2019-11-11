import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 20px;

    @media only screen and (max-width: 696px) {
        padding-top: 20px;
    }
`;

export const Content = styled.div`
    height: 52px;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        align-items: center;

        h1 {
            color: #fff;
        }
    }

    aside {
        display: flex;
        align-items: center;
    }
`;
export const Profile = styled.div`
    display: flex;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid rgba(255, 255, 255, 0.3);

    div {
        text-align: right;
        margin-right: 10px;

        strong {
            display: block;
            font-size: 13px;
            color: #fff;
        }

        a {
            display: block;
            margin-top: 2px;
            font-size: 12px;
            color: #fff;
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    h1 {
        margin-left: 5px;
    }
`;

export const Notification = styled.div`
    display: flex;
    flex-direction: column;

    .icon {
        transition: opacity 0.2s;

        :hover {
            opacity: 0.7;
        }
    }
`;

export const NotificationList = styled.ul.attrs(props => ({
    display: props.display
}))`
    display: ${props => props.display};
    flex-direction: column;

    animation: fade 0.6s;
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    li:first-of-type {
        margin-top: 2px;
        color: #fff;
        border-top: 0;
    }

    li {
        margin-top: 12px;
        padding-top: 12px;
        color: #fff;
        border-top: 1px solid rgba(255, 255, 255, 0.8);
    }

    padding: 14px;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1;
    margin-top: 25px;
    margin-left: -105px;
    width: 210px;
    max-height: 300px;
    position: fixed;
    border-radius: 8px;
    overflow: auto;
`;
