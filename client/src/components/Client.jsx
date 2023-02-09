import styled from 'styled-components';

const ClientContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.5rem;

  .image-container {
    width: 15rem;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  h3 {
    font-size: 2.2rem;
  }

  h4 {
    font-size: 1.6rem;
  }

  button {
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.5rem 3rem;
    border-radius: 0.3rem;
    background: #1a4264;
    color: #f0e6d1;
  }
`;

const Client = ({ name, imgUrl, email }) => {
  return (
    <ClientContainer>
      <div className="image-container">
        <img src={imgUrl} alt="profil" />
      </div>

      <h3>{name}</h3>

      <h4>{email}</h4>

      <button className="">accéder</button>
    </ClientContainer>
  );
};

export default Client;
