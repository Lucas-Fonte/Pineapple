import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    background: linear-gradient(to bottom, #34d2eb, #34eb74);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    padding: 10px;
    max-width: 315px;
    text-align: center;

    h1 {
        color: #fff;
    }
    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background: rgba(0, 0, 0, 0.3);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;

            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }

            :after {
                background: rgba(0, 0, 0, 0.3);
                border: 0;
                border-radius: 4px;
                height: 44px;
                padding: 0 15px;
                color: #fff;
                margin: 0 0 10px;
            }
        }

        span {
            color: #0095ff;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        button {
            margin: 5px 0 0;
            height: 44px;
            background: #0095ff;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.05, '#0095ff')};
            }
        }

        a {
            color: #000;
            font-weight: bold;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.9;

            &:hover {
                color: #000;
                opacity: 1;
            }
        }
        a + a {
            color: #525252;
            font-weight: bold;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.9;

            &:hover {
                color: #000;
                opacity: 1;
            }
        }
    }
`;
