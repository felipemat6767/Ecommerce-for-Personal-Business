export const helpHttp = () => { //Basado en la arquitectura Rest (Requiere Post, Get, Put, Delete). Este se basa en el protocolo HTTP
    const customFetch = (endpoint, options) => { //Fetch necesita una ruta(endpoint) y la serie de opciones que pueda recibir esa peticion(Donde aparecen el metodo, headers, etc)
      const defaultHeader = {
        accept: "application/json",
      };
  
      const controller = new AbortController();//Puede ser que el servidor al cual se hace la peticion Fetch este caido. Para evitar que esta no este infinitamente esperando una respuesta del servidor se usa abortController. Si la peticion fetch no detecta una respuesta del servidor, se ejecutaria abortController
      options.signal = controller.signal; //Se agrega el objeto controler y agregar asi una prop de AbortController llamada signal a las opciones de la peticion Fetch. Es un "manejador" de errores si el endpoint que consultamos no responde
  
      options.method = options.method || "GET"; //Si el usuario no especifico ningun metodo, entonces este por default va a ser GET
      options.headers = options.headers // Si la prop de headers viene entonces se usa el spread operator para "mezclar" las headers que envia o "TRAE" el usuario y las que se programan por defecto en el header. 
        ? { ...defaultHeader, ...options.headers }
        : defaultHeader;
  
    // Hay una prop body en las peticiones Fetch
      options.body = JSON.stringify(options.body) || false; // Es necesario convertirlo en una cadena de texto con el json.stringify para que se vaya asi al backend hace la peticion. Si no esta definido en las peticiones que envio el usuario en options al hacer su peticion por Get
      if (!options.body) delete options.body; // Si el valor de options.body es false, se borra el body. Ya que no se puede enviar dentro del objeto de options de la peticion Fetch un body vacio o falso. Si no existe se elimina la opcion body
  
      //console.log(options);
      setTimeout(() => controller.abort(), 3000); //Cuando transcurra 3 seg, si el servidor no responde se ejecuta el metodo abort
  
      return fetch(endpoint, options) //Retorna le ejecucion de una peticion fetch. Url es la que esta definida en la variable endpoint. Las opciones van a ser aquellas que el usuario envie y aquellas definidas arriba.
        .then((res) =>
          res.ok
            ? res.json()
            : Promise.reject({
                err: true,
                status: res.status || "00", // Si no existe res.status, debe enviar un cCodigo 00. Este signifca que la API no trajo ningun status de error
                statusText: res.statusText || "Ocurrió un error",
              })
        )
        .catch((err) => err);
    };
  
    const get = (url, options = {}) => customFetch(url, options); //Recordar que options = {} significa que el valor por defecto de options va a ser un objeto.
  
    const post = (url, options = {}) => {
      options.method = "POST";
      return customFetch(url, options);
    };
  
    const put = (url, options = {}) => {
      options.method = "PUT";
      return customFetch(url, options);
    };
  
    const del = (url, options = {}) => {
      options.method = "DELETE";
      return customFetch(url, options);
    };
  
    return {
      get,
      post,
      put,
      del,
    };
  };