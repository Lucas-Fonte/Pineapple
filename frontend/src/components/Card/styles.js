import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  padding: 10px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.6);
  transition: height 0.5s;
`;

export const CardContent = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  opacity: ${props => (props.past ? 0.4 : 1)};
  strong {
    display: block;
    color: #fff;
    font-size: 16px;
  }
  aside {
    display: flex;
    align-items: center;
    span {
      display: block;
      color: #fff;
      margin-right: 30px;
    }
    button {
      display: flex;
      border: 0;
      background: none;
    }
    .details {
      cursor: pointer;
    }
  }
`;
export const Extra = styled.div`
  flex-direction: column;

  animation: fade 1s ease-in-out;
  color: #fff;
  font-size: bold;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
