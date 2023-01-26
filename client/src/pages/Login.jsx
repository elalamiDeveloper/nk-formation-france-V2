import styled from 'styled-components';
import { JackInTheBox } from 'react-awesome-reveal';

const LoginContainer = styled.div`
  min-height: 47.9vh;
  .connect-page {
    height: 42rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f6f6f6;
  }

  .connect-form {
    padding: 4rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 2.5rem;
    background: #1a4264;
    border-radius: 0.5rem;
  }

  .connect-form .item {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  .connect-form .item label {
    font-size: 1.8rem;
    font-weight: 500;
  }

  .connect-form .item input {
    padding: 1rem;
    font-size: 2rem;
    font-weight: 700;
    color: #1a4264;
    border: 0.2rem solid transparent;
    border-radius: 0.5rem;
  }

  .connect-form .item input:focus {
    border-color: #cca65c;
  }

  .connect-form .btn-submit {
    grid-column: 1/-1;
    border-radius: 0.5rem;
    font-size: 1.8rem;
  }

  @media screen and (max-width: 600px) {
    .connect-form {
      width: 85%;
      grid-template-columns: 1fr;
    }
  }
`;

const Login = () => {
  return (
    <LoginContainer>
      <JackInTheBox className="connect-page">
        <form className="connect-form">
          <div className="item">
            <label htmlFor="identifiant">Identifiant</label>
            <input type="text" />
          </div>

          <div className="item">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" />
          </div>

          <button className="btn-submit">Connexion</button>
        </form>
      </JackInTheBox>
    </LoginContainer>
  );
};

export default Login;
