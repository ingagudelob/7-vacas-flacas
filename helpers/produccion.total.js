let prodTotalDia = new Array();
let vacaMasLeche = new Array();
let indexMax = new Array();
let acum = 0;
let mayor = 0;
let indexMayor = 0;
let indexMenor = 0;
let menor = 12;
let diaMax = 0;
let aux = 0;

const prodTotal = async (prod, desc) => {
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < desc; j++) {
      acum += parseFloat(prod[i][j]);
    }

    prodTotalDia[i] = acum;
    acum = 0;
  }

  console.log(`\nTabla de datos\n`.yellow);
  for (let index in prod) {
    console.log(`Dia  ${parseInt(index) + 1}. | ${prod[index]} `);
  }

  console.log("\nProducción total del hato en cada uno de los siete dias\n");
  console.log("Dias    |  Total Produción ");
  console.log("------- | -----------------");
  for (let index in prodTotalDia) {
    console.log(
      `Dia  ${parseInt(index) + 1}. | ${parseFloat(prodTotalDia[index])} `
    );
  }
};

const mayorMenor = async () => {
  for (let i = 0; i < prodTotalDia.length; i++) {
    if (prodTotalDia[i] < menor) {
      menor = prodTotalDia[i];
      indexMenor = i;
    }
    if (prodTotalDia[i] > mayor) {
      mayor = prodTotalDia[i];
      indexMayor = i;
    }
  }

  console.log(`\nDía de la semana con mayor y menor producción`);
  console.log(`\nMayor producción: Día ${indexMayor + 1}`);
  console.log(`Menor producción: Día ${indexMenor + 1}`);
};

const masLecheXdia = async (prod, desc) => {
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < desc; j++) {
      if (prod[i][j] >= diaMax && prod[i][j] >= aux) {
        aux = diaMax;
        diaMax = prod[i][j];
        if (diaMax[i] > mayor) {
          mayor = diaMax[i];
          indexMayor = i;
        }
        indexMax.push(prod[i][j]);
      }
    }
    vacaMasLeche[i] = indexMax;
    aux = 0;
    diaMax = 0;
  }

  console.log("\nNúmero de la vaca que dió mas leche en cada día\n");
  console.log("Dias    |  Vacas ");
  console.log("------- | -------------------------");

  for (let i = 0; i < 7; i++) {
    for (let index in vacaMasLeche) {
      console.log(`Dia  ${parseInt(i) + 1}. | Vaca ${vacaMasLeche[index]} `);
    }
  }
  console.log(vacaMasLeche);
};

module.exports = {
  prodTotal,
  mayorMenor,
  masLecheXdia,
};
