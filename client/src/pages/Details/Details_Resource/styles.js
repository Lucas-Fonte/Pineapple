import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  padding: 15px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  h1 {
    color: #fff;
  }
  div {
    display: flex;
    flex-direction: column;
    color: #fff;
    background: rgba(0, 0, 0, 0.6);
    padding: 10px;
    border-radius: 4px;
  }
`;
