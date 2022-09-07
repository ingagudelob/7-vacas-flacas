const { default: inquirer } = require("inquirer");
const inq = require("inquirer");
require("colors");

const questions = [
  {
    type: "list",
    name: "opcion",
    message: "¿Que desea realizar?",
    choices: [
      {
        value: "1",
        name: `${"1.".green} Llenar tablas de datos`,
      },
      {
        value: "2",
        name: `${"2.".green} Datos totales del hato`,
      },
      {
        value: "3",
        name: `${"3.".green} Salir`,
      },
    ],
  },
];

const showMenuArrow = async () => {
  console.clear();

  console.log("===================================".green);
  console.log("********* 7 Vacas Flacas **********".yellow);
  console.log("===================================\n".green);

  const { opcion } = await inq.prompt(questions);

  return opcion;
};

const pausa = async () => {
  const questionNext = [
    {
      type: "input",
      name: "ENTER",
      message: `Presione ${"ENTER".green} para continuar`,
    },
  ];
  console.log("\n");
  await inq.prompt(questionNext);
};
module.exports = {
  showMenuArrow,
  pausa,
};
