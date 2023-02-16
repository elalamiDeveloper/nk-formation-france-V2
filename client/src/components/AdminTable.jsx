import styled from 'styled-components';

const AdminTableContainer = styled.table`
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

const AdminTable = () => {
  return (
    <AdminTableContainer>
      <thead>
        <tr>
          <th>Thème ou Intitulé</th>
          <th>Durér maximale de prise en charge</th>
          <th>Coût pédagogique (barème HT)</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>The table body</td>
          <td>with two columns</td>
          <td>with three columns</td>
        </tr>

        <tr>
          <td>The table body</td>
          <td>with two columns</td>
          <td>with three columns</td>
        </tr>

        <tr>
          <td>The table body</td>
          <td>with two columns</td>
          <td>with three columns</td>
        </tr>

        <tr>
          <td>The table body</td>
          <td>with two columns</td>
          <td>with three columns</td>
        </tr>
      </tbody>
    </AdminTableContainer>
  );
};

export default AdminTable;
