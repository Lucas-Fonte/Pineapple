import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  padding: 15px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  animation: fade 0.7s ease-in-out;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  h1 {
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
