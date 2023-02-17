import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { OpcoItem, AdminTable } from './';

const OpcosListContainer = styled.ul`
  padding: 5rem;
  overflow: hidden;
  border-radius: 0.5rem;
`;

const OpcosList = () => {
  const [activeTable, setActiveTable] = useState(false);
  const [listOpcos, setListOpcos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const {
        data: { data },
      } = await axios.get('http://localhost:8000/api/v1/opcos');

      const newListOpcos = data.opcos.map((opco) => ({
        ...opco,
        idccActive: false,
      }));

      setListOpcos(newListOpcos);
    };

    getData();
  }, []);

  const onOpenIdccHandler = (id) => {
    const newListOpcos = listOpcos.map((opco) => {
      opco._id === id ? (opco.idccActive = true) : (opco.idccActive = false);

      return opco;
    });

    setListOpcos(newListOpcos);
  };

  const onToogleTableHandler = () => {
    setActiveTable((currActiveTable) => !currActiveTable);
  };

  return (
    <OpcosListContainer>
      {activeTable ? (
        <AdminTable idcc={listOpcos[0].idcc} />
      ) : (
        listOpcos.map((opco) => (
          <OpcoItem
            key={opco._id}
            {...opco}
            onOpenIdccHandler={onOpenIdccHandler}
            onToogleTableHandler={onToogleTableHandler}
          />
        ))
      )}
    </OpcosListContainer>
  );
};

export default OpcosList;
