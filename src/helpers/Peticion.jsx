export const Peticion = async (url, metodo, datosGuardar = "") => {

  let load = true;

  let opciones = {
    method: "GET",
  };

  if (metodo == "GET" || metodo == "DELETE") {
    opciones = {
      method: metodo,
    };
  }

   if (metodo == "POST" || metodo == "PUT") {
     opciones = {
       method: metodo,
       body: JSON.stringify(datosGuardar),
       headers: {
         "Content-Type": "application/json",
      },
     };
  }

  const peticion = await fetch(url, opciones);
  const datos = await peticion.json();

  load = false;

  return {
    datos,
    load,
  };
};
