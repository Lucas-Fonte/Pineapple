import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(73, 72, 72, 0.02);
  list-style-type: none;
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
  img {
    width: 45px;
    height: 45px;
    border-radius: 30px;
  }
`;
