import fs from 'fs';

const data = JSON.parse(fs.readFileSync('../data/json/opcos.json', 'utf-8'));

const opcosNames = [
  ...new Set(data.map((item) => item.Operateurdecompetences)),
];

const opcos = [];

opcosNames.forEach((opcoName) => {
  const opcosSelected = data.filter(
    (opco) => opco.Operateurdecompetences === opcoName
  );

  const idcc = [];
  opcosSelected.forEach((opco) => {
    idcc.push({
      idccNbr: opco.IDCC,
      libelle: opco.Libelle,
    });
  });

  opcos.push({ opcosName: opcoName, idcc });
});

fs.writeFileSync('../data/json/opcos-simple.json', JSON.stringify(opcos));
