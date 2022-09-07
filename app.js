require("colors");
const { leerInput } = require("./helpers/validarInput");
const { showMenuArrow, pausa } = require("./helpers/inquirerMenu");
const { setMatriz } = require("./helpers/matriz.vacas");
const {
  prodTotal,
  mayorMenor,
  masLecheXdia,
} = require("./helpers/produccion.total");
console.clear();

const main = async () => {
  let opt = "";
  let tablaProd;
  let desc;

  do {
    opt = await showMenuArrow();
    //console.log({ opt });

    switch (opt) {
      case "1":
        // Hago un input a la consola y guardo el retorno en desc
        desc = await leerInput("Ingrese la cantidad de Vacas: ");
        tablaProd = await setMatriz(desc).then((data) => data);
        break;

      case "2":
        await prodTotal(tablaProd, desc);
        await mayorMenor();
        await masLecheXdia(tablaProd, desc);
        break;

      case "3":
        break;
    }

    await pausa();
  } while (opt !== "3");
};

main();
