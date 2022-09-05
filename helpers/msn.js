require("colors");

const showMenu = () => {
  console.clear();

  console.log("===================================".blue);
  console.log("********* 7 Vacas Flacas **********".yellow);
  console.log("===================================\n".blue);

  console.log(`${"1.".blue} Determinar la cantidad de vacas`);
  console.log(`${"2.".blue} Llenar tabla de datos`);
  console.log(`${"3.".blue} Producción total de leche del hato`);
  console.log(`${"4.".blue} Dia de mayor y menor producción`);
  console.log(`${"5.".blue} Conocer que vaca produjo mas leche en cada dia`);
  console.log(`${"0.".blue} Salir\n`);

  console.log("**** Seleccione un opción  ****\n\n");

  const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readLine.question("Seleccione una opción: ", (opt) => {
    console.log({ opt });
    readLine.close();
  });
};

module.exports = {
  showMenu,
};
