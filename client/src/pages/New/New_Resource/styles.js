import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  padding: 15px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  animation: fade 0.7s ease-in-out;

  span {
    font-weight: bold;
  }
  h1 {
    color: #fff;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
  }

  button {
    padding: 10px;
    border-radius: 4px;
    margin-top: 10px;
    height: 40px;
    border: 0;
    background: rgba(81, 203, 238, 1);
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

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: #ff7369;
    font-weight: bold;
  }
  input {
    padding: 10px;
    border-radius: 4px;
    margin-top: 10px;
    height: 40px;
    border: 0;
    background: rgba(50, 50, 50, 0.5);
    color: #fff;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;

    :focus {
      box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      border: 1px solid rgba(81, 203, 238, 1);
    }
  }

  select {
    color: #fff;
    padding: 10px;
    border-radius: 4px;
    margin-top: 10px;
    height: 40px;
    border: 0;
    background: rgba(50, 50, 50, 0.5);

    :focus {
      box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      border: 1px solid rgba(81, 203, 238, 1);
    }
  }
`;
