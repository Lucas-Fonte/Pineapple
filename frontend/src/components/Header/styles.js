import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: black;
  padding: 0 20px;
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
      color: #999;
    }
  }
  button {
    width: 60px;
    margin-left: 20px;
    height: 35px;
    background: #ff5c5c;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.07, '#ff5c5c')};
    }
  }
`;
