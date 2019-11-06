import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 1000px;
    max-height: 600px;
    padding: 15px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    animation: fade 0.6s;
    overflow: hidden;

    @media only screen and (max-width: 600px) {
        max-height: 100vh;
        margin-bottom: 10px;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        strong {
            display: block;
            color: #fff;
            font-size: 24px;
        }
        aside {
            display: flex;
            align-items: center;
            div {
                display: flex;
                align-items: center;
                padding: 12px;
                border-radius: 4px;
                border: 0;
                background: #0095ff;
                transition: background 0.2s;
                :hover {
                    background: ${darken(0.07, '#0095ff')};
                }
                span {
                    display: block;
                    font-weight: bold;
                    margin-left: 8px;
                    color: #fff;
                }
            }
        }
    }

    h1 {
        color: #fff;
    }
    ul {
        color: #fff;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    margin-top: 20px;
    max-width: 980px;
    max-height: 200%;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    overflow: auto;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

export const ProductText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const ProductButtons = styled.aside`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    @media only screen and (max-width: 600px) {
        margin-top: 20px;
    }
`;

export const ProductList = styled.div`
    width: 170%;
    display: flex;
    min-height: 500px;
    flex-direction: column;
    margin-right: 20px;
    animation: fade 0.6s;
    overflow: hidden;

    h1 {
        color: #000;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
        grid-gap: 15px;
        overflow: auto;
    }

    @media only screen and (max-width: 600px) {
        margin-right: 0;
        width: 100%;
    }

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const ProductExtra = styled.div`
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #fff;
    border-radius: 8px;

    @media only screen and (max-width: 600px) {
        min-height: 600px;
        margin-top: 10px;
    }

    img {
        width: 100%;
        border-radius: 8px;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 20px;

        input {
            background: rgba(0, 0, 0, 0.6);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;

            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }

        textarea {
            background: rgba(0, 0, 0, 0.6);
            border: 0;
            border-radius: 4px;
            height: 60px;
            padding: 15px;
            color: #fff;
            margin: 0 0 10px;

            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
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
    }
`;

export const ProductNew = styled.div.attrs(props => ({
    display: props.display
}))`
    display: ${props => props.display};
    flex-direction: column;
    animation: fade 0.6s;
    h1 {
        color: #000;
    }

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
export const ProductDetails = styled.div.attrs(props => ({
    display: props.display
}))`
    display: ${props => props.display};
    flex-direction: column;
    animation: fade 0.6s;

    h1 {
        color: #000;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const ProductEdit = styled.div.attrs(props => ({
    display: props.display
}))`
    display: ${props => props.display};
    flex-direction: column;
    animation: fade 0.6s;

    h1 {
        color: #000;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
