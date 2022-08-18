const axios = require("axios");
const url = "https://farmanet.minsal.cl/index.php/ws/getLocalesTurnos";
let listaFarma = '';
const verFarmacias = async () => {
  try {
    const { data } = await axios.get(url);
    const far = data.filter(far => far.fk_region == "7");
    far.map((far)=> {
      listaFarma += `<li>La farmacia ${far.local_nombre} atiende el día ${far.funcionamiento_dia} desde las ${far.funcionamiento_hora_apertura} hasta las ${far.funcionamiento_hora_cierre}. Ubicada en ${far.localidad_nombre}, dirección ${far.local_direccion}, teléfono ${far.local_telefono}.</li>`;
    });
    return listaFarma;
  } catch (error) {
    console.log(error);
  }
};

// (async () => console.log(await verFarmacias()))();

module.exports = { verFarmacias };
