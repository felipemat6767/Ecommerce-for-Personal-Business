import React from 'react'
import { createContext, useEffect, useState } from 'react'
import { helpHttp } from '../helpers/helpHttp'

export const ProviderContext = createContext()
const Provider = (props) => {
    const [db, setDb] = useState(null)
    let url = "http://localhost:4000/productos"

    useEffect(() => {
        helpHttp()
          .get(url)
          .then((res) => {
            if (!res.err) {
              setDb(res);
            } else {
              setDb(null);
            }
          });
      }, [url]);
    return (
        <ProviderContext.Provider
            value={{
                db
            }}>
            {props.children}
        </ProviderContext.Provider>
    )
}

export default Provider
