const inquirer = require("inquirer");
const esLetra = require("./validarCaracter");

// Matriz de n x m. El tamaño de m se recibe como parametro
const m = 7;
let tablaVacas = new Array();

const setMatriz = async (n) => {
  for (let i = 0; i < m; i++) {
    tablaVacas[i] = new Array();
    for (let j = 0; j < n; j++) {
      console.clear();
      console.log("===================================".green);
      console.log("********* 7 Vacas Flacas **********".yellow);
      console.log("===================================\n".green);
      const questionTabla = [
        {
          type: "input",
          name: "prod",
          message: `Ingrese cantidad producción de dia ${i + 1} vaca ${
            j + 1
          } (litros): `,
          validate(value) {
            if (value.length === 0) {
              return "/ Error / - El campo no puede ser nulo";
            }
            if (esLetra(value)) {
              return "/ Error / - Ingresa un valor numerico";
            }
            if (value < 0.0) {
              return "/ Error / - 0.0 es el valor minimo requerido";
            }
            if (value > 11.9) {
              return "/ Error / - 11.9 es el valor maximo requerido";
            }
            return true;
          },
        },
      ];

      const { prod } = await inquirer.prompt(questionTabla);
      tablaVacas[i][j] = parseFloat(prod);
    }
  }
  console.log("Dias    |  Vacas ");
  console.log("------- | -----------------------");
  for (let index in tablaVacas) {
    console.log(`Dia  ${parseInt(index) + 1}. | ${tablaVacas[index]} `);
  }
  return tablaVacas;
};

module.exports = {
  setMatriz,
};
