import React from "react";

const Context = React.createContext({
    name: `
        Esto es lo que se muestra cuando no hay Provider.
        Es decir, cuando intentamos consumirlo sin tener acceso a este.
    `,
    dev: true
});

export default Context;