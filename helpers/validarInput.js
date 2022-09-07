const inquirer = require("inquirer");
const esLetra = require("./validarCaracter");

const leerInput = async (mensaje) => {
  const questionInput = [
    {
      type: "input",
      name: "desc",
      message: mensaje,
      validate(value) {
        if (value.length === 0) {
          return "/ Error / - El campo no puede ser nulo";
        }
        if (esLetra(value)) {
          return "/ Error / - Ingresa un valor numerico";
        }
        if (value < 3) {
          return "/ Error / - 3 es el valor minimo requerido";
        }
        if (value > 50) {
          return "/ Error / - 50 es el valor maximo requerido";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(questionInput);
  return desc;
};

module.exports = {
  leerInput,
};
