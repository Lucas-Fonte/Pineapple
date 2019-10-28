import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 10px 6px -6px rgba(0, 0, 0, 0.3);
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
    color: #000;
    font-size: 16px;
  }
  aside {
    display: flex;
    align-items: center;
    span {
      display: block;
      color: #000;
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
