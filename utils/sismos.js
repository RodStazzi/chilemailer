const axios = require("axios");
const url = "https://chilealerta.com/api/query/?user=demo&select=ultimos_sismos&country=chile";

const verSismos = async () => {
  try {
    const { data } = await axios.get(url);
    const response = data;
     return  `<li>El último sismo se registró el ${response.ultimos_sismos_chile[0].chilean_time}, ubicado ${response.ultimos_sismos_chile[0].reference}, con una magnitud de ${response.ultimos_sismos_chile[0].magnitude}${response.ultimos_sismos_chile[0].scale} y una profundidad de ${response.ultimos_sismos_chile[0].depth}</li>
     <li>El penúltimo sismo se registró el ${response.ultimos_sismos_chile[1].chilean_time}, ubicado ${response.ultimos_sismos_chile[1].reference}, con una magnitud de ${response.ultimos_sismos_chile[1].magnitude}${response.ultimos_sismos_chile[1].scale} y una profundidad de ${response.ultimos_sismos_chile[1].depth}</li>
     <li>El antepenúltimo sismo se registró el ${response.ultimos_sismos_chile[2].chilean_time}, ubicado ${response.ultimos_sismos_chile[2].reference}, con una magnitud de ${response.ultimos_sismos_chile[2].magnitude}${response.ultimos_sismos_chile[2].scale} y una profundidad de ${response.ultimos_sismos_chile[2].depth}</li>`;
  } catch (error) {
    console.log(error);
  }
};

// (async () => console.log(await mostrar()))();

module.exports = { verSismos };
