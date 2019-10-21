import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1000px;
  padding: 15px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
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
        background: #ff5c5c;
        transition: background 0.2s;
        :hover {
          background: ${darken(0.07, '#ff5c5c')};
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
  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;
