import fs from 'fs';

const data = JSON.parse(fs.readFileSync('../data/json/opcos.json', 'utf-8'));
const data2 = JSON.parse(
  fs.readFileSync('../data/json/fichier_crm.json', 'utf-8')
);

// console.log(data);
console.log(data2[0]);

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
    const newIdcc = {
      idccNbr: opco.IDCC,
      libelle: opco.Libelle,
      themes: [],
      nombreSalariee: [],
    };

    const x = data2.filter((item) => item.IDCC === opco.IDCC);

    x.map((item) => {
      newIdcc.themes.push({
        nom: item.theme,
        dureeMaximal: item.dureeMaximal,
        courPedagogique: item.courPedagogique,
      });
      newIdcc.nombreSalariee.push({
        nbr: item.nombreSalariee,
        budget: item.budget,
        dureeMaximal: item.dureeMaximal,
      });
    });

    idcc.push(newIdcc);

    // const x = data2.map(item => item.)
    // idcc.push({
    //   idccNbr: opco.IDCC,
    //   libelle: opco.Libelle,
    //   themes: [
    //     {
    //       nom: '',
    //       dureeMaximal: '',
    //       courPedagogique: 03,
    //     },
    //     {
    //       nom: '',
    //       dureeMaximal: '',
    //       courPedagogique: 03,
    //     },
    //   ],
    //   nombreSalariee: [
    //     {
    //       nbr: '',
    //       budget: 3000,
    //       dureeMaximal: 90,
    //     },
    //     {
    //       nbr: '',
    //       budget: 3000,
    //       dureeMaximal: 90,
    //     },
    //     {
    //       nbr: '',
    //       budget: 3000,
    //       dureeMaximal: 90,
    //     },
    //   ],
    // });
  });
  // console.log(idcc[0]);
  // idcc
  opcos.push({ opcosName: opcoName, idcc });
});

fs.writeFileSync('../data/json/opcos-simple.json', JSON.stringify(opcos));
