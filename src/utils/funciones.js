//Consultar de forma asincronica los datos
export const consultarBDD = async (ruta) => {
    const response = await fetch(ruta);
    const datos = await response.json();
    return datos;
}