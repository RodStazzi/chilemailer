const axios = require("axios");
const url = "https://api.gael.cloud/general/public/clima";

const verClima = async () => {
  try {
    const { data } = await axios.get(url);
    const response = data;
    let SC = response.find((c)=> c.Estacion === 'Santiago Centro')
    let SP = response.find((c)=> c.Estacion === 'Santiago Poniente')
    // let {SC, SP} = response.find((c)=> c.Estacion === 'Santiago Poniente' || 'Santiago Centro')

    return  `<li>A las ${SC.HoraUpdate} en Santiago Poniente se captaron ${SC.Temp}°C, ${SC.Humedad}% de humedad y un estado de ${SC.Estado}.</li>
             <li>A las ${SP.HoraUpdate} en Santiago Poniente se captaron ${SP.Temp}°C, ${SP.Humedad}% de humedad y un estado de ${SP.Estado}.</li>
             `;
  } catch (error) {
    console.log(error);
  }
};

// (async () => console.log(await mostrar()))();

module.exports = { verClima };

