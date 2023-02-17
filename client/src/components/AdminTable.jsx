import styled from 'styled-components';

const AdminTableContainer = styled.table`
  width: 100%;
  margin-bottom: 10rem;
  text-align: center;

  caption   {
    font-size: 5rem;
  }

  thead {
    color: #f0e6d1;
    font-size: 2.6rem;
    font-weight: 600;
    border-radius: 2px solid #f0e6d1;

    th {
      background: #0f273c;
      padding: 3rem 6rem;
    }
  }

  tbody {
    tr {
      background: #2f77b5;

      td {
        padding: 1.5rem 3rem;
        font-size: 2rem;
        color: #f0e6d1;
        padding-left: 2rem;
      }
    }
  }
`;

const AdminTable = ({ idcc }) => {
  console.log(idcc[0].nombreSalariee);

  return (
    <>
      <AdminTableContainer>
        <caption>Themes</caption>
        <thead>
          <tr>
            <th>Thème ou Intitulé</th>
            <th>Durér maximale de prise en charge</th>
            <th>Coût pédagogique (barème HT)</th>
          </tr>
        </thead>

        <tbody>
          {idcc[0].themes.map(({ nom, dureeMaximal, courPedagogique }) => (
            <tr>
              <td>{nom}</td>
              <td>{dureeMaximal}</td>
              <td>{courPedagogique}</td>
            </tr>
          ))}
        </tbody>
      </AdminTableContainer>

      <AdminTableContainer>
        <caption>nombreSalariee</caption>

        <thead>
          <tr>
            <th>Value</th>
            <th>Budget</th>
          </tr>
        </thead>

        <tbody>
          {idcc[0].nombreSalariee.map(({ nbr, budget }) => (
            <tr>
              <td>{nbr}</td>
              <td>{budget}</td>
            </tr>
          ))}
        </tbody>
      </AdminTableContainer>
    </>
  );
};

export default AdminTable;
