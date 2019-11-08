import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    align-items: center;
    max-height: 88px;
    flex-direction: row;
    background: #fff;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2),
        0 2px 5px 0 rgba(73, 72, 72, 0.02);
    list-style-type: none;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 8px;

    .ProductContext {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-left: 20px;
        justify-content: space-between;
        align-items: center;

        @media only screen and (max-width: 600px) {
            flex-direction: column;
        }

        span {
            color: #000;
            font-size: 12px;
            margin-left: 10px;
        }
    }
    img {
        width: 70px;
        height: 70px;
        border-radius: 70px;
    }
`;
